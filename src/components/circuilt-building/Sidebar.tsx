import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {OneGridContainer} from "./grid/OneGridContainer";

class Sidebar extends React.Component {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px"}}>Components</h3>
                   <Row>
                       <Col className={"component-box"}>
                           <OneGridContainer componentType={"wire"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"battery"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"resistor"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"switch"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"inductor"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"capacitor"} />
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;