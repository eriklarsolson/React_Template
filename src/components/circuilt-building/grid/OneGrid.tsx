import React from 'react'
import {Battery} from "./components/Battery";
import {Resistor} from "./components/Resistor";
import {Wire} from "./components/Wire";
import {Switch} from "./components/Switch";
import {Inductor} from "./components/Inductor";
import {Capacitor} from "./components/Capacitor";
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
                case 'wire':
                    return <Wire oneGridStyling={true} />;
                case 'battery':
                    return <Battery oneGridStyling={true} />;
                case 'resistor':
                    return <Resistor oneGridStyling={true} />;
                case 'switch':
                    return <Switch oneGridStyling={true} />;
                case 'inductor':
                    return <Inductor oneGridStyling={true} />;
                case 'capacitor':
                    return <Capacitor oneGridStyling={true} />;
                default:
                    return <Battery oneGridStyling={true} />;
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
