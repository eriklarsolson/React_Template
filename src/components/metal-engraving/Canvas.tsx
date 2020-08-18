import React, { useCallback, useEffect, useState } from 'react';
import canvasBackground from './metal_background.png'
import {TOOL_ELLIPSE, TOOL_LINE, TOOL_RECTANGLE, TOOL_ERASER, TOOL_LASER, TOOL_OPTICS,TOOL_PRISM} from "./MetalEngraving";
import optics from "./optics.png";
import prism from "./prism.png";

interface CanvasProps {
    width: number;
    height: number;
    canvasRef: any;
    tool: any;
    color: string;
    size: number;
    toolActive: boolean;
}

type Coordinate = {
    x: number;
    y: number;
};

const Canvas = ({ width, height, canvasRef, tool, color, size, toolActive }: CanvasProps) => {
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
    const [newMousePosition, setNewMousePosition] = useState<Coordinate | undefined>(undefined);

    const startPaint = useCallback((event: MouseEvent) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, [mousePosition]);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mousedown', startPaint);
        return () => {
            canvas.removeEventListener('mousedown', startPaint);
        };
    }, [startPaint]);

    //TODO - Need to change mousemove to mouse up and down for paint and exit paint functions. Set mouse positions on down and up and then draw
    const paint = useCallback(
        (event: MouseEvent) => {
            if (isPainting) {
                const newMousePosition = getCoordinates(event);

                if(tool === TOOL_LINE || tool === TOOL_ERASER || tool === TOOL_LASER) {
                    if (mousePosition && newMousePosition) {
                        draw(mousePosition, newMousePosition);
                        setMousePosition(newMousePosition);
                    }
                } else {
                    setNewMousePosition(newMousePosition);
                }
            }
        },
        [isPainting, mousePosition, newMousePosition]
    );

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mousemove', paint);
        return () => {
            canvas.removeEventListener('mousemove', paint);
        };
    }, [paint]);

    //TODO - Need to check types if its continuous drawing or like rectangle
    const exitPaint = useCallback(() => {
        if (mousePosition && newMousePosition) {
            if(tool !== TOOL_LINE && tool !== TOOL_ERASER && tool !== TOOL_LASER) {
                draw(mousePosition, newMousePosition);
            }
        }
        setIsPainting(false);
        setMousePosition(undefined);
    }, [mousePosition, newMousePosition]);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);
        return () => {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [exitPaint]);

    const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
        if (!canvasRef.current) {
            return;
        }


        const canvas: HTMLCanvasElement = canvasRef.current;
        const rect = canvas.getBoundingClientRect()

        return { x: (event.x - rect.left) , y: (event.y  - rect.top)};
    };

    const drawEllipsePolifyll = (centerX: number, centerY: number, radiusX: number, radiusY: number) => {
        let xPos;
        let yPos;
        let i = 0;
        for (i; i < 2 * Math.PI; i += 0.01) {
            xPos = centerX - (radiusY * Math.sin(i)) * Math.sin(0) + (radiusX * Math.cos(i)) * Math.cos(0);
            yPos = centerY + (radiusX * Math.cos(i)) * Math.sin(0) + (radiusY * Math.sin(i)) * Math.cos(0);
            const canvas: HTMLCanvasElement = canvasRef.current;
            const context = canvas.getContext('2d');
            if (i === 0) {
                context?.moveTo(xPos, yPos);
            } else {
                context?.lineTo(xPos, yPos);
            }
        }
    };

    //https://rlvandaveer.wordpress.com/2014/01/05/how-to-calculate-a-lighter-or-darker-shade-of-a-color-using-javascript/
    function lighten(color: string, luminosity: number) {

        // validate hex string
        color = String(color).replace(/[^0-9a-f]/gi, '');
        if (color.length < 6) {
            color = color[0]+ color[0]+ color[1]+ color[1]+ color[2]+ color[2];
        }
        luminosity = luminosity || 0;

        // convert to decimal and change luminosity
        var newColor = "#", c, i, black = 0, white = 255;
        for (i = 0; i < 3; i++) {
            c = parseInt(color.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
            newColor += ("00"+c).substr(c.length);
        }
        return newColor;
    }



    const getBurnColor = (color: string) => {
        switch(color) {
            case "#FFFFFF":
                return lighten("#000000", 0.5);
            case "#EB3324":
                return lighten("#000000", 0.4);
            case "#F2F551":
                return lighten("#000000", 0.3);
            case "#76FA68":
                return lighten("#000000", 0.2);
            case "#3686F7":
                return lighten("#000000", 0.1);
            case "#EA3690":
                return lighten("#000000", 0.0);
            default:
                return "white"
        }
    }

    const draw = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {

        if (!canvasRef.current) {
            return;
        }

        if(toolActive) {
            const canvas: HTMLCanvasElement = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                context.globalCompositeOperation = "source-over"
                if (tool === TOOL_LINE || tool === TOOL_ERASER || tool === TOOL_LASER) {

                    if (tool !== TOOL_ERASER) {
                        context.strokeStyle = getBurnColor(color);
                    } else {
                        context.globalCompositeOperation = "destination-out";
                        context.strokeStyle = "rgba(0,0,0,1)";
                    }
                    context.lineJoin = 'round';
                    context.lineWidth = size;

                    context.beginPath();
                    context.moveTo(originalMousePosition.x, originalMousePosition.y);
                    context.lineTo(newMousePosition.x, newMousePosition.y);
                    context.closePath();

                    context.stroke();
                } else if (tool === TOOL_OPTICS) {
                    const startX = newMousePosition.x < originalMousePosition.x ? newMousePosition.x : originalMousePosition.x;
                    const startY = newMousePosition.y < originalMousePosition.y ? newMousePosition.y : originalMousePosition.y;
                    const widthX = Math.abs(originalMousePosition.x - newMousePosition.x);
                    const widthY = Math.abs(originalMousePosition.y - newMousePosition.y);

                    const image = new Image();
                    image.src = optics

                    context?.drawImage(image, startX, startY, widthX, widthY);
                } else if (tool === TOOL_PRISM) {
                    const startX = newMousePosition.x < originalMousePosition.x ? newMousePosition.x : originalMousePosition.x;
                    const startY = newMousePosition.y < originalMousePosition.y ? newMousePosition.y : originalMousePosition.y;
                    const widthX = Math.abs(originalMousePosition.x - newMousePosition.x);
                    const widthY = Math.abs(originalMousePosition.y - newMousePosition.y);

                    const image = new Image();
                    image.src = prism

                    context?.drawImage(image, startX, startY, widthX, widthY);
                } else if (tool === TOOL_ELLIPSE) {
                    const startX = originalMousePosition.x;
                    const startY = originalMousePosition.y;
                    const endX = newMousePosition.x
                    const endY = newMousePosition.y;
                    const radiusX = (endX - startX) * 0.5;
                    const radiusY = (endY - startY) * 0.5;
                    const centerX = startX + radiusX;
                    const centerY = startY + radiusY;

                    context.save();
                    context.beginPath();
                    context.lineWidth = size;
                    context.strokeStyle = color;
                    // context.fillStyle = item.fill;
                    drawEllipsePolifyll(centerX, centerY, radiusX, radiusY);
                    context.stroke();
                    // if (item.fill) context.fill();
                    context.closePath();
                    context.restore();
                } else if (tool === TOOL_RECTANGLE) {
                    const startX = newMousePosition.x < originalMousePosition.x ? newMousePosition.x : originalMousePosition.x;
                    const startY = newMousePosition.y < originalMousePosition.y ? newMousePosition.y : originalMousePosition.y;
                    const widthX = Math.abs(originalMousePosition.x - newMousePosition.x);
                    const widthY = Math.abs(originalMousePosition.y - newMousePosition.y);

                    context.beginPath();
                    context.lineWidth = size;
                    context.strokeStyle = color;
                    // context.fillStyle = item.fill;
                    context.rect(startX, startY, widthX, widthY);
                    context.stroke();
                    // if (item.fill) context.fill();
                }
            }
        }
    };

    return <canvas ref={canvasRef} height={height} width={width} style={{ backgroundImage:`url(${canvasBackground})` }} />;
};

Canvas.defaultProps = {
    width: "829px",
    height: "675px",
};

export default Canvas;
