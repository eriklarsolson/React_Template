import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../ComponentTypes'
// import { knightImage } from './knightImage'

const style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'move',
}

export const Inductor: React.FC = () => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.INDUCTOR },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
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
                Inductor
            </div>
        </>
    )
}
