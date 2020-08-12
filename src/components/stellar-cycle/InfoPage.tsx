import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import stellarBackground from './stellarBackground.png';
import Button from "react-bootstrap/Button";

class InfoPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
        };
    }

    render() {
        const getObjectInfo = () => {
            const object = this.state.title;

            if(object === "Nebula") {
                return "test nebula"
            }

            return "abc"
        }

        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundImage:`url(${stellarBackground})`}}>
                    <Row style={{margin: 0, padding: 0}}>
                        <Col className={"col-6 vh-100"} style={{margin: 0, padding: 0}}>
                            left side
                        </Col>
                        <Col className={"col-6 vh-100"} style={{margin: 0, padding: 0, backgroundColor: "#29405B", color: "white"}}>
                            <Container fluid style={{margin: 0, padding: 0}}>
                                <Row className={"justify-content-end"} style={{margin: "0 0 5% 0"}}>
                                    <Col className={"col-3"}>
                                        <Button style={{float: "left", backgroundColor: "#3BD186", width: "150px",
                                            borderRadius: "20px", fontSize: "20px", fontWeight: "bold"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/object-page',
                                                    state: { title: this.state.title }
                                                })}>Go Back</Button>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0, padding: 0}}>
                                    <Col>
                                        <h1>{this.state.title}</h1>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0, padding: 0}}>
                                    <Col>
                                        {getObjectInfo()}
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