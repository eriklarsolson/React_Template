import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import Canvas from "./Canvas";
import EngravingPopup from "../shared/modals/Engraving/EngravingPopup";
import lasericon from "./lasericon.png";
import lasericonon from "./lasericonon.png";
import optics from "./optics_small.png";
import prism from "./prism_small.png";
import {Slider, Typography, withStyles} from "@material-ui/core";
import ViewpointPopup from "../shared/modals/ViewpointPopup";

export const TOOL_LASER = 'laser';
export const TOOL_OPTICS = 'optics';
export const TOOL_PRISM = 'prism';
export const TOOL_LINE = 'line';
export const TOOL_RECTANGLE = 'rectangle';
export const TOOL_ELLIPSE = 'ellipse';
export const TOOL_ERASER = 'eraser';

class MetalEngraving extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
            engravingPopupOpened: false,
            viewpointPopupOpened: false,
            tool: TOOL_LINE,
            size: 15,
            color: '#FFFFFF',
            fill: false,
            fillColor: '#444444',
            items: [],
            canvasRef: React.createRef(),
            cursor: null,
            toolActive: true,
        };
    }

    render() {
        const openPopup = () => {
            this.setState({popupOpened: true})
        }

        const closePopup = () => {
            this.setState({popupOpened: false})
        }

        const openEngravingPopup = () => {
            this.setState({engravingPopupOpened: true})
        }

        const closeEngravingPopup = () => {
            this.setState({engravingPopupOpened: false})
        }

        const toggleViewpointPopup = () => {
            this.setState({viewpointPopupOpened: !this.state.viewpointPopupOpened})
        }

        const setTool = (tool: string) => {
            this.setState({tool: tool})

            if(tool === TOOL_LASER) {
                this.setState({cursor: lasericonon})
            } else if(tool === TOOL_OPTICS) {
                this.setState({cursor: optics})
            } else if(tool === TOOL_PRISM) {
                this.setState({cursor: prism})
            } else {
                this.setState({cursor: null})
            }
        }

        const clearCanvas = () => {
            const canvas: HTMLCanvasElement = this.state.canvasRef.current;
            const context = canvas.getContext('2d');
            context?.clearRect(0, 0, canvas.width, canvas.height);
        }

        const addStencil = (object: any) => {
            this.setState({engravingPopupOpened: false})
            const canvas: HTMLCanvasElement = this.state.canvasRef.current;
            const context = canvas.getContext('2d');

            const image = new Image();
            image.src = object

            context?.drawImage(image, 210, 150, 400, 400);
        }

        const rightClick = (event: { preventDefault: () => void; }) => {
            if(this.state.tool === TOOL_LASER) {
                event.preventDefault()

                if(this.state.toolActive) {
                    this.setState({cursor: lasericon })
                    this.setState({toolActive: false})
                } else {
                    this.setState({cursor: lasericonon })
                    this.setState({toolActive: true})

                }
            }
        }

        //TODO - This current styling breaks the slider (doesn't slide smoothly)
        const SizeSlider = withStyles({
            root: {
                color: '#29405B',
                height: 6,
            },
            thumb: {
                height: 24,
                width: 24,
                backgroundColor: '#29405B',
                border: '2px solid currentColor',
                marginTop: -10,
                marginLeft: -12,
                '&:focus, &:hover, &$active': {
                    boxShadow: 'inherit',
                },
            },
            track: {
                height: 6,
                borderRadius: 2,
                backgroundColor: '#29405B',
            },
            rail: {
                height: 6,
                borderRadius: 2,
            },
        })(Slider);

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

               <EngravingPopup open={this.state.engravingPopupOpened} closePopup={closeEngravingPopup}
                               addStencil={addStencil} />

                <ViewpointPopup open={this.state.viewpointPopupOpened} closePopup={toggleViewpointPopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"}>
                        <Col className={"col-2 vh-100"} style={{color: "white"}}>
                            <Sidebar tool={this.state.tool} color={this.state.color} size={this.state.size}
                                     setTool={setTool} clearCanvas={clearCanvas} />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0", cursor: `url(${this.state.cursor}), auto`}}>
                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px", marginRight: "50px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push('/circuit-building')}>Back</Button>
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
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}} onClick={openEngravingPopup}>Stencil</Button>
                                            </Col>
                                            <Col className={"col-3"}>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}} onClick={openPopup}>Objective</Button>
                                                <Button style={{backgroundColor: "#29405B", margin: "5px", width: "100px",
                                                    borderRadius: "20px", fontSize: "12px", fontWeight: "bold"}} onClick={toggleViewpointPopup}>View Point</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={"justify-content-center align-content-center"} onContextMenu={rightClick}>
                                        <Canvas canvasRef={this.state.canvasRef} tool={this.state.tool}
                                                color={this.state.color} size={this.state.size} toolActive={this.state.toolActive} />
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    {/*<Col className={"col-2"}>*/}
                                    {/*    */}
                                    {/*</Col>*/}

                                    <Col className={"col-4"}>
                                        {/*TODO - Color Selector*/}
                                        {(this.state.tool !== TOOL_ERASER) ?
                                        <>
                                            <Container fluid>
                                                <Row>
                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#FFFFFF", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => this.setState({color: "#FFFFFF"})}
                                                        />
                                                    </Col>


                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#EB3324", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => this.setState({color: "#EB3324"})}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#F2F551", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => this.setState({color: "#F2F551"})}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#76FA68", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => this.setState({color: "#76FA68"})}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#3686F7", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => this.setState({color: "#3686F7"})}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#EA3690", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => this.setState({color: "#EA3690"})}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </>
                                        : '' }

                                        {/*OLD COLOR SELECTOR*/}
                                        {/*{(this.state.tool === TOOL_ELLIPSE || this.state.tool === TOOL_RECTANGLE) ?*/}
                                        {/*    <div>*/}
                                        {/*        <label htmlFor="">Fill In:</label>*/}
                                        {/*        <input type="checkbox" value={this.state.fill} style={{margin:'0 8'}}*/}
                                        {/*               onChange={(e) => this.setState({fill: e.target.checked})} />*/}
                                        {/*        {this.state.fill ? <span>*/}
                                        {/*          <label htmlFor="">with color:</label>*/}
                                        {/*          <input type="color" value={this.state.fillColor} onChange={(e) => this.setState({fillColor: e.target.value})} />*/}
                                        {/*        </span> : ''}*/}
                                        {/*    </div> : ''}*/}
                                        {/*{(this.state.tool !== TOOL_ERASER) ?*/}
                                        {/*    <div className="options" style={{marginBottom:20}}>*/}
                                        {/*        <label htmlFor="">Color: </label>*/}
                                        {/*        <input type="color" value={this.props.color} onChange={(e) => this.setState({color: e.target.value})} />*/}
                                        {/*    </div> : ''}*/}
                                    </Col>

                                    <Col className={"col-2"}>
                                        {/*TODO - Shapes of filters*/}
                                        <Typography id="width-slider" gutterBottom style={{fontWeight: "bold", color: "#29405B", fontSize: 18, float: "left"}}>
                                            Width
                                        </Typography>
                                        <SizeSlider aria-labelledby="width-slider" />

                                        <div className="options" style={{marginBottom:20}}>
                                            <label htmlFor="">Size: </label>
                                            <input min="1" max="40" type="range" value={this.props.size} onChange={(e) => this.setState({size: parseInt(e.target.value)})} />
                                        </div>
                                    </Col>

                                    <Col className={"col-2"}>
                                        <Typography id="size-slider" gutterBottom style={{fontWeight: "bold", color: "#29405B", fontSize: 18, float: "left"}}>
                                            Size
                                        </Typography>
                                        <SizeSlider aria-labelledby="size-slider" />
                                    </Col>

                                    <Col className={"col-3"}>
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