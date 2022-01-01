import React from 'react'
import Container from '../Container/Container';
import { AboutWrapper, AboutTitle, AboutSubTitle, AboutContent, Block } from './AboutElements';

const index = () => {
    return (
        <AboutWrapper id="about">
            <Container>
                <AboutTitle>Advanced Technology</AboutTitle>
                <AboutSubTitle>Skynet Foundation</AboutSubTitle>
                <Block></Block> 
                <AboutContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    t ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </AboutContent>
            </Container>
        </AboutWrapper>
    )
}

export default index;