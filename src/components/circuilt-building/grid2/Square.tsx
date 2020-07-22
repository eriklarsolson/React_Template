import React from 'react'

export interface SquareProps {
    children: JSX.Element
}

const squareStyle = {
    width: '100%',
    height: '100%',
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid grey'
}

export const Square: React.FC<SquareProps> = ({ children }) => {
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
