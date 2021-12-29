import React from 'react'
import { NavbarWrapper, NavList, NavItem, NavLogo } from './NavbarElements';

const Navbar = () => {
    return (
        <NavbarWrapper>
                <NavLogo>Skynet</NavLogo>
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