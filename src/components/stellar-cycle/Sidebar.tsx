import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {Slider, Typography, withStyles} from "@material-ui/core";

class Sidebar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            massValue: 0,
        };
    }

    render() {
        //TODO - This current styling breaks the slider (doesn't slide smoothly)
        const StellarSlider = withStyles({
            root: {
                color: 'white',
                height: 4,
            },
            thumb: {
                height: 24,
                width: 24,
                backgroundColor: '#fff',
                border: '2px solid currentColor',
                marginTop: -10,
                marginLeft: -12,
                '&:focus, &:hover, &$active': {
                    boxShadow: 'inherit',
                },
            },
            track: {
                height: 4,
                borderRadius: 2,
            },
            rail: {
                height: 4,
                borderRadius: 2,
            },
        })(Slider);

        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px", paddingBottom: "30px"}}>Attributes</h3>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <Typography id="temperature-slider" gutterBottom>
                               Temperature
                           </Typography>
                           <Slider value={this.props.temperature} onChange={this.props.changeTemperature} aria-labelledby="temperature-slider" />
                       </Col>
                   </Row>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <Typography id="size-slider" gutterBottom>
                               Size
                           </Typography>
                           <Slider value={this.props.size} onChange={this.props.changeSize} aria-labelledby="size-slider" />
                       </Col>
                   </Row>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <Typography id="mass-slider" gutterBottom>
                               Mass
                           </Typography>
                           <Slider value={this.props.mass} onChange={this.props.changeMass} aria-labelledby="mass-slider" />
                       </Col>
                   </Row>

                   <hr style={{backgroundColor: "white", height: "4px", margin: "30px 10px 30px 10px", borderRadius: "30px"}}/>

                   <h3>Description</h3>
                   <Row style={{margin: "5px"}}>
                       <Col>
                           <p>{this.props.description}</p>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;