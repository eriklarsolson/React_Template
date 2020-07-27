import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import {SketchPad, TOOL_ELLIPSE, TOOL_PENCIL, TOOL_RECTANGLE} from "./Sketchpad";

class MetalEngraving extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
            tool:TOOL_PENCIL,
            size: 2,
            color: '#000000',
            fill: false,
            fillColor: '#444444',
            items: []
        };
    }


    render() {
        const openPopup = () => {
            this.setState({popupOpened: true})
        }


        const closePopup = () => {
            this.setState({popupOpened: false})
        }

        const setTool = (tool: string) => {
            this.setState({tool: tool})
        }

        return (
            <>
                <Popup title={"02 Laser and Lenses Objective"}
                       open={this.state.popupOpened}
                       description={"Using lasers, prisms, and lenses, create an " +
                          "artistic design on a metal sheet. The laser can be altered to include numerous shapes, colors, and widths " +
                          "beneficial to the engraving. You can use the UNDO and RESET buttons to change any mistakes on your design. " +
                          "Once you are satisfied with your creation, press the NEXT button to move on to the telescope building part " +
                          "of the optics activity. Click OBJECTIVE to see the objective for this activity."}
                       closePopup={closePopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"}>
                        <Col className={"col-2 vh-100"} style={{color: "white"}}>
                            <Sidebar tool={this.state.tool} color={this.state.color} size={this.state.size} setTool={setTool} />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}>Trash</Button>
                                    </Col>

                                    <Col>
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Metal Engraving</p>
                                    </Col>

                                    <Col className={"col-4"}>
                                        <Row>
                                            <Col className={"col-3 ml-auto"}>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>Question</Button>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>Stencil</Button>
                                            </Col>
                                            <Col className={"col-3"}>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>Objective</Button>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}}>View Point</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={"justify-content-center align-content-center"} >
                                        {/*<div style={{width: "600px", height: "600px", backgroundColor: "grey", margin: "auto"}}>*/}

                                        {/*</div>*/}
                                        <SketchPad
                                            width={500}
                                            height={500}
                                            animate={true}
                                            size={this.state.size}
                                            color={this.state.color}
                                            fillColor={this.state.fill ? this.state.fillColor : ''}
                                            items={this.state.items}
                                            tool={this.state.tool}
                                        />
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col className={"col-2"}>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/circuit-building')}>Back</Button>
                                    </Col>

                                    <Col>
                                        {/*TODO - Color Selector*/}

                                        {(this.state.tool === TOOL_ELLIPSE || this.state.tool === TOOL_RECTANGLE) ?
                                            <div>
                                                <label htmlFor="">Fill In:</label>
                                                <input type="checkbox" value={this.state.fill} style={{margin:'0 8'}}
                                                       onChange={(e) => this.setState({fill: e.target.checked})} />
                                                {this.state.fill ? <span>
                                                  <label htmlFor="">with color:</label>
                                                  <input type="color" value={this.state.fillColor} onChange={(e) => this.setState({fillColor: e.target.value})} />
                                                </span> : ''}
                                            </div> : ''}
                                        <div className="options" style={{marginBottom:20}}>
                                            <label htmlFor="">Color: </label>
                                            <input type="color" value={this.props.color} onChange={(e) => this.setState({color: e.target.value})} />
                                        </div>
                                    </Col>

                                    <Col>
                                        {/*TODO - Shapes of filters*/}
                                        <div className="options" style={{marginBottom:20}}>
                                            <label htmlFor="">Size: </label>
                                            <input min="1" max="20" type="range" value={this.props.size} onChange={(e) => this.setState({size: parseInt(e.target.value)})} />
                                        </div>
                                    </Col>

                                    <Col className={"col-2"}>
                                        <Button style={{float: "right", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/telescope-activity')}>Next</Button>
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
export default MetalEngraving;