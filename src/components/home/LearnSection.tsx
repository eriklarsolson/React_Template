import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import hubble from './hubble.png';
import deer from './deer.jpg';
import './Home.scss';
import {LearnSectionModel} from "../shared/models/LearnSectionModel";

class LearnSection extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            learnSelection: 0,
            imageSelection: 0
        }
    }

    async changeLearnSection(index: number) {
        await this.setState({ learnSelection: index });
    }

    render() {
        let images = [
            hubble,
            deer,
            hubble,
            deer
        ]

        let learnSections: Array<LearnSectionModel> = [
            {
                Title: "01 Test",
                Description: "Test description",
            },
            {
                Title: "02 Test",
                Description: "Test description",
            },
            {
                Title: "03 Engine Functions",
                Description: "Learn the basics of the Carnot cycle to send your satellite to space using a rocket engine. " +
                    "Understand adiabatic, isothermal, isobaric, and isovolumetric processes and how they affect the work done by an engine. " +
                    "Demonstrate the importance of entropy and temperature, which measure disorder and energy, respectively.",
            },
            {
                Title: "04 Test",
                Description: "Test description",
            }
        ]

        return (
            <>
               <Container fluid>
                   <h1 style={{color: "#29405B", marginBottom: "5%"}}>What You'll Learn</h1>

                   <Row>
                       <Col className="col-sm-2" style={{color: "white"}}>
                            <Row style={{margin: "10px"}}>
                                <div className={"number-block"} style={{width: "100px", height: "100px", backgroundColor: "#29405B"}} onClick={() => this.changeLearnSection(0)}><h1>01</h1></div>
                            </Row>

                           <Row style={{margin: "10px"}}>
                               <div className={"number-block"} style={{width: "100px", height: "100px", backgroundColor: "#29405B"}} onClick={() => this.changeLearnSection(1)}><h1>02</h1></div>
                           </Row>

                           <Row style={{margin: "10px"}}>
                               <div className={"number-block"} style={{width: "100px", height: "100px", backgroundColor: "#29405B"}} onClick={() => this.changeLearnSection(2)}><h1>03</h1></div>
                           </Row>

                           <Row style={{margin: "10px"}}>
                               <div className={"number-block"} style={{width: "100px", height: "100px", backgroundColor: "#29405B"}} onClick={() => this.changeLearnSection(3)}><h1>04</h1></div>
                           </Row>
                       </Col>

                       <Col className="col-lg-9" style={{width: "100px", height: "auto", backgroundColor: "#29405B", color: "white", marginBottom: "5%"}}>
                           <Row>
                               <Col>
                                   <h1>{learnSections[this.state.learnSelection].Title}</h1>

                                   <p>{learnSections[this.state.learnSelection].Description}</p>
                               </Col>

                               <Col style={{padding: "0"}}>
                                   <img src={images[this.state.learnSelection]}
                                       style={{objectFit: "cover", maxWidth: "100%",
                                           display: "block", height: "auto"}} />
                               </Col>
                           </Row>
                       </Col>
                   </Row>
               </Container>
            </>
        )
    }
}
export default LearnSection;