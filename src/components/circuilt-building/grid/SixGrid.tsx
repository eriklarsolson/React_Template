import React, {useState} from 'react'
import {GridSquare} from "./GridSquare";
import {Battery} from "./components/Battery";
import {Resistor} from "./components/Resistor";
import {Wire} from "./components/Wire";
import {Switch} from "./components/Switch";
import {Inductor} from "./components/Inductor";
import {Capacitor} from "./components/Capacitor";
import {setCurrentComponent} from "./Functionality";

export interface GridProps {
    components: any,
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
}
/** Styling properties applied to each square element */
const squareStyle: React.CSSProperties = { width: '16.65%', height: '16.65%' }

/**
 * The chessboard component
 * @param props The react props
 */
export const SixGrid: React.FC<GridProps> = ({components}) => {

    function renderSquare(i: number) {
        const x = i % 6
        const y = Math.floor(i / 6)

        return (
            <div key={i} style={squareStyle}>
                <GridSquare x={x} y={y} components={components}>
                    {Object.keys(components).map((key, index) =>
                        renderPiece(x, y, components[key].x, components[key].y, components[key].type,))}
                </GridSquare>
            </div>
        )
    }

    function renderPiece(x: number, y: number, compX: number, compY: number, type: string) {
        const isCompHere = x === compX && y === compY


        switch (type) {
            case "wire":
                return isCompHere ? <Wire oneGridStyling={false} /> : null
            case "battery":
                return isCompHere ? <Battery oneGridStyling={false} /> : null
            case "resistor":
                return isCompHere ? <Resistor oneGridStyling={false} /> : null
            case "capacitor":
                return isCompHere ? <Capacitor oneGridStyling={false} /> : null
            case "switch":
                return isCompHere ? <Switch oneGridStyling={false} /> : null
            case "inductor":
                return isCompHere ? <Inductor oneGridStyling={false} /> : null
            default:
                return isCompHere ? <Wire oneGridStyling={false} /> : null
        }
    }

    const squares = []
    for (let i = 0; i < 36; i += 1) {
        squares.push(renderSquare(i))
    }

    return <div style={boardStyle}>{squares}</div>
}
