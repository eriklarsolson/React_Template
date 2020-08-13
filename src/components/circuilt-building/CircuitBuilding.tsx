import React, {useCallback, useEffect, useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import {SixGridContainer} from "./grid/SixGridContainer";
import objective1wire from './objective1wire.png'
import objective2wire from './objective2wire.png'
import objective3wire from './objective3wire.png'
import CircuitPopup from "../shared/modals/CircuitPopup";
import {setComponentsList, setCurrentLevel} from "./grid/Functionality";

interface BoxMap {
    [key: string]: { x: number; y: number; type: string }
}

class CircuitBuilding extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            circuitPopupOpened: false,
            popupOpened: true,
            popupTitle: "Level 1 Objective",
            popupDescriptions: ["Energize the motor of the satellite so the solar panels can face the " +
                "sun and start collecting more energy. Make sure your circuit can deliver enough power to start the motor " +
                "and rotate the panels. We recommend using a series circuit, so consult the help page if needed. " +
                "If you need to make changes to parts of your circuit, click the component you would like to remove " +
                "and then press the TRASH icon.", "Power up the lights on the satellite so that " +
            "everyone can see its location as it orbits Earth at high velocities. To best reveal the craft’s position use " +
            "a flickering light, which typically utilizes a capacitor. We recommend using a parallel circuit, so consult " +
            "the help page if needed. If you need to make changes to parts of your circuit, click the component you would " +
            "like to remove and then press the TRASH icon", "Power up the satellite’s radio dish so you can send the " +
            "collected images and information to mission control back on Earth. Use both series and parallel circuits " +
            "along with your knowledge from the previous levels to ensure the transmission. Consult the help page if " +
            "needed. If you need to make changes to parts of your circuit, click the component you would like to remove " +
            "and then press the TRASH icon."],
            currentLevel: 1,
            showGrid: true,
            gridImages: [objective1wire, objective2wire, objective3wire]
        };
    }

    render() {
        const goToNextLevel = () => {
            const nextLevel = this.state.currentLevel + 1;

            if(nextLevel === 4) {
                this.props.history.push('/metal-engraving');
            } else {
                this.setState({currentLevel: nextLevel})
            }

            const titleString = "Level " + nextLevel + " Objective"
            this.setState({popupTitle: titleString})
            setCurrentLevel(nextLevel)
            setComponentsList([])
            cyclePopup()
        }

        const goToLastLevel = () => {
            const pastLevel = this.state.currentLevel - 1;

            if(pastLevel === 0) {
                this.props.history.push('/');
            } else {
                this.setState({currentLevel: pastLevel})
            }

            const titleString = "Level " + pastLevel + " Objective"
            this.setState({popupTitle: titleString})
            setCurrentLevel(pastLevel)
            setComponentsList([])
            cyclePopup()
        }

        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const cycleCircuitPopup = () => {
            this.setState({circuitPopupOpened: !this.state.circuitPopupOpened})
        }

        const cycleGrid = () => {
            this.setState({showGrid: !this.state.showGrid})
        }

        return (
            <>
                <CircuitPopup open={this.state.circuitPopupOpened} closeCircuitPopup={cycleCircuitPopup} />

                <Popup open={this.state.popupOpened} title={this.state.popupTitle}
                                                  description={this.state.popupDescriptions[this.state.currentLevel - 1]}
                                                  closePopup={cyclePopup} />

                    <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                        <Row className={"flex-grow-1"} style={{margin: "0"}}>
                            <Col className={"col-2 vh-100"} style={{color: "white", padding: "0"}}>
                                <Sidebar />
                            </Col>

                            <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                                <Container fluid style={{margin: "0", padding: "0"}}>
                                    <Row style={{margin: "3%"}}>
                                        <Col>
                                            <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                                borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => setComponentsList([])}>Trash</Button>
                                        </Col>

                                        <Col>
                                            <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Circuit Board level {this.state.currentLevel}</p>
                                        </Col>

                                        <Col className={"col-4"}>
                                            <Row>
                                                <Col className={"col-3 ml-auto"}>
                                                    <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                        borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}} onClick={cycleCircuitPopup}>Question</Button>
                                                    <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                        borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}} onClick={cyclePopup}>Objective</Button>
                                                    <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                        borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}} onClick={cycleGrid}>Toggle Grid</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row style={{margin: "0"}}>
                                        <Col>
                                            <SixGridContainer objectiveImage={this.state.gridImages[this.state.currentLevel - 1]}
                                                              showGrid={this.state.showGrid}  />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: "3%"}}>
                                        <Col className={"col-2"}>
                                            <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                                borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}} onClick={goToLastLevel}>Back</Button>
                                        </Col>

                                        <Col className={"justify-content-center align-content center"}>
                                            Volt selector
                                        </Col>

                                        <Col className={"col-2"}>
                                            <Button style={{float: "right", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                                borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}} onClick={goToNextLevel}>Next</Button>
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

export default CircuitBuilding;