import React, {useState, useEffect} from 'react'
import {getComponents, moveComponent, observe} from './Functionality'
import {TelescopeGrid} from "./TelescopeGrid";
import {Container, Row, Col} from "react-bootstrap";
import {ComponentTypes} from "../../shared/models/ComponentTypes";

const containerStyle: React.CSSProperties = {
    marginTop: 200,
    width: 800,
    height: 150,
}

export interface GridContainerProps {

}

export const TelescopeGridContainer: React.FC<GridContainerProps> = () => {

    //I don't actually use this currentComp variable, but I need the useEffect on observe below and it's working right now
    //and I don't want to change it
    const [currentComp, setCurrentComp] = useState<{x: number, y: number, type: string}>({x: 0, y: 0, type: ComponentTypes.BATTERY})

    useEffect(() => observe((component: any) => setCurrentComp(component)))

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col style={{padding: "0", margin: "0"}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <TelescopeGrid components={getComponents()} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
