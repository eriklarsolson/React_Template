
import { v4 } from 'uuid';

export const TOOL_LINE = 'line';

export default () => {
    let line: { id: string; tool: string; color: any; size: any; start: { x: any; y: any; }; end: { x: any; y: any; }; } | null = null;
    let imageData: null = null;

    const onMouseDown = (x: any, y: any, color: any, size: any, fillColor: any, context: any) => {
        line = {
            id: v4(),
            tool: TOOL_LINE,
            color,
            size,
            start: { x, y },
            end: { x, y },
        };

        console.log(context);

        imageData = context.getImageData(0, 0, context.clientWidth, context.clientHeight);
        return [line];
    };

    const drawLine = (item: { id?: string; tool?: string; color?: any; size?: any; start?: any; end?: { x: any; y: any; } | null; }, x: any, y: any, context: any) => {
        context.save();
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.beginPath();
        context.lineWidth = item.size;
        context.strokeStyle = item.color;
        context.globalCompositeOperation = 'source-over';
        context.moveTo(item.start.x, item.start.y);
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
        context.restore();
    };

    const onMouseMove = (x: any, y: any, context: any) => {
        if (!line) return;
        context.putImageData(imageData, 0, 0);
        drawLine(line, x, y, context);
    };

    const onMouseUp = (x: any, y: any, context: any) => {
        if (!line) return;
        onMouseMove(x, y, context);
        const item = line;
        imageData = null;
        line = null;
        item.end = { x, y };
        return [item];
    };

    const draw = (item: { end: { x: any; y: any; }; }, context: any) => drawLine(item, item.end.x, item.end.y, context);

    return {
        onMouseDown,
        onMouseMove,
        onMouseUp,
        draw,
    };
};