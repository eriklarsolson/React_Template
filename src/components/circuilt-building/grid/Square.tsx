import React from 'react'

export interface SquareProps {
    children: JSX.Element
    showGrid: boolean
}

export const Square: React.FC<SquareProps> = ({ children, showGrid }) => {

    let squareStyle = {
        width: '100%',
        height: '100%',
        color: 'black',
        backgroundColor: '#F8EDDD',
        border: '1px solid grey'
    }

    if(!showGrid) {
        squareStyle = {
            width: '100%',
            height: '100%',
            color: 'black',
            backgroundColor: '#F8EDDD',
            border: '0'
        }
    }

    return (
        <div
            style={{
                ...squareStyle
            }}
        >
            {children}
        </div>
    )
}
