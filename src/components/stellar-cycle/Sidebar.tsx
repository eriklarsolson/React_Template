import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Slider,
    Typography,
    withStyles
} from "@material-ui/core";
import "./StellarCycle.scss";

class Sidebar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            massValue: 0,
            massClass: "Average"
        };
    }

    render() {
        //TODO - This current styling breaks the slider (doesn't slide smoothly)
        const StellarSlider = withStyles({
            root: {
                color: 'white',
                height: 6,
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
                height: 6,
                borderRadius: 2,
                backgroundColor: '#fff',
            },
            rail: {
                height: 6,
                borderRadius: 2,
            },
        })(Slider);

        const handleMassChange = (event: { target: { value: any; }; }) => {
            this.setState({massClass: event.target.value});
        };

        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px", paddingBottom: "30px"}}>Attributes</h3>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <FormControl component="fieldset" style={{float: "left", margin: "10%"}}>
                               <FormLabel component="legend" style={{color: "white", fontSize: "20px", fontWeight: "bold"}}>Mass Class</FormLabel>
                               <RadioGroup aria-label="gender" name="gender1" value={this.state.massClass} onChange={handleMassChange}>
                                   <FormControlLabel value="female" control={<Radio />} label="Average" />
                                   <FormControlLabel value="male" control={<Radio />} label="Massive" />
                               </RadioGroup>
                           </FormControl>
                       </Col>
                   </Row>

                   <Row style={{marginLeft: 15, marginRight: 15, marginTop: "10%", marginBottom: 15}}>
                       <Col>
                           <Typography id="temperature-slider" gutterBottom style={{float: "left", fontWeight: "bold", fontSize: "20px"}}>
                               Temperature
                           </Typography>
                           <StellarSlider value={this.props.temperature} onChange={this.props.changeTemperature} aria-labelledby="temperature-slider" />
                       </Col>
                   </Row>

                   <Row style={{margin: 15}}>
                       <Col>
                           <Typography id="size-slider" gutterBottom style={{float: "left", fontWeight: "bold", fontSize: "20px"}}>
                               Size
                           </Typography>
                           <StellarSlider value={this.props.size} onChange={this.props.changeSize} aria-labelledby="size-slider" />
                       </Col>
                   </Row>

                   <Row style={{margin: 15}}>
                       <Col>
                           <Typography id="mass-slider" gutterBottom style={{float: "left", fontWeight: "bold", fontSize: "20px"}}>
                               Mass
                           </Typography>
                           <StellarSlider value={this.props.mass} onChange={this.props.changeMass} aria-labelledby="mass-slider" />
                       </Col>
                   </Row>

                   {/*<hr style={{backgroundColor: "white", height: "4px", margin: "30px 10px 30px 10px", borderRadius: "30px"}}/>*/}

                   {/*<h3>Description</h3>*/}
                   {/*<Row style={{margin: "5px"}}>*/}
                   {/*    <Col>*/}
                   {/*        <p>{this.props.description}</p>*/}
                   {/*    </Col>*/}
                   {/*</Row>*/}
               </Container>

            </>
        )
    }
}
export default Sidebar;