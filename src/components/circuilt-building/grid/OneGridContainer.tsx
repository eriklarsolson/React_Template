import React, {useState, useEffect, ComponentType} from 'react'
import {OneGrid} from './OneGrid'
import {getComponents, observe, setComponentsList} from "./Functionality";
import {ComponentTypes} from "../../shared/models/ComponentTypes";
// import { observe } from './Functionality'

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

    // useEffect(() => observe((components: any) => setComponentsList(components)))

    // the observe function will return an unsubscribe callback
    return (
        <div className={"d-flex justify-content-center align-content-center"} style={{padding: "10px"}}>
            <div style={containerStyle}>
                <OneGrid components={components} />
            </div>
        </div>
    )
}
