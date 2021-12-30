import React from 'react'
import { NavbarWrapper, NavList, NavItem, NavLogo, MobileIcon } from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <NavbarWrapper>
                <NavLogo>Skynet</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavList>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Products</NavItem>
                    <NavItem>Contact</NavItem>
                </NavList>
        </NavbarWrapper>
    )
}

export default Navbar;