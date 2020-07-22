import React from 'react'
import { useDrop } from 'react-dnd'
import { Square } from './Square'
import { canMoveComponent, moveComponent } from './Functionality'
import { ComponentTypes } from './ComponentTypes'
import { ColorOverlay } from './ColorOverlay'

export interface GridSquareProps {
    x: number
    y: number
    children: any
}

interface BoxMap {
    [key: string]: { top: number; left: number; title: string }
}

export const GridSquare: React.FC<GridSquareProps> = ({x, y, children,}: GridSquareProps) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [ComponentTypes.WIRE, ComponentTypes.BATTERY, ComponentTypes.RESISTOR
            ,ComponentTypes.SWITCH , ComponentTypes.INDUCTOR , ComponentTypes.CAPACITOR],
        canDrop: () => canMoveComponent(x, y),
        drop: () => moveComponent(x, y),
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
        >
            <Square>{children}</Square>
            {isOver && !canDrop && <ColorOverlay color="red" />}
            {!isOver && canDrop && <ColorOverlay color="yellow" />}
            {isOver && canDrop && <ColorOverlay color="green" />}
        </div>
    )
}
