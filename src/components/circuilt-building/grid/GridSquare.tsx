import React from 'react'
import {DragSourceMonitor, useDrag, useDrop} from 'react-dnd'
import { Square } from './Square'
import { canMoveComponent, moveComponent } from './Functionality'
import { ComponentTypes } from '../../shared/models/ComponentTypes'
import { ColorOverlay } from './ColorOverlay'

export interface GridSquareProps {
    x: number
    y: number
    components: any
    children: any
}

export const GridSquare: React.FC<GridSquareProps> = ({x, y, components, children}: GridSquareProps) => {
    // const getCorrectComponentKey = () => {
    //     let filteredComp = components.filter((comp: { x: number; y: number }) => comp.x === x && comp.y === y)
    //     return filteredComp[0].key
    // }

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
