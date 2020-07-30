import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
// import { knightImage } from './knightImage'

const style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'move',
}

export const Battery: React.FC = () => {

    const printMonitor = (monitor: any) => {
        console.log(monitor)
        return monitor.isDragging()
    }

    const [{ isDragging }, drag] = useDrag({
        item: { type: ComponentTypes.BATTERY },
        collect: (monitor) => ({
            isDragging: printMonitor(monitor),
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
