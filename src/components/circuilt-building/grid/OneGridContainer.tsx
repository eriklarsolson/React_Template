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
        width: 200,
        height: 100,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
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
            setRightValue(-100)
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
                return "wire description";
            case 'battery':
                return "battery description";
            case 'resistor':
                return "resistor description";
            case 'switch':
                return "switch description";
            case 'inductor':
                return "inductor description";
            case 'capacitor':
                return "capacitor description";
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
                        <Row>
                            <p style={{fontWeight: "bold"}}>{components[0].type}</p>
                        </Row>
                        <Row>
                            {getTooltipDescription()}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
