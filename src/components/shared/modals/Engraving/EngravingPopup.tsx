import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import planet from "../../../shared/modals/Engraving/planet.png";
import logo from "../../../shared/modals/Engraving/logo.png";
import plant from "../../../shared/modals/Engraving/plant.png";
import snowman from "../../../shared/modals/Engraving/snowman.png";

class EngravingPopup extends React.Component<any, any> {
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
                        <Row style={{textAlign: "center", display: "block"}}>
                            <p style={{color: "#29405B", fontSize: "30px", fontWeight: "bold"}}>Stencil</p>
                            <p style={{color: "#29405B"}}>Select a stencil to display it on the canvas</p>
                        </Row>

                        <Row style={{padding: "10px", backgroundColor: "#29405B"}} className={"align-content-center justify-content-center"}>
                            <Col>
                                <button
                                    style={{width: "150px", height: "150px", backgroundImage:`url(${planet})`, backgroundSize: "150px 140px"}}
                                    onClick={() => this.props.addStencil(planet)} />
                            </Col>

                            <Col>
                                <button
                                    style={{width: "150px", height: "150px", backgroundImage:`url(${logo})`, backgroundSize: "150px 150px"}}
                                    onClick={() => this.props.addStencil(logo)} />
                            </Col>

                            <Col>
                                <button
                                    style={{width: "150px", height: "150px", backgroundImage:`url(${plant})`, backgroundSize: "150px 150px"}}
                                    onClick={() => this.props.addStencil(plant)} />
                            </Col>

                            <Col>
                                <button
                                    style={{width: "150px", height: "150px", backgroundImage:`url(${snowman})`, backgroundSize: "150px 140px"}}
                                    onClick={() => this.props.addStencil(snowman)} />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default EngravingPopup;