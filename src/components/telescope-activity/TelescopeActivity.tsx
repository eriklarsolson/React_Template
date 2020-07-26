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
                                        <Button style={{backgroundColor: "#3BD186"}} onClick={() => this.props.history.push('/metal-engraving')}>Back</Button>
                                    </Col>

                                    <Col>
                                        <h3>Telescope Activity</h3>
                                    </Col>

                                    <Col>
                                        <Row>
                                            <Col className={"col-4"}>
                                                <Button style={{backgroundColor: "#29405B"}}>Question</Button>
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

                                    <Col>
                                        <Button style={{backgroundColor: "#3BD186"}} onClick={() => this.props.history.push('/stellar-cycle')}>Next</Button>
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