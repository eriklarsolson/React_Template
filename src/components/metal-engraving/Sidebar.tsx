import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import lasercomponenticon from "./lasercomponenticon.png";
import optics from "./optics.png";
import prism from "./prism.png";
import Button from "react-bootstrap/Button";

export const TOOL_LASER = 'laser';
export const TOOL_OPTICS = 'optics';
export const TOOL_PRISM = 'prism';
export const TOOL_LINE = 'line';
export const TOOL_RECTANGLE = 'rectangle';
export const TOOL_ELLIPSE = 'ellipse';
export const TOOL_ERASER = 'eraser';

class Sidebar extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px"}}>Components</h3>

                   <Row className={"justify-content-center"} style={{margin: "5px"}}>
                       <Col className={"col-8"} style={{backgroundColor: "white"}}>
                           <img src={lasercomponenticon}
                               style={{width: "100px", height: "100px"}}
                               className={this.props.tool === TOOL_LASER  ? 'item-active' : 'item'}
                               onClick={() => this.props.setTool(TOOL_LASER)} />
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"} style={{margin: "5px"}}>
                       <Col className={"col-8"} style={{backgroundColor: "white"}}>
                           <img src={optics}
                                style={{width: "100px", height: "100px"}}
                                className={this.props.tool === TOOL_OPTICS  ? 'item-active' : 'item'}
                                onClick={() => this.props.setTool(TOOL_OPTICS)} />
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"} style={{margin: "5px"}}>
                       <Col className={"col-8"} style={{backgroundColor: "white"}}>
                           <img src={prism}
                                style={{width: "100px", height: "100px"}}
                                className={this.props.tool === TOOL_PRISM  ? 'item-active' : 'item'}
                                onClick={() => this.props.setTool(TOOL_PRISM)} />
                       </Col>
                   </Row>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <button
                               style={{width: "100px", height: "100px"}}
                               className={this.props.tool === TOOL_LINE  ? 'item-active' : 'item'}
                               onClick={() => this.props.setTool(TOOL_LINE)}
                           >Line</button>
                       </Col>
                   </Row>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <button
                               style={{width: "100px", height: "100px"}}
                               className={this.props.tool === TOOL_ELLIPSE  ? 'item-active' : 'item'}
                               onClick={() => this.props.setTool(TOOL_ELLIPSE)}
                           >Ellipse</button>
                       </Col>
                   </Row>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <button
                               style={{width: "100px", height: "100px"}}
                               className={this.props.tool === TOOL_RECTANGLE  ? 'item-active' : 'item'}
                               onClick={() => this.props.setTool(TOOL_RECTANGLE)}
                           >Rectangle</button>
                       </Col>
                   </Row>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <button
                               style={{width: "100px", height: "100px"}}
                               className={this.props.tool === TOOL_ERASER  ? 'item-active' : 'item'}
                               onClick={() => this.props.setTool(TOOL_ERASER)}
                           >Eraser</button>
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-8"}>
                           <Button style={{float: "left", backgroundColor: "#F8EDDD", width: "150px", marginRight: "50px",
                               fontSize: "20px", fontWeight: "bold", color: "black"}}
                                   onClick={this.props.clearCanvas}>Reset</Button>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;