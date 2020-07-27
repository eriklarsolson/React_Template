import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import './StellarCycle.scss'

class StellarCycle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }


    render() {
        const closePopup = () => {
            this.setState({popupOpened: false})
        }

        const goToObjectPage = (title: string) => {
            this.props.history.push('/object-page/' + title)
        }

        return (
            <>
                <Popup title={"03 Stellar Life Cycle"}
                       open={this.state.popupOpened}
                       description={"DESCRIPTION HERE"}
                       closePopup={closePopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row style={{margin: "3%"}}>
                        <Col>
                            <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className={"col-3 justify-content-center align-content-center"} style={{padding: "0"}}>
                            <div className={"justify-content-center align-content-center  stellar-circle stellar-circle"} style={{width: "200px",
                                height: "200px", lineHeight: "200px", backgroundColor: "grey", borderRadius: "100px"}}
                                onClick={() => goToObjectPage("Nebula")}>
                                <p style={{color: "white", fontWeight: "bold"}}>Nebula</p>
                            </div>
                        </Col>

                        <Col style={{padding: "0"}}>
                            <Row className={"justify-content-center align-content-center"} style={{marginBottom: "5%"}}>
                                <Col className={"col-3 justify-content-center align-content-center  stellar-circle"} style={{padding: "0"}}>
                                    <div style={{width: "150px", height: "150px", lineHeight: "150px",
                                        backgroundColor: "grey", borderRadius: "100px"}}
                                        onClick={() => goToObjectPage("Avg Star")}>
                                        <p style={{color: "white", fontWeight: "bold"}}>Avg Star</p>
                                    </div>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <div style={{width: "150px", height: "150px", lineHeight: "150px",
                                        backgroundColor: "grey", borderRadius: "100px"}}
                                        onClick={() => goToObjectPage("Red Giant")}>
                                        <p style={{color: "white", fontWeight: "bold"}}>Red Giant</p>
                                    </div>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <div style={{width: "150px", height: "150px", lineHeight: "150px",
                                        backgroundColor: "grey", borderRadius: "100px"}}
                                        onClick={() => goToObjectPage("Planetary Nebula")}>
                                        <p style={{color: "white", fontWeight: "bold"}}>Planetary Nebula</p>
                                    </div>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <div style={{width: "125px", height: "125px", lineHeight: "125px",
                                        backgroundColor: "grey", borderRadius: "100px"}}
                                        onClick={() => goToObjectPage("White Dwarf")}>
                                        <p style={{color: "white", fontWeight: "bold"}}>White Dwarf</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className={"justify-content-center align-content-center"} >
                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                        <div style={{width: "150px", height: "150px", lineHeight: "150px",
                                            backgroundColor: "grey", borderRadius: "100px"}}
                                             onClick={() => goToObjectPage("Massive Star")}>
                                            <p style={{color: "white", fontWeight: "bold"}}>Massive Star</p>
                                        </div>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                        <div style={{width: "150px", height: "150px", lineHeight: "150px",
                                            backgroundColor: "grey", borderRadius: "100px"}}
                                             onClick={() => goToObjectPage("Red Supergiant")}>
                                            <p style={{color: "white", fontWeight: "bold"}}>Red Supergiant</p>
                                        </div>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                        <div style={{width: "150px", height: "150px", lineHeight: "150px",
                                            backgroundColor: "grey", borderRadius: "100px"}}
                                             onClick={() => goToObjectPage("Supernova")}>
                                            <p style={{color: "white", fontWeight: "bold"}}>Supernova</p>
                                        </div>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <div style={{width: "125px", height: "125px", lineHeight: "125px",
                                        backgroundColor: "grey", borderRadius: "100px", marginBottom: "5px"}}
                                        onClick={() => goToObjectPage("Neutron Star")}>
                                        <p style={{color: "white", fontWeight: "bold"}}>Neutron Star</p>
                                    </div>

                                    <div style={{width: "125px", height: "125px", lineHeight: "125px",
                                        backgroundColor: "grey", borderRadius: "100px", marginTop: "5px"}}
                                        onClick={() => goToObjectPage("Black Hole")}>
                                        <p style={{color: "white", fontWeight: "bold"}}>Black Hole</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{margin: "3%"}}>
                        <Col>
                            <Button style={{color: "black", width: "15%", backgroundColor: "#3BD186",
                                float: "left", borderRadius: "20px", fontSize: "22px", fontWeight: "bold"}}
                                    onClick={() => this.props.history.push('/telescope-activity')}>Back</Button>
                        </Col>

                        <Col>
                            <Button className={"bg-light"} style={{color: "black", width: "15%",
                                float: "right", borderRadius: "20px", fontSize: "22px", fontWeight: "bold"}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/about',
                                        state: { popupOpened: true }
                                    })}>Finish</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default StellarCycle;