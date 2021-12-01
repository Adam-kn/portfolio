import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavContainer, NavItem, NavLinks, NavLogo, NavMenu } from '../Styles';

const NavBar = ({ toggle }) => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    Adam Konan
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"> À propos </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skill"> Compétences </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"> Contacts </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
};

export default NavBar;