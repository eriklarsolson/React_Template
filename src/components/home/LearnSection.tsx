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
            hubble
        ]

        let learnSections: Array<LearnSectionModel> = [
            {
                Title: " Circuit Construction",
                Description: "Learn about circuit components to build one that can power your satellite. Demonstrate the flow of electrons in a circuit and how circuit components (capacitors, resistors, inductors, etc.) can affect their energy.",
            },
            {
                Title: "Lasers and Lenses",
                Description: "Learn how lenses manipulate light to understand how your telescope sees distant stars. Experiment with the variables that affect the image formed when shining light through a lens, and begin controlling the type of image you see by manipulating these variables. Understand how light moves through space and different mediums",
            },
            {
                Title: "Stellar Life Cycle",
                Description: "Learn more about what your telescope sees, and a star’s life cycle from creation to destruction. Discover what each part of the life cycle can do, how it affects its surroundings, and when the phase transitions to the next. See how important certain variables such as mass and radius are in determining the next phase and the stellar events.",
            }
        ]

        return (
            <>
               <Container fluid>
                   <h1 style={{color: "#002245;", margin: "5%"}}>What You'll Learn</h1>

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
                       </Col>

                       <Col className="col-lg-9" style={{width: "100px", height: "auto", backgroundColor: "#F8EDDD", color: "#29405B", marginBottom: "5%"}}>
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