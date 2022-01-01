import React from 'react'
import { NavbarWrapper, NavList, NavItem, NavLogo, MobileIcon } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll/modules';

const Navbar = ({toggle}) => {
    return (
        <NavbarWrapper>
                <NavLogo onClick={() => scroll.scrollToTop()}>Skynet</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavList>
                    <NavItem>
                        <Link to="about" smooth={true} duration={1000}>
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="products" smooth={true} duration={1000}>
                            Products
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="contact" smooth={true} duration={1000}>
                            Contact
                        </Link>
                    </NavItem>
                </NavList>
        </NavbarWrapper>
    )
}

export default Navbar;