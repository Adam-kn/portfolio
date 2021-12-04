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
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                             À propos 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="certifications" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                             Certifications 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Projets 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-80}> 
                            Compétences 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contacts" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Contacts 
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
};

export default NavBar;