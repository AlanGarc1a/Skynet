import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    background: #112D4E;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => isOpen ? '0' : '-100%'};
`;

export const CloseIcon = styled(FaTimes)`
    color: #F9F7F7;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 4rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #112D4E;
    margin-top: 30rem;
`;

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 5rem;
`;

export const SidebarLink = styled.li`
    font-size: 5rem;
    color: #F9F7F7;
`;