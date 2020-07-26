import React from 'react';
import banner from "./aboutusbanner.png";
import './About.scss';
import { Container, Row, Col } from 'react-bootstrap'
import RatePopup from "../shared/modals/RatePopup";


class AboutUs extends React.Component<any, any> {
    render() {
        return (
            <>
                {this.props.location.state.popupOpened && <RatePopup />}

                <div className="about-banner">
                    <img  className="about-banner" src={banner} width={"100%"} height={"100%"} />

                    <div className="about-text">
                        <h1>About Us</h1>

                        <div className="d-flex flex-wrap flex-row justify-content-center" style={{paddingLeft: "15%", paddingRight: "15%"}}>
                            <div className="p-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </div>

                            <div className="p-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </div>

                            <div className="p-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </div>

                            <div className="p-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </div>

                            <div className="p-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </div>

                            <div className="p-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </div>

                            <div className="p-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </div>
                        </div>
                    </div>
                </div>

                <Container fluid style={{color: "#29405B"}}>
                    <Row style={{display: "block"}}>
                        <h1>Project Purpose</h1>
                    </Row>

                    <Row style={{textAlign: "left", display: "block", padding: "5%"}}>
                        <p style={{fontWeight: "bold"}}>
                            Dena, Parisa, Brena fill<br />
                            Explanation, website to science gallery
                        </p>
                        <p>
                            In this collaborative project, we propose to design an educational kiosk, using the principles of interactive design,
                            that will convey physics concepts effectively to college students. The concepts are chosen
                            from Introductory Physics courses. Depending on the number of students and mediators we hire,
                            we will expand on the scientific visualization. We will recruit at least two undergraduate physics students,
                            two undergraduate graphic designers, and two programmers from computer science & Engineering.
                            The physics students (with Dena’s supervision) will be responsible for communicating selected
                            physics concepts to the designers. The designers will then use their knowledge to create
                            infographics that elucidate physics phenomena.
                        </p>
                    </Row>
                </Container>
            </>
        );
    }
}

export default AboutUs;