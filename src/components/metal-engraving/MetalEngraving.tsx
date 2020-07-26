import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";

class MetalEngraving extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }


    render() {
        return (
            <>
                <Popup title={"02 Laser and Lenses Objective"} description={"Using lasers, prisms, and lenses, create an " +
                "artistic design on a metal sheet. The laser can be altered to include numerous shapes, colors, and widths " +
                "beneficial to the engraving. You can use the UNDO and RESET buttons to change any mistakes on your design. " +
                "Once you are satisfied with your creation, press the NEXT button to move on to the telescope building part " +
                "of the optics activity. Click OBJECTIVE to see the objective for this activity."} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0"}}>
                    <Row className={"flex-grow-1"}>
                        <Col className={"col-2 vh-100"} style={{color: "white"}}>
                            <Sidebar />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{backgroundColor: "#3BD186"}} onClick={() => this.props.history.push('/circuit-building')}>Back</Button>
                                    </Col>

                                    <Col>
                                        <h3>Metal Engraving</h3>
                                    </Col>

                                    <Col>
                                        <Row>
                                            <Col className={"col-4"}>
                                                <Button style={{backgroundColor: "#29405B"}}>Question</Button>
                                            </Col>
                                            <Col className={"col-4"}>
                                                <Button style={{backgroundColor: "#29405B"}}>Stencil</Button>
                                            </Col>
                                            <Col className={"col-4"}>
                                                <Button style={{backgroundColor: "#29405B"}}>Objective</Button>
                                            </Col>
                                            <Col className={"col-4"}>
                                                <Button style={{backgroundColor: "#29405B"}}>View Point</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={"justify-content-center align-content-center"}>
                                        <div style={{width: "600px", height: "600px", backgroundColor: "grey"}}>

                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col className={"col-2"}>
                                        <Button style={{backgroundColor: "#3BD186"}}>Trash</Button>
                                    </Col>

                                    <Col className={"col-2"}>
                                        Color Selector
                                    </Col>

                                    <Col className={"col-2"}>
                                        Shapes of filters
                                    </Col>

                                    <Col>
                                        <Button style={{backgroundColor: "#3BD186"}} onClick={() => this.props.history.push('/telescope-activity')}>Next</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default MetalEngraving;