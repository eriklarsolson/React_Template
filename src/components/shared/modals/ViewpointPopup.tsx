import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import viewpoint from "./Viewpoint.png"

class ViewpointPopup extends React.Component<any, any> {
    render() {
        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="lg"
                    style={{maxWidth: "1500px !important", padding: "30px"}}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row style={{textAlign: "left", display: "block"}}>
                            <p style={{color: "#29405B", fontSize: "30px", fontWeight: "bold"}}>Pop-up Viewpoint: Lens Focusing Light on Metal</p>
                        </Row>

                        <Row style={{padding: "10px"}} className={"align-content-center justify-content-center"}>
                            <Col>
                                <img src={viewpoint} width={"100%"} />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default ViewpointPopup;