import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import switchImage from './images/switch.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
}

export const Switch: React.FC<ComponentProps> = ({oneGridStyling}) => {
    const [rotateDeg, setRotateDeg] = useState<number>(0)

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.SWITCH },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    const clickRotate = () => {
        setRotateDeg(rotateDeg+90)
        style = {
            transform: "rotate(" + rotateDeg + "deg)",
            cursor: 'move',
        }
    }

    let gridStyling: React.CSSProperties  = {};
    const setGridStyling = () => {
        if(!oneGridStyling) {
            gridStyling = {
                padding: 0,
                marginTop: 5
            }
        }
    }
    setGridStyling();

    return (
        <>
            <DragPreviewImage connect={preview} src={switchImage} />
            <Container fluid style={{...gridStyling}}>

                {!oneGridStyling &&
                <div style={{position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1}}>
                    <img src={rotate} onClick={clickRotate} />
                </div>
                }
                <Row className={"justify-content-center align-content-center"}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        <img src={switchImage} width={"90%"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
