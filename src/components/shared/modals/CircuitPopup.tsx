import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'

class CircuitPopup extends React.Component<any, any> {
    render() {
        return (
            <Modal show={this.props.open}
                   onClick={this.props.closeCircuitPopup}
                   size="lg"
                    style={{maxWidth: "1500px !important", padding: "30px"}}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row style={{textAlign: "center", display: "block"}}>
                            <p style={{color: "#29405B", fontSize: "30px", fontWeight: "bold"}}>Components</p>
                        </Row>

                        <Row style={{padding: "10px"}}>
                            <Col className={"col-3 align-content-center justify-content-center vh-50"} style={{height: "500px", border: "1px solid #29405B"}}>
                                a
                            </Col>

                            <Col className={"align-content-center justify-content-center"} style={{width: "100%", height: "500px",
                                backgroundColor: "#29405B", marginLeft: "5%", marginRight: "5%"}}>
                                b
                            </Col>

                            <Col className={"col-3 align-content-center justify-content-center"} style={{height: "500px", border: "1px solid #29405B"}}>
                                c
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default CircuitPopup;