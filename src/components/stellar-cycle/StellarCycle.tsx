import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import {Link} from "react-router-dom";

class StellarCycle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }


    render() {
        const goToObjectPage = (title: string) => {
            this.props.history.push('/object-page/' + title)
        }

        return (
            <>
                <Popup title={"03 Stellar Life Cycle"} description={"DESCRIPTION HERE"} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0"}}>
                    <Row>
                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: "3%"}}>
                                    <Col className={"col-1"}>
                                        <Button style={{backgroundColor: "#3BD186"}} onClick={() => this.props.history.push('/telescope-activity')}>Back</Button>
                                    </Col>

                                    <Col>
                                        <h3>Stellar Life Cycle</h3>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center align-content-center"} >
                                    <Col className={"col-2 justify-content-center align-content-center"} style={{padding: "0"}}>
                                        <div style={{width: "200px", height: "200px", backgroundColor: "grey", borderRadius: "100px"}}>
                                            Star
                                        </div>
                                    </Col>

                                    <Col className={"col-2 justify-content-center align-content-center"} style={{padding: "0"}}>
                                        <Row style={{margin: "50px 10px 50px 10px"}}>
                                            <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                Star
                                            </div>
                                        </Row>
                                        <Row style={{margin: "50px 10px 50px 10px"}}>
                                            <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                Star
                                            </div>
                                        </Row>
                                    </Col>

                                    <Col className={"col-2 justify-content-center align-content-center"} style={{padding: "0"}}>
                                        <Row style={{margin: "50px 10px 50px 10px"}}>
                                            <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                Star
                                            </div>
                                        </Row>
                                        <Row style={{margin: "50px 10px 50px 10px"}}>
                                            <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                Star
                                            </div>
                                        </Row>
                                    </Col>

                                    <Col className={"col-2 justify-content-center align-content-center"} style={{padding: "0"}}>
                                        <Row style={{margin: "50px 10px 50px 10px"}}>
                                            <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                Star
                                            </div>
                                        </Row>
                                        <Row style={{margin: "50px 10px 50px 10px"}}>
                                            <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                Star
                                            </div>
                                        </Row>
                                    </Col>

                                    <Col className={"col-2 justify-content-center align-content-center"} style={{padding: "0"}}>
                                        <Row style={{margin: "50px 10px 50px 10px"}}>
                                            <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                Star
                                            </div>
                                        </Row>
                                        <Row>
                                            <Row style={{margin: "50px 10px 50px 10px"}}>
                                                <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                    Star
                                                </div>
                                            </Row>
                                            <Row style={{margin: "50px 10px 50px 10px"}}>
                                                <div style={{width: "150px", height: "150px", backgroundColor: "grey", borderRadius: "100px"}}>
                                                    Star
                                                </div>
                                            </Row>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button className={"bg-light"} style={{color: "black", width: "25%"}} onClick={() => this.props.history.push('/rate')}>Finish</Button>
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
export default StellarCycle;