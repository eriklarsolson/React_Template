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
                <RatePopup />
            </>
        )
    }
}
export default ObjectPage;