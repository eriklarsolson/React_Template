import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

class Sidebar extends React.Component {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px"}}>Components</h3>
                   <Row>
                       <Col>
                           a
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           b
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           c
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           d
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                          e
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;