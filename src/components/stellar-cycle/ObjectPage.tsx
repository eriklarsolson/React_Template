import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import stellarBackground from './stellarBackground.png';
import rightarrow from './rightarrow.png';
import leftarrow from './leftarrow.png';
import Sidebar from "./Sidebar";
import nebula from "./images/nebula.png"
import stellar_black_hole from "./images/blackhole.png"
import './StellarCycle.scss'
import {getIndex} from "../circuilt-building/grid/Functionality";
import {Slider, withStyles} from "@material-ui/core";

class ObjectPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
            stellarObjects: [
                {
                    title: "Nebula",
                    image: nebula,
                    description: "test description for nebula",
                    temperatureValue: 0,
                    sizeValue: 0,
                    massValue: 0,
                },
                {
                    title: "Stellar Black Hole",
                    image: stellar_black_hole,
                    description: "test description for stellar black hole",
                    temperatureValue: 0,
                    sizeValue: 0,
                    massValue: 0,
                }
            ]
        };
    }

    componentDidMount() {
        const loadedTitle = this.props.location.state.title;
        const samePlaceComponents = this.state.stellarObjects.filter((object: { title: any; }) => object.title === loadedTitle);
        if(samePlaceComponents.length > 0) {
            const index = getIndex(samePlaceComponents[0], this.state.stellarObjects);
            this.setState({index})
        }
    }

    render() {
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
                this.setState({index: this.state.stellarObjects.length - 1})
            } else {
                this.setState({index: this.state.index - 1})
            }
        }

        const rightArrow = () => {
            if(this.state.index + 1 === this.state.stellarObjects.length) {
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
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: 0, padding: 0, backgroundImage:`url(${stellarBackground})`}}>
                    <Row className={"flex-grow-1"} style={{margin: 0}}>
                        <Col className={"col-2 vh-100"} style={{color: "white", padding: 0}}>
                            <Sidebar temperature={this.state.stellarObjects[this.state.index].temperatureValue} changeTemperature={changeTemperature}
                                     size={this.state.stellarObjects[this.state.index].sizeValue} changeSize={changeSize}
                                     mass={this.state.stellarObjects[this.state.index].massValue} changeMass={changeMass}
                                     description={this.state.stellarObjects[this.state.index].description} />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/telescope-activity')}><i className="fa fa-arrow-left" /></Button>
                                    </Col>

                                    <Col>
                                        <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                                    </Col>

                                    <Col className={"col-4"}>
                                        <Row>
                                            <Col className={"col-3 ml-auto"}>
                                                <Button style={{float: "right", backgroundColor: "#29405B", width: "150px", marginLeft: "50px",
                                                    borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                        onClick={() => this.props.history.push({
                                                            pathname: '/stellar-info-page',
                                                            state: { title: this.state.stellarObjects[this.state.index].title }
                                                        })}>More Info</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: 0,}}>
                                    <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>
                                        <img className={"arrow"} src={leftarrow} height="100px" alt={"left arrow"}
                                            onClick={leftArrow} />
                                    </Col>

                                    <Col className={"col-6"}>
                                        <img src={this.state.stellarObjects[this.state.index].image} style={{height: "450px"}} />
                                    </Col>

                                    <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>
                                        <img className={"arrow"} src={rightarrow} height="100px" alt={"right arrow"}
                                             onClick={rightArrow} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <h3 style={{color: "white", fontWeight: "bold", marginTop: "20px"}}>
                                            {this.state.stellarObjects[this.state.index].title}
                                        </h3>
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col className={"col-4"}>

                                    </Col>

                                    <Col className={"col-4 justify-content-center align-content-center"}>
                                        <TimelineSlider />
                                    </Col>

                                    <Col className={"col-4 d-flex justify-content-center align-content-center"}>
                                        <Button style={{backgroundColor: "#3BD186", fontSize: "20px", fontWeight: "bold"}}
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