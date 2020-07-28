import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {TOOL_ELLIPSE, TOOL_LINE, TOOL_RECTANGLE} from "./Sketchpad/tools";

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
               </Container>

            </>
        )
    }
}
export default Sidebar;