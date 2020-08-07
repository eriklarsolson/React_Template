import React from 'react'
import {GridSquare} from "./GridSquare";
import {Battery} from "./components/Battery";
import {Resistor} from "./components/Resistor";
import {Wire} from "./components/Wire";
import {Switch} from "./components/Switch";
import {Inductor} from "./components/Inductor";
import {Capacitor} from "./components/Capacitor";

export interface GridProps {
    components: [{x: number, y: number, type: string}]
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
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
                case 'wire':
                    return <Wire/>;
                case 'battery':
                    return <Battery/>;
                case 'resistor':
                    return <Resistor/>;
                case 'switch':
                    return <Switch/>;
                case 'inductor':
                    return <Inductor/>;
                case 'capacitor':
                    return <Capacitor/>;
                default:
                    return <Battery/>;
            }
        }

        function renderSquare(i: number) {
            return (
                <div key={i} style={squareStyle}>
                    <GridSquare x={0} y={0} components={components}>
                        {renderSwitch(components[0].type)}
                    </GridSquare>
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
