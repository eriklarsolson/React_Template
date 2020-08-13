import React, {useState} from 'react'
import {OneGrid} from './OneGrid'

export interface GridContainerProps {
    componentType: string
}

const containerStyle: React.CSSProperties = {
    width: 150,
    height: 100,
    border: '1px solid gray',
}

export const OneGridContainer: React.FC<GridContainerProps> = ({componentType}) => {
    const [components, setComponents] = useState<[{ x: number, y: number, type: string }]>([{ x: 0, y: 0, type: componentType }])
    
    return (
        <div className={"d-flex justify-content-center align-content-center"} style={{padding: "10px"}}>
            <div style={containerStyle}>
                <OneGrid components={components} />
            </div>
        </div>
    )
}
