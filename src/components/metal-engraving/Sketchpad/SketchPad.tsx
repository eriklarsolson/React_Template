import React, {Component} from 'react';
import { findDOMNode } from 'react-dom'
import { Pencil, TOOL_PENCIL, Line, TOOL_LINE, Ellipse, TOOL_ELLIPSE, Rectangle, TOOL_RECTANGLE } from './tools'

export const toolsMap = {
    [TOOL_PENCIL]: Pencil,
    [TOOL_LINE]: Line,
    [TOOL_RECTANGLE]: Rectangle,
    [TOOL_ELLIPSE]: Ellipse
};


export interface propTypes {
    width: number,
    height: number,
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

export default class SketchPad<propTypes> extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            tool: null,
            interval: null,
            defaultProps: {
                width: 500,
                height: 500,
                color: '#000',
                size: 5,
                fillColor: 'black',
                canvasClassName: 'canvas',
                debounceTime: 1000,
                animate: true,
                tool: TOOL_PENCIL,
                toolsMap
            },
            // initTool: this.initTool,
            onMouseDown: this.onMouseDown,
            onMouseMove: this.onMouseMove,
            onDebouncedMove: this.onDebouncedMove,
            onMouseUp: this.onMouseUp,
            canvasRef: React.createRef(),
            canvas: null,
        };
    }



    componentDidMount() {
        this.initTool(this.state.defaultProps.tool);
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

    initTool(tool: React.ReactText) {
        this.setState({tool: this.state.defaultProps.toolsMap[tool](this.context)})
    }

    onMouseDown(e: { clientX: number; clientY: number; }) {
        const data = this.state.tool.onMouseDown(...this.getCursorPosition(e), this.state.defaultProps.color, this.state.defaultProps.size, this.state.defaultProps.fillColor);
        data && data[0] && this.props.onItemStart && this.props.onItemStart.apply(null, data);
        if (this.props.onDebouncedItemChange) {
            this.setState({interval: setInterval(this.state.onDebouncedMove, this.state.props.debounceTime)});
        }
    }

    onDebouncedMove() {
        if (typeof this.state.tool.onDebouncedMouseMove == 'function' && this.props.onDebouncedItemChange) {
            this.props.onDebouncedItemChange.apply(null, this.state.tool.onDebouncedMouseMove());
        }
    }

    onMouseMove(e: { clientX: number; clientY: number; }) {
        const data = this.state.tool.onMouseMove(...this.getCursorPosition(e));
        data && data[0] && this.props.onEveryItemChange && this.props.onEveryItemChange.apply(null, data);
    }

    onMouseUp(e: { clientX: number; clientY: number; }) {
        const data = this.state.tool.onMouseUp(...this.getCursorPosition(e));
        data && data[0] && this.props.onCompleteItem && this.props.onCompleteItem.apply(null, data);
        if (this.props.onDebouncedItemChange) {
            clearInterval(this.state.interval);
            this.setState({interval: null})
        }
    }

    getCursorPosition(e: { clientX: number; clientY: number; }) {
        const {top, left} = this.state.canvas.getBoundingClientRect();
        return [
            e.clientX - left,
            e.clientY - top
        ];
    }

    render() {
        return (
            <canvas
                ref={this.state.canvasRef}
                className={this.state.canvasClassName}
                onMouseDown={this.state.onMouseDown}
                onMouseMove={this.state.onMouseMove}
                onMouseOut={this.state.onMouseUp}
                onMouseUp={this.state.onMouseUp}
                width={this.state.width}
                height={this.state.height}
            />
        )
    }
}