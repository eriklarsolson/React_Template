import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import wire from './images/wire.png'
import { Container, Row, Col } from 'react-bootstrap'

const style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
}

export const Wire: React.FC<ComponentProps> = ({oneGridStyling}) => {

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.WIRE },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    let gridStyling: React.CSSProperties  = {};
    if(!oneGridStyling) {
        gridStyling = {
            padding: 0,
            marginTop: 5
        }
    }

    return (
        <>
            <DragPreviewImage connect={preview} src={wire} />
            <Container fluid style={{...gridStyling}}>
                <Row className={"justify-content-center align-content-center"}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        {/*TODO - add rotate to button style={{transform: "rotate(90deg)"}} */}
                        <img src={wire} width={"90%"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
