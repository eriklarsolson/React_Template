import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import stellarBackground from './stellarBackground.png';
import Button from "react-bootstrap/Button";
import nebula from "./images/nebula.png"
import stellar_black_hole from "./images/blackhole.png"

class InfoPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            description: "",
            image: null,
        };
    }

    componentDidMount() {
        const object = this.state.title;

        if(object === "Nebula") {
            this.setState({description: "test nebula", image: nebula})
        } else if(object === "Stellar Black Hole") {
            this.setState({description: "test stellar black hole", image: stellar_black_hole})
        } else {
            this.setState({description: "test no object found", image: nebula})
        }
    }

    render() {
        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0",
                    backgroundImage:`url(${stellarBackground})`}}>
                    <Row style={{margin: 0, padding: 0}}>
                        <Col className={"col-6 vh-100 align-items-center justify-content-center"} style={{display: "flex", margin: 0, padding: 0}}>
                                    <img src={this.state.image} />
                        </Col>

                        <Col className={"col-6 vh-100"} style={{margin: 0, padding: 0, backgroundColor: "#29405B",
                            color: "white", clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}}>
                            <Container fluid style={{margin: 0, padding: 0}}>

                                <Row style={{margin: 0}}>
                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"green-button"} style={{marginBottom: 15, width: 200,
                                                clipPath: "polygon(10px 0, 100% 0, 100% 100%, 15% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/object-page',
                                                    state: { title: this.state.title }
                                            })}>
                                                <i className="fa fa-arrow-right" />
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0, padding: 0}}>
                                    <Col>
                                        <h1>{this.state.title}</h1>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0, padding: 0}}>
                                    <Col>
                                        <p>{this.state.description}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default InfoPage;