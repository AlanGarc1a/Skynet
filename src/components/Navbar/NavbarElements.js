import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-evenly;
    height: 6rem;
    border-bottom: none;
    background: #F9F7F7;
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }

`;

export const NavLogo = styled.span`
    align-self: center;
    font-size: 3rem;
    color: #112D4E;
    cursor:pointer;

    @media screen and (max-width: 768px) {
        margin-left: 3rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    align-self: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
        margin-right: 3rem;
        font-size: 2.5rem;
    }
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin-top: .1rem;
    align-self: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    margin-right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
`;