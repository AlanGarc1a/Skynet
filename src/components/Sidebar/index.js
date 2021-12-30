import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const index = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink>About</SidebarLink>
                    <SidebarLink>Products</SidebarLink>
                    <SidebarLink>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default index
