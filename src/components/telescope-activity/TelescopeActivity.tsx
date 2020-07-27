import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";

class TelescopeActivity extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }


    render() {
        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0"}}>
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
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Telescope Activity</p>
                                    </Col>

                                    <Col>
                                        <Button style={{float: "right", backgroundColor: "#29405B", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}>Question</Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={"justify-content-center align-content-center"}>
                                        <div style={{width: "600px", height: "600px", backgroundColor: "grey", margin: "auto"}}>

                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/metal-engraving')}>Back</Button>
                                    </Col>

                                    <Col>
                                        <Button style={{float: "right", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/stellar-cycle')}>Next</Button>
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
export default TelescopeActivity;