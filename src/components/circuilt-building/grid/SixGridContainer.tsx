import React, {useState, useEffect, useCallback} from 'react'
import {moveComponent, observe} from './Functionality'
import {SixGrid} from "./SixGrid";
import {Container, Row, Col} from "react-bootstrap";
import update from 'immutability-helper'

const containerStyle: React.CSSProperties = {
    width: 500,
    height: 500,
}

interface BoxMap {
    [key: string]: { x: number; y: number; type: string }
}

export interface GridContainerProps {
    grid: string;
    objectiveImage: any;
    components: any;
    selectedComponent: number;
    addNewComponent: any;
    updateComponents: any;
}

export const SixGridContainer: React.FC<GridContainerProps> = ({grid, objectiveImage, components,
                                                                   selectedComponent, addNewComponent,
                                                                   updateComponents}) => {

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col className={"col-4"} style={{padding: "0", margin: "0"}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <SixGrid components={components} selectedComponent={selectedComponent}  />
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
