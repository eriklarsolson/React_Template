import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import stellarBackground from './stellarBackground.png';
import rightarrow from './rightarrow.png';
import leftarrow from './leftarrow.png';
import Sidebar from "./Sidebar";
import avgstar from "./images/avgstar.png"
import blackhole from "./images/blackhole.png"
import massivestar from "./images/massivestar.png"
import nebula from "./images/nebula.png"
import neutronstar from "./images/neutronstar.png"
import planetarynebula from "./images/planetarynebula.png"
import redgiant from "./images/redgiant.png"
import redsupergiant from "./images/redsupergiant.png"
import supernova from "./images/supernova.png"
import whitedwarf from "./images/whitedwarf.png"
import './StellarCycle.scss'
import {getIndex} from "../circuilt-building/grid/Functionality";
import {Slider, withStyles} from "@material-ui/core";
import Popup from "../shared/modals/Popup";

class ObjectPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
            index: 0,
            massClass: 0, //0 for average, 1 for massive
            stellarObjects: [
                [
                    {
                        title: "Nebula",
                        image: nebula,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Average Star",
                        image: avgstar,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Red Giant",
                        image: redgiant,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Planetary Nebula",
                        image: planetarynebula,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "White Dwarf",
                        image: whitedwarf,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    }
                ],
                [
                    {
                        title: "Nebula",
                        image: nebula,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Massive Star",
                        image: massivestar,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Red Supergiant",
                        image: redsupergiant,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Supernova",
                        image: supernova,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Neutron Star",
                        image: neutronstar,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    },
                    {
                        title: "Stellar Black Hole",
                        image: blackhole,
                        temperatureValue: 0,
                        sizeValue: 0,
                        massValue: 0,
                    }
                ]
            ]
        };
    }

    componentDidMount() {
        const loadedTitle = this.props.location.state.title;

        //Check massive objects for same name (check here first since finds nebula
        let samePlaceComponents = this.state.stellarObjects[1].filter((object: { title: any; }) => object.title === loadedTitle);
        if(samePlaceComponents.length > 0) {
            const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[1]);
            this.setState({index: index, massClass: 1})
        }

        //Check average objects for same name
        samePlaceComponents = this.state.stellarObjects[0].filter((object: { title: any; }) => object.title === loadedTitle);
        if(samePlaceComponents.length > 0) {
            const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[0]);
            this.setState({index: index, massClass: 0})
        }
    }

    render() {
        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const handleMassChange = (event: { target: { value: any; }; }) => {
            if(event.target.value === "Average") {
                this.setState({massClass: 0, index: 0});
            } else {
                this.setState({massClass: 1, index: 0});
            }
        };

        const changeTemperature = (event: any, newValue: any) => {
            this.setState({temperatureValue: newValue})
        }

        const changeSize = (event: any, newValue: any) => {
            this.setState({sizeValue: newValue})
        }

        const changeMass = (event: any, newValue: any) => {
            this.setState({massValue: newValue})
        }

        const leftArrow = () => {
            if(this.state.index - 1 === -1) {
                this.setState({index: this.state.stellarObjects[this.state.massClass].length - 1})
            } else {
                this.setState({index: this.state.index - 1})
            }
        }

        const rightArrow = () => {
            if(this.state.index + 1 === this.state.stellarObjects[this.state.massClass].length) {
                this.setState({index: 0})
            } else {
                this.setState({index: this.state.index + 1})
            }
        }

        //TODO - This current styling breaks the slider (doesn't slide smoothly)
        const TimelineSlider = withStyles({
            root: {
                color: 'white',
                height: 30,
            },
            thumb: {
                height: 30,
                width: 10,
                backgroundColor: '#fff',
                borderRadius: 0,
                marginTop: 0,
                '&:focus, &:hover, &$active': {
                    boxShadow: 'inherit',
                },
            },
            track: {
                height: 30,
            },
            rail: {
                height: 30,
                border: "7px solid #29405B"
            },
        })(Slider);

        return (
            <>
                <Popup title={"03 Stellar Life Cycle"}
                       open={this.state.popupOpened}
                       description={"In this final activity, use the sliders to see how mass, temperature, and size are related as you move through the stages of the stellar life cycle. You may choose between using a star of average mass (like the sun) or a supermassive star, mass is the main variable used to determine which stages the star will go through and how long its lifespan will be. When viewing a stage, click the MORE INFO button to see an in depth description. You can also click on the ALL STAGES button to go back to the stellar life cycle diagram. Once you are finished exploring, click on the COMPLETE button to close out the activity."}
                       closePopup={cyclePopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: 0, padding: 0, backgroundImage:`url(${stellarBackground})`}}>
                    <Row className={"flex-grow-1"} style={{margin: 0}}>
                        <Col className={"col-2 vh-100"} style={{color: "white", padding: 0}}>
                            <Sidebar temperature={this.state.stellarObjects[this.state.massClass][this.state.index].temperatureValue} changeTemperature={changeTemperature}
                                     size={this.state.stellarObjects[this.state.massClass][this.state.index].sizeValue} changeSize={changeSize}
                                     mass={this.state.stellarObjects[this.state.massClass][this.state.index].massValue} changeMass={changeMass}
                                     description={this.state.stellarObjects[this.state.massClass][this.state.index].description}
                                     massClass={this.state.massClass} handleMassChange={handleMassChange} />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: 0}}>
                                    <Col className="col-2" style={{margin: "3%"}}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                                onClick={() => this.props.history.push('/rocket-building')}>
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col style={{margin: "3%"}}>
                                        <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                                    </Col>

                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{marginBottom: 15, width: 200,
                                                clipPath: "polygon(10px 0, 100% 0, 100% 100%, 15% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/stellar-info-page',
                                                    state: { title: this.state.stellarObjects[this.state.massClass][this.state.index].title }
                                                })}>
                                                More Info
                                            </Button>
                                        </Row>

                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Row style={{margin: 0}} className={"justify-content-end"}>
                                                <Button className={"blue-button"} style={{marginBottom: 15, width: 200,
                                                    clipPath: "polygon(10px 0, 100% 0, 100% 100%, 15% 100%)"}}  onClick={cyclePopup}>Objective</Button>
                                            </Row>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: 0,}}>
                                    <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>
                                        <img className={"arrow"} src={leftarrow} height="100px" alt={"left arrow"}
                                            onClick={leftArrow} />
                                    </Col>

                                    <Col className={"col-6"}>
                                        <img src={this.state.stellarObjects[this.state.massClass][this.state.index].image} style={{height: "450px"}} />
                                    </Col>

                                    <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>
                                        <img className={"arrow"} src={rightarrow} height="100px" alt={"right arrow"}
                                             onClick={rightArrow} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <h3 style={{color: "white", fontWeight: "bold", marginTop: "20px"}}>
                                            {this.state.stellarObjects[this.state.massClass][this.state.index].title}
                                        </h3>
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col className={"col-4"}>

                                    </Col>

                                    <Col className={"col-4 justify-content-center align-content-center"}>
                                        <TimelineSlider />
                                    </Col>

                                    <Col className={"col-4 justify-content-center align-content-center"}>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
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