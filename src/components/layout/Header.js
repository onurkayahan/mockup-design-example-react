import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { FaFacebook, FaReddit } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialGooglePlus, TiSocialLinkedinCircular } from 'react-icons/ti'

class Header extends Component {
    state = {
        isOpen: false,
        scrolledClass: ''
    }


    toggle = () => this.setState({ isOpen: !this.state.isOpen });


    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="lg" className="header-navbar sticky-top">
                    <span className="nav-brand">
                        <img alt="Brand Logo" className="brand-logo" src="/brand-logo.png" />
                    </span>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/#home">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#segment">SEGMENT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#guestbook">GUESTBOOK</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>
                            <div className="hexagon-icon">
                                <FaFacebook />
                            </div>
                        </NavbarText>
                        <NavbarText>
                            <div className="hexagon-icon">
                                <AiFillTwitterCircle />
                            </div>
                        </NavbarText>

                        <NavbarText>
                            <div className="hexagon-icon">
                                <TiSocialGooglePlus />
                            </div>
                        </NavbarText>
                        <NavbarText>
                            <div className="hexagon-icon">
                                <TiSocialLinkedinCircular />
                            </div>
                        </NavbarText>
                        <NavbarText>
                            <div className="hexagon-icon">
                                <FaReddit />
                            </div>
                        </NavbarText>


                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header;
