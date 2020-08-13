import React from 'react'

export interface SquareProps {
    children: JSX.Element
}

export const Square: React.FC<SquareProps> = ({ children }) => {

    let squareStyle = {
        width: '100%',
        height: '100%',
        color: 'black',
        backgroundColor: '#F8EDDD',
        border: '1px solid grey'
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
