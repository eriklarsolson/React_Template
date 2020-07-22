import React, {ComponentType, useEffect} from 'react'
import {DragPreviewImage, DragSourceMonitor, useDrag} from 'react-dnd'
import { ComponentTypes } from '../ComponentTypes'
import {getEmptyImage} from "react-dnd-html5-backend";
// import { knightImage } from './knightImage'

const style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'move',
}

export interface Props {
    id: string
    x: number
    y: number
}

export const Battery: React.FC<Props> = (props) => {
    const { id, x, y } = props
    const [{ isDragging }, drag] = useDrag({
        item: { type: ComponentTypes.BATTERY, id, x, y },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <>
            {/*<DragPreviewImage connect={preview} src={knightImage} />*/}
            <div
                ref={drag}
                style={{
                    ...style,
                    opacity: isDragging ? 0.5 : 1,
                }}
            >
                Battery
            </div>
        </>
    )
}
