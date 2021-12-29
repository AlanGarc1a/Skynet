import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-evenly;
    height: 6rem;
    border-bottom: none;
    background: #F9F7F7;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
`;

export const NavLogo = styled.span`
    align-self: center;
    font-size: 3rem;
    color: #112D4E;
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin-top: .1rem;
    align-self: center;
`;

export const NavItem = styled.li`
    margin-right: 1.5rem;
    font-size: 2rem;
`;