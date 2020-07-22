import React from "react";
import banner from './banner.png';
import './Home.scss';
import Button from 'react-bootstrap/Button';
import {Nav, Row} from 'react-bootstrap'
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="home-banner">
                <img className="home-banner" src={banner} width={"100%"} height={"100%"} />

                <div className="home-text">
                    <Row style={{display: "block"}}>
                        <h1>Help us Launch a Telescope</h1>
                    </Row>
                    <Row style={{display: "block"}}>
                        <p>
                            In this practice, you will learn the building of a circuit to build an electric telescope.
                            After preparing the telescope it the engine will be observed before being launched to observe star life cycles
                        </p>
                    </Row>
                    <Row style={{display: "block"}}>
                        <Button
                            href="/circuit-building"
                            variant="primary"
                            type="submit"
                            className="btn"
                            style={{backgroundColor: "#3BD186", width: "30%"}}>
                            Start
                        </Button>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Header;