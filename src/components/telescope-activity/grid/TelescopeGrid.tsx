import React from 'react'
import {GridSquare} from "./GridSquare";
import {Concave} from "./components/Concave";
import {Viewpoint} from "./components/Viewpoint";
import {FlatMirror} from "./components/FlatMirror";
import {Convex} from "./components/Convex";

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
const squareStyle: React.CSSProperties = { width: '10%', height: '100%' }

/**
 * The chessboard component
 * @param props The react props
 */
export const TelescopeGrid: React.FC<GridProps> = ({components}) => {

    function renderSquare(i: number) {
        const x = i % 10
        const y = Math.floor(i)


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
            case "concave":
                return isCompHere ? <Concave oneGridStyling={false} /> : null
            case "viewpoint":
                return isCompHere ? <Viewpoint oneGridStyling={false} /> : null
            case "convex":
                return isCompHere ? <Convex oneGridStyling={false} /> : null
            case "flatmirror":
                return isCompHere ? <FlatMirror oneGridStyling={false} /> : null
            default:
                return isCompHere ? <Concave oneGridStyling={false} /> : null
        }
    }

    const squares = []
    for (let i = 0; i < 10; i += 1) {
        squares.push(renderSquare(i))
    }

    return <div style={boardStyle}>{squares}</div>
}
