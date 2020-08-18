import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {OneGridContainer} from "./grid/OneGridContainer";
import Button from "react-bootstrap/Button";
import {setComponentsList} from "./grid/Functionality";

class Sidebar extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px"}}>Modules</h3>
                   <Row>
                       <Col>
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


                   {this.props.currentLevel > 1 && <Row>
                       <Col>
                           <OneGridContainer componentType={"inductor"} />
                       </Col>
                   </Row>}

                   {this.props.currentLevel > 2 && <Row>
                       <Col>
                           <OneGridContainer componentType={"capacitor"} />
                       </Col>
                   </Row>}

                    <Row className={"justify-content-center"}>
                        <Col className={"col-6"}>
                            <Button style={{backgroundColor: "grey", width: "150px", marginRight: "50px",
                                borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                    onClick={() => setComponentsList([])}>Reset</Button>
                        </Col>
                    </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;