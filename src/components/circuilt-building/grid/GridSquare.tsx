import React from 'react'
import {DragSourceMonitor, useDrag, useDrop} from 'react-dnd'
import { Square } from './Square'
import {canMoveComponent, moveComponent, setCurrentComponent} from './Functionality'
import { ComponentTypes } from '../../shared/models/ComponentTypes'
import { ColorOverlay } from './ColorOverlay'
import {DragItem} from "../../shared/models/DragItem";

export interface GridSquareProps {
    x: number
    y: number
    components: any
    children: any
    showGrid: boolean
}

export const GridSquare: React.FC<GridSquareProps> = ({x, y, children, showGrid}: GridSquareProps) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [ComponentTypes.WIRE, ComponentTypes.BATTERY, ComponentTypes.RESISTOR
            ,ComponentTypes.SWITCH , ComponentTypes.INDUCTOR , ComponentTypes.CAPACITOR],
        canDrop: () => canMoveComponent(x, y),
        drop: (item: DragItem) => moveComponent(x, y, item.type),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
            onMouseDown={() => setCurrentComponent(x, y)}
        >
            <Square showGrid={showGrid}>{children}</Square>
            {isOver && !canDrop && <ColorOverlay color="red" />}
            {!isOver && canDrop && <ColorOverlay color="yellow" />}
            {isOver && canDrop && <ColorOverlay color="green" />}
        </div>
    )
}
