import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import stellarBackground from './stellarBackground.png';
import rightarrow from './rightarrow.png';
import leftarrow from './leftarrow.png';
import Sidebar from "./Sidebar";

class ObjectPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            temperatureValue: 0,
            sizeValue: 0,
            massValue: 0,
        };
    }

    render() {
        const getObjectInfo = () => {
            const object = this.state.title;

            if(object === "Nebula") {
                return "test nebula"
            }

            return "abc"
        }

        const changeTemperature = (event: any, newValue: any) => {
            this.setState({temperatureValue: newValue})
        }

        const changeSize = (event: any, newValue: any) => {
            this.setState({sizeValue: newValue})
        }

        const changeMass = (event: any, newValue: any) => {
            this.setState({massValue: newValue})
        }

        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundImage:`url(${stellarBackground})`}}>
                    <Row className={"flex-grow-1"}>
                        <Col className={"col-2 vh-100"} style={{color: "white"}}>
                            <Sidebar temperature={this.state.temperatureValue} changeTemperature={changeTemperature}
                                     size={this.state.sizeValue} changeSize={changeSize}
                                     mass={this.state.massValue} changeMass={changeMass}
                                     description={getObjectInfo()} />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/stellar-cycle')}>Go Back</Button>
                                    </Col>

                                    <Col>
                                        <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                                    </Col>

                                    <Col className={"col-4"}>
                                        <Row>
                                            <Col className={"col-3 ml-auto"}>
                                                <Button style={{float: "right", backgroundColor: "#29405B", width: "150px", marginLeft: "50px",
                                                    borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}>Question</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={"col-2 justify-content-center align-content-center"}>
                                        <img src={leftarrow} height="100px" alt={"arrow"} />
                                    </Col>

                                    <Col className={"d-flex justify-content-center align-content-center"} >
                                        <div style={{width: "450px", height: "450px", lineHeight: "500px",
                                            backgroundColor: "grey", borderRadius: "250px"}}>
                                        </div>
                                    </Col>

                                    <Col className={"col-2 justify-content-center align-content-center"}>
                                        <img src={rightarrow} height="100px" alt={"arrow"} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <h3 style={{color: "white", fontWeight: "bold", marginTop: "20px"}}>{this.state.title}</h3>
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col className={"d-flex justify-content-center align-content-center"}>
                                        <Button style={{float: "right", backgroundColor: "#29405B", width: "15%",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/stellar-cycle')}>All Stages</Button>
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
export default ObjectPage;