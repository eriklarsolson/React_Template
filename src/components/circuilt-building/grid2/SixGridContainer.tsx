import React, {ComponentType, useCallback, useState} from 'react'
import { useDrop } from 'react-dnd'
import { ComponentTypes } from './ComponentTypes'
import { snapToGrid as doSnapToGrid } from './Functionality'
import update from 'immutability-helper'
import { DragItem } from '../../shared/models/DragItem'
import {canMoveComponent, moveComponent} from "../grid/Functionality";
import {SixGrid} from "./SixGrid";

const styles: React.CSSProperties = {
    width: 500,
    height: 500,
    border: '1px solid black',
    position: 'relative',
}

interface BoxMap {
    [key: string]: { x: number; y: number; type: string }
}

export const SixGridContainer: React.FC = () => {
    const [boxes, setBoxes] = useState<BoxMap>({
        a: { x: 1, y: 3, type: ComponentTypes.BATTERY },
        b: { x: 2, y: 4, type: ComponentTypes.WIRE },
    })

    const moveBox = useCallback(
        (id: string, x: number, y: number) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { x, y },
                    },
                }),
            )
        },
        [boxes],
    )

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [ComponentTypes.WIRE, ComponentTypes.BATTERY, ComponentTypes.RESISTOR
            ,ComponentTypes.SWITCH , ComponentTypes.INDUCTOR , ComponentTypes.CAPACITOR],
        canDrop: () => true, //canMoveComponent(x, y),
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number
                y: number
            }

            console.log(delta)

            let x = Math.round(item.x + delta.x)
            let y = Math.round(item.y + delta.y)
            ;[x, y] = doSnapToGrid(x, y)

            moveBox(item.id, x, y)
            return undefined
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    return (
        <div ref={drop} style={styles}>
            <SixGrid components={boxes} />
        </div>
    )
}
