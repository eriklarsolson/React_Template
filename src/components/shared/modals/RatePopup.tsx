import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import bored from './bored.png';
import happy from './happy.png';
import neutral from './neutral.png';
import sad from './sad.png';
import smart from './smart.png';
import './Rate.scss';
import {toast, ToastContainer} from "react-toastify";

class RatePopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }

    render() {
        const submitRating = () => {
            //TODO
            toast("Rate submitted!");
            closePopup()
        }

        const closePopup = () => {
            this.setState({toastSuccess: true, popupOpened: false})
        }

        return (
            <>

                <Modal show={this.state.popupOpened}
                       onClick={closePopup}
                       size="lg"
                        style={{paddingTop: "60px"}}>
                    <Modal.Header closeButton>
                    </Modal.Header>

                    <Modal.Body style={{color: "#29405B"}}>
                        <Container fluid>
                            <Row style={{textAlign: "center", display: "block", paddingTop: "50px"}}>
                                <p style={{fontSize: "30px", fontWeight: "bold", color: "#29405B"}}>How did you feel about these activities?</p>
                            </Row>

                            <Row className={"justify-content-center align-content-center"} style={{padding: "10px"}}>
                                <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                    <img src={bored} className={"rate-img"} />
                                    <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Bored</p>
                                </Col>

                                <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                    <img src={sad} className={"rate-img"} />
                                    <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Sad</p>
                                </Col>

                                <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                    <img src={neutral} className={"rate-img"} />
                                    <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Neutral</p>
                                </Col>

                                <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                    <img src={happy} className={"rate-img"} />
                                    <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Happy</p>
                                </Col>

                                <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                    <img src={smart} className={"rate-img"} />
                                    <p style={{color: "#29405B", fontWeight: "bold"}}>Smart</p>
                                </Col>
                            </Row>

                            <Row className={"justify-content-center align-content-center"} style={{paddingBottom: "30px", float: "right"}}>
                                <Button variant="primary" style={{backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                    borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}} onClick={submitRating}>
                                    Submit
                                </Button>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default RatePopup;