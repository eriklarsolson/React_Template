import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import RatePopup from "../shared/modals/RatePopup";

class ObjectPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }


    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1>Title</h1>
                        </Col>

                        <Col style={{backgroundColor: "#29405B"}}>

                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default ObjectPage;