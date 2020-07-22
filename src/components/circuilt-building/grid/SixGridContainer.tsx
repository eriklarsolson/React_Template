import React, {useState, useEffect, useCallback} from 'react'
import {moveComponent, observe} from './Functionality'
import {SixGrid} from "./SixGrid";
import update from "immutability-helper";
import {ComponentTypes} from "../grid2/ComponentTypes";
import {useDrop} from "react-dnd";
import {DragItem} from "../../shared/models/DragItem";
import {snapToGrid as doSnapToGrid} from "../grid2/Functionality";

const containerStyle: React.CSSProperties = {
    width: 500,
    height: 500,
    border: '1px solid gray',
}

export interface BoxMap {
    [key: string]: { x: number; y: number; type: string }
}


export const SixGridContainer: React.FC = () => {
    const [components, setComponents] = useState<BoxMap>({
        a: { x: 1, y: 2, type: ComponentTypes.BATTERY },
        b: { x: 2, y: 3, type: ComponentTypes.WIRE },
    })

    const moveBox = useCallback(
        (id: string, x: number, y: number) => {
            setComponents(
                update(components, {
                    [id]: {
                        $merge: { x, y },
                    },
                }),
            )
        },
        [components],
    )

    useEffect(() => observe((newPos: [string, number, number]) => moveBox(newPos[0], newPos[1], newPos[2])))
    return (
        <div className={"d-flex justify-content-center align-content-center"}>
            <div style={containerStyle}>
                <SixGrid components={components}  />
            </div>
        </div>
    )
}
