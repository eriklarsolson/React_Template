import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import './Header.scss';

const Header = (props: {location: any }) => {
    const { location } = props;
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-menu">
                <Navbar.Brand href="/">BOHRINGART</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to="/" active={location.pathname.startsWith('/home') || location.pathname === '/'}>
                            Home
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to="/resources" active={location.pathname.startsWith('/resources')}>
                            Resources
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" active={location.pathname.startsWith('/about')}>
                            About Us
                        </Nav.Link>
                    </Nav>
                    {/*<Form inline>*/}
                    {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                    {/*    <Button variant="outline-primary">Search</Button>*/}
                    {/*</Form>*/}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default withRouter(Header);