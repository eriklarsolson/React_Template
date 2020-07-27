import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import {SketchPad} from "./Sketchpad";

class MetalEngraving extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }


    render() {
        const openPopup = () => {
            this.setState({popupOpened: true})
        }


        const closePopup = () => {
            this.setState({popupOpened: false})
        }

        return (
            <>
                <Popup title={"02 Laser and Lenses Objective"}
                       open={this.state.popupOpened}
                       description={"Using lasers, prisms, and lenses, create an " +
                          "artistic design on a metal sheet. The laser can be altered to include numerous shapes, colors, and widths " +
                          "beneficial to the engraving. You can use the UNDO and RESET buttons to change any mistakes on your design. " +
                          "Once you are satisfied with your creation, press the NEXT button to move on to the telescope building part " +
                          "of the optics activity. Click OBJECTIVE to see the objective for this activity."}
                       closePopup={closePopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"}>
                        <Col className={"col-2 vh-100"} style={{color: "white"}}>
                            <Sidebar />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}>Trash</Button>
                                    </Col>

                                    <Col>
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Metal Engraving</p>
                                    </Col>

                                    <Col className={"col-4"}>
                                        <Row>
                                            <Col className={"col-3 ml-auto"}>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>Question</Button>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>Stencil</Button>
                                            </Col>
                                            <Col className={"col-3"}>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>Objective</Button>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>View Point</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={"justify-content-center align-content-center"} >
                                        {/*<div style={{width: "600px", height: "600px", backgroundColor: "grey", margin: "auto"}}>*/}

                                        {/*</div>*/}
                                        <SketchPad />
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col className={"col-2"}>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/circuit-building')}>Back</Button>
                                    </Col>

                                    <Col>
                                        Color Selector
                                    </Col>

                                    <Col>
                                        Shapes of filters
                                    </Col>

                                    <Col className={"col-2"}>
                                        <Button style={{float: "right", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/telescope-activity')}>Next</Button>
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