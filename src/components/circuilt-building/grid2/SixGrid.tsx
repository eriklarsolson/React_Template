import React from 'react'
import {Battery} from "./components/Battery";
import {Resistor} from "./components/Resistor";
import {Wire} from "./components/Wire";
import {Switch} from "./components/Switch";
import {Inductor} from "./components/Inductor";
import {Capacitor} from "./components/Capacitor";
import {GridSquare} from "./GridSquare";
import {DragItem} from "../../shared/models/DragItem";
import {DraggableBox} from "./DraggableBox";

export interface GridProps {
    components: any
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
export class SixGrid extends React.Component<GridProps> {
    render() {
        let {components} = this.props;

        function renderSquare(i: number) {
            const x = i % 6
            const y = Math.floor(i / 6)

            return (
                <div key={i} style={squareStyle}>
                    <GridSquare x={x} y={y}>
                        {Object.keys(components).map((index) =>
                            renderBox(x, y, components[index], index))}
                    </GridSquare>
                </div>
            )
        }

        function renderBox(x: number, y: number, item: DragItem, key: any) {
            return <DraggableBox key={key}  {...item} />
        }

        function renderPiece(x: number, y: number, component: DragItem, key: string) {
            const isCompHere = x === component.x && y === component.y
            console.log(isCompHere)
            console.log(x)
            console.log(y)
            console.log(component)

            switch (component.type) {
                case "wire":
                    return isCompHere ? <Wire /> : null
                case "battery":
                    return isCompHere ? <Battery key={key} {...component} /> : null
                case "resistor":
                    return isCompHere ? <Resistor /> : null
                case "capacitor":
                    return isCompHere ? <Capacitor /> : null
                case "switch":
                    return isCompHere ? <Switch /> : null
                case "inductor":
                    return isCompHere ? <Inductor /> : null
                default:
                    return null
            }
        }

        const squares = []
        for (let i = 0; i < 36; i += 1) {
            squares.push(renderSquare(i))
        }

        return <div style={boardStyle}>{squares}</div>
    }
}
