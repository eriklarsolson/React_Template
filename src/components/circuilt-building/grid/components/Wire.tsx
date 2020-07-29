import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
// import { knightImage } from './knightImage'

export const COMP_WIRE = 'wire';

const style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'move',
}

export const Wire: React.FC = () => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.WIRE },
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
                Wire
            </div>
        </>
    )
}
