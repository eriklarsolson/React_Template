import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {OneGridContainer} from "./grid/OneGridContainer";
import Button from "react-bootstrap/Button";
import {setComponentsList} from "./grid/Functionality";
import inductor from './grid/components/images/inductor.png'
import capacitor from './grid/components/images/capacitor.png'

class Sidebar extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%",}}>
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


                   {this.props.currentLevel > 1 ?
                       <Row>
                            <Col>
                                <OneGridContainer componentType={"inductor"} />
                            </Col>
                       </Row>
                   :
                       <Row className={"justify-content-center"} style={{margin: 5}}>
                           <Col className="col-6" style={{backgroundColor: "white", filter: "brightness(50%)"}}>
                                <img src={inductor} style={{pointerEvents: "none", filter: "blur(5px)"}} />
                           </Col>
                       </Row>
                   }

                   {this.props.currentLevel > 2 ?
                       <Row>
                           <Col>
                               <OneGridContainer componentType={"capacitor"} />
                           </Col>
                        </Row>
                   :
                       <Row className={"justify-content-center"} style={{margin: 5, marginTop: 10}}>
                           <Col className="col-6" style={{backgroundColor: "white", filter: "brightness(50%)"}}>
                               <img src={capacitor} style={{pointerEvents: "none", filter: "blur(5px)"}} />
                           </Col>
                       </Row>
                   }

                    <Row className={"justify-content-center"} style={{margin: 0, position: "absolute", bottom: "10%"}}>
                        <Col className={"col-6"}>
                            <Button style={{backgroundColor: "#F8EDDD", width: "150px", color: "black",
                                fontSize: "18px", clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                    onClick={() => setComponentsList([])}>Reset</Button>
                        </Col>
                    </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;