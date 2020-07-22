import React, { useState, useEffect } from 'react'
import {OneGrid} from './OneGrid'
import { observe } from './Functionality'

interface BoxMap {
    [key: string]: { x: number; y: number; type: string }
}

export interface GridContainerProps {
    componentType: string
}

const containerStyle: React.CSSProperties = {
    width: 100,
    height: 100,
    border: '1px solid gray',
}

export const OneGridContainer: React.FC<GridContainerProps> = ({componentType}) => {
    const [components, setComponents] = useState<BoxMap>({
        a: { x: 0, y: 0, type: componentType },
    })
    // the observe function will return an unsubscribe callback
    return (
        <div className={"d-flex justify-content-center align-content-center"} style={{padding: "10px"}}>
            <div style={containerStyle}>
                <OneGrid components={components} />
            </div>
        </div>
    )
}
