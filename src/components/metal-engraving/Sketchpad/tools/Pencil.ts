
import { v4 } from 'uuid';

export const TOOL_PENCIL = 'pencil';

export default (context: { save: () => void; lineJoin: string; lineCap: string; beginPath: () => void; lineWidth: any; strokeStyle: any; globalCompositeOperation: string; moveTo: (arg0: any, arg1: any) => void; lineTo: (arg0: any, arg1: any) => void; closePath: () => void; stroke: () => void; restore: () => void; }) => {
    let stroke: { points: any; id?: string; tool?: string; color?: any; size?: any; } | null = null;
    let points: { x: any; y: any; }[] = [];

    const onMouseDown = (x: any, y: any, color: any, size: any) => {
        stroke = {
            id: v4(),
            tool: TOOL_PENCIL,
            color,
            size,
            points: [{ x, y }]
        };
        return [stroke];
    };

    const drawLine = (item: { points: any; id?: string; tool?: string; color?: any; size?: any }, start: { x: any; y: any }, lineTo: { x: any; y: any }) => {
        context.save();
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.beginPath();
        context.lineWidth = item.size;
        context.strokeStyle = item.color;
        context.globalCompositeOperation = 'source-over';
        context.moveTo(start.x, start.y);
        context.lineTo(start.x, start.y);
        context.closePath();
        context.stroke();
        context.restore();
    };

    const onMouseMove = (x: any, y: any) => {
        if (!stroke) return [];
        const newPoint = { x, y };
        const start = stroke.points.slice(-1)[0];
        drawLine(stroke, start, newPoint);
        stroke.points.push(newPoint);
        points.push(newPoint);

        return [stroke];
    };

    const onDebouncedMouseMove = () => {
        const debouncedPoints = points;
        points = [];
        return [stroke, debouncedPoints];
    };

    const onMouseUp = (x: any, y: any) => {
        if (!stroke) return;
        onMouseMove(x, y);
        points = [];
        const item = stroke;
        stroke = null;
        return [item];
    };

    const draw = (item: { points: any; id?: string | undefined; tool?: string | undefined; color?: any; size?: any; }, animate: any) => {
        let time = 0;
        let i = 0;
        const j = item.points.length;
        // @ts-ignore
        for (i, j; i < j; i++) {
            if (!item.points[i - 1]) continue;
            if (animate) {
                setTimeout(drawLine.bind(null, item, item.points[i - 1], item.points[i]), time);
                time += 10;
            } else {
                drawLine(item, item.points[i - 1], item.points[i]);
            }
        }
    };

    return {
        onMouseDown,
        onMouseMove,
        onDebouncedMouseMove,
        onMouseUp,
        draw,
    };
};