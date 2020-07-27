import React, {useState, useEffect, useCallback} from 'react'
import {moveComponent, observe} from './Functionality'
import {SixGrid} from "./SixGrid";
import update from "immutability-helper";
import {ComponentTypes} from "../grid2/ComponentTypes";
import {useDrop} from "react-dnd";
import {DragItem} from "../../shared/models/DragItem";
import {snapToGrid as doSnapToGrid} from "../grid2/Functionality";
import {Container, Row, Col} from "react-bootstrap";
import object1wire from '../objective1wire.png'

const containerStyle: React.CSSProperties = {
    width: 500,
    height: 500,
}

interface BoxMap {
    [key: string]: { x: number; y: number; type: string }
}

export interface GridContainerProps {
    grid: string
}

export const SixGridContainer: React.FC<GridContainerProps> = ({grid}) => {
    const [boxes, setBoxes] = useState<BoxMap>({
        a: { x: 20, y: 80, type: 'battery' },
        b: { x: 180, y: 20, type: 'Drag me too' },
    })

    const moveBox = useCallback(
        (id: string, x: number, y: number) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { x, y },
                    },
                }),
            )
        },
        [boxes],
    )

    useEffect(() => observe((boxMap: [number, number]) => moveBox("a", boxMap[0], boxMap[1])))
    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col className={"col-4"} style={{padding: "0", margin: "0"}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <SixGrid components={boxes}  />
                            </div>
                        </div>
                    </Col>
                    <Col className={"col-1"} style={{padding: "0", margin: "0"}}>
                        <img src={object1wire} width={"200px"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
