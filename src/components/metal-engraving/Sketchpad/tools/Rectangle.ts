import { v4 } from 'uuid';

export const TOOL_RECTANGLE = 'rectangle';

export default (context: any) => {
    let rectangle: { id?: string; tool?: string; color: any; size: any; fill: any; start: { x: any; y: any; } | { x: number; y: number; } | undefined; end: any; } | null = null;
    let imageData: null = null;

    const onMouseDown = (x: any, y: any, color: any, size: any, fill: any) => {
        rectangle = {
            id: v4(),
            tool: TOOL_RECTANGLE,
            color,
            size,
            fill,
            start: { x, y },
            end: null
        };
        imageData = context.getImageData(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
        return [rectangle];
    };

    const drawRectangle = (item: { end?: any; start?: { x: number; y: number }; size?: any; color?: any; fill?: any }, mouseX: number, mouseY: number) => {
        // @ts-ignore
        const startX = mouseX < item.start.x ? mouseX : item.start.x;
        // @ts-ignore
        const startY = mouseY < item.start.y ? mouseY : item.start.y;
        // @ts-ignore
        const widthX = Math.abs(item.start.x - mouseX);
        // @ts-ignore
        const widthY = Math.abs(item.start.y - mouseY);

        context.beginPath();
        context.lineWidth = item.size;
        context.strokeStyle = item.color;
        context.fillStyle = item.fill;
        context.rect(startX, startY, widthX, widthY);
        context.stroke();
        if (item.fill) context.fill();
    };

    const onMouseMove = (x: number, y: number) => {
        if (!rectangle) return;
        context.putImageData(imageData, 0, 0);
        context.save();
        drawRectangle(rectangle, x, y);
        context.restore();
    };

    const onMouseUp = (x: number, y: number) => {
        if (!rectangle) return;
        onMouseMove(x, y);
        const item = rectangle;
        imageData = null;
        rectangle = null;
        item.end = { x, y };
        return [item];
    };

    const draw = (item: { end?: any; start?: { x: number; y: number; }; size?: any; color?: any; fill?: any; }) => drawRectangle(item, item.end.x, item.end.y);

    return {
        onMouseDown,
        onMouseMove,
        onMouseUp,
        draw,
    };
};