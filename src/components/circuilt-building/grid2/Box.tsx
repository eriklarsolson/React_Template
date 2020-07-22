import React from 'react'

const styles: React.CSSProperties = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
}

export interface BoxProps {
    type: string
}

export const Box: React.FC<BoxProps> = ({ type }) => {
    return <div style={{ ...styles }}>{type}</div>
}
