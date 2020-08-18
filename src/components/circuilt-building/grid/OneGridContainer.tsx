import React, {useState} from 'react'
import {OneGrid} from './OneGrid'
import { Container, Row, Col } from 'react-bootstrap'

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

    const [rightValue, setRightValue] = useState<number>(0)
    const [zIndex, setZIndex] = useState<number>(-1)
    const [tooltipShowing, setTooltipShowing] = useState<boolean>(false)


    // useEffect(() => observe((components: any) => setComponentsList(components)))
    let tooltipStyle: React.CSSProperties = {
        position: "absolute",
        right: rightValue,
        top: 10,
        width: 400,
        height: "auto",
        minHeight: 100,
        backgroundColor: "rgba(82, 82, 82, 0.9)",
        transition: ".3s ease-in-out",
        zIndex: zIndex,
        textAlign: "left",
    }

    const showTooltip = () => {
        if(tooltipShowing) {
            setRightValue(0)
            setZIndex(-1)
            setTooltipShowing(false)
        } else {
            setRightValue(-300)
            setZIndex(1)
            setTooltipShowing(true)
        }
    }

    const hideTooltip = () => {
        setRightValue(0)
        setZIndex(-1)
        setTooltipShowing(false)
    }

    const getTooltipDescription = () => {
        switch (components[0].type) {
            case 'wire':
                return "Used to direct flow of current, has zero resistance";
            case 'battery':
                return "Device used to provide energy to the circuit. Contains positive and negative sides. From chemical potential differences.Measured in units of volts (V)";
            case 'resistor':
                return "”Resists” the flow of electrons, reduces energy of the current flowing through the circuit. Units: Ohms (Ω)";
            case 'switch':
                return "Object designed to continue or completely stop the flow of current by opening or closing the loop.";
            case 'inductor':
                return "Much like a battery, but it stores electrical energy using an electrical field. Measured in units of farads (F)";
            case 'capacitor':
                return "Stores electrical energy in a magnetic field. Units: Henry (H)U";
            default:
                return "default description";
        }
    }

    // the observe function will return an unsubscribe callback
    return (
        <>
            <div className={"d-flex justify-content-center align-content-center"} style={{padding: "10px"}}
                 onMouseOver={showTooltip} onMouseOut={hideTooltip}>
                <div style={containerStyle}>
                    <OneGrid components={components} />
                </div>

                <div style={tooltipStyle}>
                    <Container fluid>
                        <Row style={{padding: 0}}>
                            <p style={{fontWeight: "bold", margin: 0}}>{components[0].type}</p>
                        </Row>
                        <Row style={{padding: 0}}>
                            {getTooltipDescription()}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
