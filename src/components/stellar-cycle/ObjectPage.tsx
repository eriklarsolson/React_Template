import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";

class ObjectPage extends React.Component<any, any> {
    render() {
        const getObjectInfo = () => {

            return "abc"
        }

        return (
            <>
                <Container fluid className={"vh-100"} style={{color: "white"}}>
                    <Row>
                        <Col className={"justify-content-center align-content-center"}>
                            <div className={"justify-content-center align-content-center"} style={{width: "500px",
                                height: "500px", lineHeight: "500px", backgroundColor: "grey", borderRadius: "250px"}}>
                                <p style={{color: "white", fontWeight: "bold"}}>{this.props.match.params.title}</p>
                            </div>
                        </Col>

                        <Col className={"vh-100"} style={{backgroundColor: "#42949F", padding: "5%"}}>
                            <Row>
                                <h1>{this.props.match.params.title}</h1>
                            </Row>

                            <Row>
                                <p>{getObjectInfo()}</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default ObjectPage;