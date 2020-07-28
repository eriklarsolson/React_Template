import React, {Component} from 'react';
import { findDOMNode } from 'react-dom'
import { Line, TOOL_LINE, Ellipse, TOOL_ELLIPSE, Rectangle, TOOL_RECTANGLE } from './tools'
import {Col} from "react-bootstrap";

export const toolsMap = {
    [TOOL_LINE]: Line,
    [TOOL_RECTANGLE]: Rectangle,
    [TOOL_ELLIPSE]: Ellipse
};


export interface propTypes {
    items: [],
    animate: boolean,
    canvasClassName: string,
    color: string,
    fillColor: string,
    size: number,
    tool: string,
    toolsMap: object,
    onItemStart: () => void, // function(stroke:Stroke) { ... }
    onEveryItemChange: () => void, // function(idStroke:string, x:number, y:number) { ... }
    onDebouncedItemChange: () => void, // function(idStroke, points:Point[]) { ... }
    onCompleteItem: () => void, // function(stroke:Stroke) { ... }
    debounceTime: number,
}

export default class SketchPad extends Component<any, any> {
    canvasRef: any;
    tool: any;
    constructor(props: any) {
        super(props);
        this.state = {
            interval: null,
            defaultProps: {
                width: 500,
                height: 500,
                canvasClassName: 'canvas',
                debounceTime: 1000,
                animate: true,
                tool: TOOL_LINE,
                toolsMap
            },
        };

        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.context = this.canvasRef.current.getContext('2d');

        this.initTool(this.state.defaultProps.tool);
    }


    initTool = (tool: React.ReactText) => {
        // this.setState({tool: this.state.defaultProps.toolsMap[tool](this.context)})
        this.tool = this.state.defaultProps.toolsMap[tool](this.context)
    }

    // @ts-ignore
    componentWillReceiveProps({tool, items}) {
        items
            .filter((item: any) => this.state.props.items.indexOf(item) === -1)
            .forEach((item: { tool: any; }) => {
                this.state.initTool(item.tool);
                this.state.tool.draw(item, this.state.defaultProps.animate);
            });
        this.initTool(tool)
    }

    render() {
        const onMouseDown = (e: { clientX: number; clientY: number; }) => {
            const data = this.tool.onMouseDown(...getCursorPosition(e), this.state.defaultProps.color,
                this.state.defaultProps.size, this.state.defaultProps.fillColor, this.context);
            data && data[0] && this.props.onItemStart && this.props.onItemStart.apply(null, data);
            if (this.props.onDebouncedItemChange) {
                this.setState({interval: setInterval(this.state.onDebouncedMove, this.state.props.debounceTime)});
            }
        }

        const onDebouncedMove = () => {
            if (typeof this.tool.onDebouncedMouseMove == 'function' && this.props.onDebouncedItemChange) {
                this.props.onDebouncedItemChange.apply(null, this.state.tool.onDebouncedMouseMove());
            }
        }

        const onMouseMove = (e: { clientX: number; clientY: number; }) => {
            const data = this.tool.onMouseMove(...getCursorPosition(e), this.context);
            data && data[0] && this.props.onEveryItemChange && this.props.onEveryItemChange.apply(null, data);
        }

        const onMouseUp = (e: { clientX: number; clientY: number; }) => {
            const data = this.tool.onMouseUp(...getCursorPosition(e), this.context);
            data && data[0] && this.props.onCompleteItem && this.props.onCompleteItem.apply(null, data);
            if (this.props.onDebouncedItemChange) {
                clearInterval(this.state.interval);
                this.setState({interval: null})
            }
        }

        const getCursorPosition = (e: { clientX: number; clientY: number; }) => {
            const {top, left} = this.canvasRef.current.getBoundingClientRect();
            return [
                e.clientX - left,
                e.clientY - top
            ];
        }

        return (
            <>
            <canvas
                ref={this.canvasRef}
                className={this.state.canvasClassName}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseOut={onMouseUp}
                onMouseUp={onMouseUp}
                width={this.props.width}
                height={this.props.height}
                style={{backgroundColor: "white"}}
            />

                <button
                    style={{width: "100px", height: "100px"}}
                    className={this.props.tool === TOOL_LINE  ? 'item-active' : 'item'}
                    onClick={() => this.props.setTool(TOOL_LINE)}
                >Line</button>

            </>
        )
    }
}