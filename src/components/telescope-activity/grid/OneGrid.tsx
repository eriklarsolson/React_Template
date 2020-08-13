import React from 'react'
import {Concave} from "./components/Concave";
import {Viewpoint} from "./components/Viewpoint";
import {FlatMirror} from "./components/FlatMirror";
import {Convex} from "./components/Convex";
import {resetPositions} from "./Functionality";

export interface GridProps {
    components: [{x: number, y: number, type: string}];
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'white'
}
/** Styling properties applied to each square element */
const squareStyle: React.CSSProperties = { width: '100%', height: '100%' }

/**
 * @param props The react props
 * @param componentType
 */
export class OneGrid extends React.Component<GridProps> {
    render() {
        let {components} = this.props;

        function renderSwitch(type: string) {
            switch (type) {
                case "concave":
                    return <Concave oneGridStyling={true} />
                case "viewpoint":
                    return <Viewpoint oneGridStyling={true} />
                case "convex":
                    return <Convex oneGridStyling={true} />
                case "flatmirror":
                    return <FlatMirror oneGridStyling={true} />
                default:
                    return <Concave oneGridStyling={false} />
            }
        }

        function renderSquare(i: number) {
            return (
                <div key={i} style={squareStyle} onMouseDown={() => resetPositions()}>
                    {renderSwitch(components[0].type)}
                </div>
            )
        }

        const squares = []
        for (let i = 0; i < 1; i += 1) {
            squares.push(renderSquare(i))
        }
        return <div style={boardStyle}>{squares}</div>
    }
}
