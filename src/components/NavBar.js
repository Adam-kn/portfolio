import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavBarContainer , Nav, NavItem, NavLinks, NavLogo, NavMenu, MobileIcon, NavIcon  } from '../GlobalStyles';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavBarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>
                            <NavIcon/>
                            Adam KONAN
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/>: < FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                               <NavLinks exact to='/' onClick={closeMobileMenu} activeStyle={{color: '#15cdfc'}}>
                                   Acceuil
                               </NavLinks>
                            </NavItem>
                            <NavItem>
                               <NavLinks exact to='/about' onClick={closeMobileMenu} activeStyle={{color: '#15cdfc'}}>
                                    À propos
                               </NavLinks>
                            </NavItem>
                            <NavItem>
                               <NavLinks exact to='/skills' onClick={closeMobileMenu} activeStyle={{color: '#15cdfc'}}>
                                   Compétences
                               </NavLinks>
                            </NavItem>
                            <NavItem>
                               <NavLinks exact to='/contact' onClick={closeMobileMenu} activeStyle={{color: '#15cdfc'}}>
                                   Contact
                               </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>  
            </IconContext.Provider> 
        </>
    );
};

export default NavBar;