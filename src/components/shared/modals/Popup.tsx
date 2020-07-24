import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'

class Popup extends React.Component<{ title: string, description: string }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true
        };
    }

    render() {
        const closePopup = () => {
            this.setState({popupOpened: false})
        }

        return (
            <Modal show={this.state.popupOpened}
                   onClick={closePopup}
                   size="lg"
                    style={{padding: "30px"}}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row style={{textAlign: "center", display: "block", paddingTop: "50px"}}>
                            <p style={{fontSize: "30px", fontWeight: "bold"}}>{this.props.title}</p>
                        </Row>

                        <Row  style={{display: "block", padding: "50px"}}>
                            <p style={{fontSize: "18px"}}>{this.props.description}</p>
                        </Row>

                        <Row className={"justify-content-center align-content-center"} style={{paddingBottom: "50px"}}>
                            <Button variant="primary" style={{backgroundColor: "#3BD186", width: "25%"}} onClick={closePopup}>
                                Got it!
                            </Button>
                        </Row>
                    </Container>
                </Modal.Body>

                {/*<Modal.Footer>*/}
                {/*    /!*<Button variant="secondary" >*!/*/}
                {/*    /!*    Close*!/*/}
                {/*    /!*</Button>*!/*/}
                {/*</Modal.Footer>*/}
            </Modal>
        )
    }
}
export default Popup;