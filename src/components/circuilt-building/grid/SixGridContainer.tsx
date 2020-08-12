import React, {useState, useEffect, useCallback} from 'react'
import {getComponents, moveComponent, observe} from './Functionality'
import {SixGrid} from "./SixGrid";
import {Container, Row, Col} from "react-bootstrap";
import update from 'immutability-helper'
import {ComponentTypes} from "../../shared/models/ComponentTypes";

const containerStyle: React.CSSProperties = {
    width: 500,
    height: 500,
}

export interface GridContainerProps {
    grid: string;
    objectiveImage: any;
}

export const SixGridContainer: React.FC<GridContainerProps> = ({grid, objectiveImage}) => {

    //I don't actually use this currentComp variable, but I need the useEffect on observe below and it's working right now
    //and I don't want to change it
    const [currentComp, setCurrentComp] = useState<{x: number, y: number, type: string}>({x: 0, y: 0, type: ComponentTypes.BATTERY})
    useEffect(() => observe((component: any) => setCurrentComp(component)))

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col className={"col-4"} style={{padding: "0", margin: "0"}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <SixGrid components={getComponents()} />
                            </div>
                        </div>
                    </Col>
                    <Col className={"col-1"} style={{padding: "0", margin: "0"}}>
                        <img src={objectiveImage} width={"200px"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
