import React from "react";
import {Button, Modal} from "react-bootstrap";

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
                   size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.description}</Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="secondary" >*/}
                    {/*    Close*/}
                    {/*</Button>*/}
                    <Button variant="primary" style={{backgroundColor: "#3BD186"}} onClick={closePopup}>
                        Got it
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default Popup;