import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import capacitor from './images/capacitor.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
}

export const Capacitor: React.FC<ComponentProps> = ({oneGridStyling}) => {
    const [rotateDeg, setRotateDeg] = useState<number>(0)
    const [toggleView, setToggleView] = useState<boolean>(false)

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.CAPACITOR },
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
    if(!oneGridStyling) {
        gridStyling = {
            padding: 0,
            marginTop: 5
        }
    }

    let toggleStyling: React.CSSProperties  = {
        visibility: "hidden",
        position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1
    };

    const toggleViewAction = () => {
        console.log("test")
        setToggleView(!toggleView)

        if(toggleView) {
            toggleStyling = {
                visibility: "hidden",
                position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1
            }
        } else {
            toggleStyling = {
                visibility: "visible",
                position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1
            }
        }
    }

    return (
        <>
            <DragPreviewImage connect={preview} src={capacitor} />
            <Container fluid style={{...gridStyling}}>

                {!oneGridStyling &&
                <div style={{...toggleStyling}}>
                    <img src={rotate} onClick={clickRotate} />
                </div>
                }
                <Row className={"justify-content-center align-content-center"}>
                    <div className={"col"} ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}
                         onClick={toggleViewAction}>
                        <img src={capacitor} width={"90%"} />
                    </div>
                </Row>
            </Container>
        </>
    )
}
