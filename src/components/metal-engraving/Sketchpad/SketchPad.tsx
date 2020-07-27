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

export default class SketchPad extends Component<any, any> {
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
                fillColor: '',
                canvasClassName: 'canvas',
                debounceTime: 1000,
                animate: true,
                tool: TOOL_PENCIL,
                toolsMap
            },
            canvasRef: null,
            canvas: null,
            ctx: null
        };

        this.initTool = this.state.initTool.bind(this);
        this.onMouseDown = this.state.onMouseDown.bind(this);
        this.onMouseMove = this.state.onMouseMove.bind(this);
        this.onDebouncedMove = this.state.onDebouncedMove.bind(this);
        this.onMouseUp = this.state.onMouseUp.bind(this);
    }

    componentDidMount() {
        this.setState({canvas: findDOMNode(this.state.canvasRef)})
        this.setState({ctx: this.state.canvas.getContext('2d')})
        this.state.initTool(this.state.props.tool);
    }

    // @ts-ignore
    componentWillReceiveProps({tool, items}) {
        items
            .filter((item: any) => this.state.props.items.indexOf(item) === -1)
            .forEach((item: { tool: any; }) => {
                this.state.initTool(item.tool);
                this.state.tool.draw(item, this.state.props.animate);
            });
        this.state.initTool(tool);
    }

    initTool(tool: React.ReactText) {
        this.state.state.tool = this.state.props.toolsMap[tool](this.state.ctx);
    }

    onMouseDown(e: { clientX: number; clientY: number; }) {
        const data = this.state.tool.onMouseDown(...this.state.getCursorPosition(e), this.state.props.color, this.state.props.size, this.state.props.fillColor);
        data && data[0] && this.state.props.onItemStart && this.state.props.onItemStart.apply(null, data);
        if (this.state.props.onDebouncedItemChange) {
            // this.state.interval = TODO
            setInterval(this.state.onDebouncedMove, this.state.props.debounceTime);
        }
    }

    onDebouncedMove() {
        if (typeof this.state.tool.onDebouncedMouseMove == 'function' && this.state.props.onDebouncedItemChange) {
            this.state.props.onDebouncedItemChange.apply(null, this.state.tool.onDebouncedMouseMove());
        }
    }

    onMouseMove(e: { clientX: number; clientY: number; }) {
        const data = this.state.tool.onMouseMove(...this.state.getCursorPosition(e));
        data && data[0] && this.state.props.onEveryItemChange && this.state.props.onEveryItemChange.apply(null, data);
    }

    onMouseUp(e: { clientX: number; clientY: number; }) {
        const data = this.state.tool.onMouseUp(...this.state.getCursorPosition(e));
        data && data[0] && this.state.props.onCompleteItem && this.state.props.onCompleteItem.apply(null, data);
        if (this.state.props.onDebouncedItemChange) {
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
                ref={(canvas) => { this.setState({canvasRef: canvas}) }}
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