import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

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
               </Container>

            </>
        )
    }
}
export default Sidebar;