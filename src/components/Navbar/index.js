import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/"> M / H </NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">/about</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="projects">/projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">/contact</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;


