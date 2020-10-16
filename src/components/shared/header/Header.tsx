import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import './Header.scss';

const Header = (props: {location: any }) => {
    const { location } = props;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-menu" >
                <Navbar.Brand href="/">React Template</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to="/" active={location.pathname.startsWith('/home') || location.pathname === '/'}>
                            Home
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to={{pathname: '/about'}}
                                  active={location.pathname.startsWith('/about')}>
                            About Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default withRouter(Header);