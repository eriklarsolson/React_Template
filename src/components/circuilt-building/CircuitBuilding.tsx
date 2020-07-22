import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import {HTML5Backend} from "react-dnd-html5-backend";
import { DndProvider } from 'react-dnd'
import Button from "react-bootstrap/Button";
import Popup from "../about/page_popup/Popup";
import {SixGridContainer} from "./grid/SixGridContainer";
import {CustomDragLayer} from "./grid2/CustomDragLayer";

class CircuitBuilding extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true
        };
    }


    render() {
        return (
            <>
                <Popup title={"01 Circuit Building Objective"} description={"Use the circuit components at your disposal " +
                "to power the numerous parts of your satellite. When you think your circuit is complete, press the play " +
                "button (or close the switch) to test it. If you need to make changes to parts of your circuit, click the " +
                "component you would like to remove and then press the TRASH icon. If your configuration is successful, " +
                "press NEXT to move on to the next level within the circuit activity"} />

                <DndProvider backend={HTML5Backend}>
                    <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0"}}>
                        <Row className={"flex-grow-1"}>
                            <Col className={"col-2"} style={{color: "white"}}>
                                <Sidebar />
                            </Col>

                            <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                                <Container fluid style={{margin: "0", padding: "0"}}>
                                    <Row style={{margin: "3%"}}>
                                        <Col>
                                            <Button style={{backgroundColor: "#3BD186"}}>Back</Button>
                                        </Col>

                                        <Col>
                                            <h3>Circuit Board level 1</h3>
                                        </Col>

                                        <Col>
                                            <Row>
                                                <Col className={"col-4"}>
                                                    <Button style={{backgroundColor: "#29405B"}}>Question</Button>
                                                </Col>
                                                <Col className={"col-4"}>
                                                    <Button style={{backgroundColor: "#29405B"}}>Objective</Button>
                                                </Col>
                                                <Col className={"col-4"}>
                                                    <Button style={{backgroundColor: "#29405B"}}>Hide Grid</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <SixGridContainer />
                                            {/*<CustomDragLayer />*/}
                                        </Col>
                                    </Row>

                                    <Row style={{margin: "3%"}}>
                                        <Col className={"col-2"}>
                                            <Button style={{backgroundColor: "#3BD186"}}>Trash</Button>
                                        </Col>

                                        <Col className={"col-2"}>
                                            Volt selector
                                        </Col>

                                        <Col>
                                            <Button style={{backgroundColor: "#3BD186"}}>Next</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </DndProvider>
            </>
        )
    }
}
export default CircuitBuilding;