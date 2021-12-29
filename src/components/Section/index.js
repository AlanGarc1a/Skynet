import React from 'react';
import Container from '../Container/Container';
import {Grid, Col, Row} from '../Grid/Grid';
import { SectionWrapper, ImgWrapper, SectionContent, 
    SectionTitle, 
    SectionAbout,
    Img,
    Title, 
SectionDescription } from './SectionElements';
import RobotImg from '../../assets/robot.jpg';
import MilitaryImg from '../../assets/military.jpg';
import AIImg from '../../assets/AI.jpg';
import Block from "../Block/Block";

const index = () => {
    return (
        <SectionWrapper>
            <Container>
                <Title>What Do We Do?</Title>
                <Block primary />
                <Grid>
                    <Row>
                        <Col>
                            <ImgWrapper>
                                <Img src={RobotImg} alt="robot" />
                            </ImgWrapper>
                        </Col>
                        <Col>
                            <SectionContent>
                                <SectionTitle>Number #1 leader in Cybernetic Organisms</SectionTitle>
                                <SectionAbout>
                                    <SectionDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                        od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </SectionDescription>
                                </SectionAbout>
                            </SectionContent>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <SectionContent>
                                <SectionTitle>Number #1 leader in Military Technology</SectionTitle>
                                <SectionAbout>
                                    <SectionDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                        od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </SectionDescription>
                                </SectionAbout>
                            </SectionContent>
                        </Col>
                        <Col>
                            <ImgWrapper>
                                <Img src={MilitaryImg} alt="military planes" />
                            </ImgWrapper>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ImgWrapper>
                                <Img src={AIImg} alt="artificial intelligence" />
                            </ImgWrapper>
                        </Col>
                        <Col>
                            <SectionContent>
                                <SectionTitle>Number #1 leader in Artificial Intelligence</SectionTitle>
                                <SectionAbout>
                                    <SectionDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                        od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </SectionDescription>
                                </SectionAbout>
                            </SectionContent>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        </SectionWrapper>
    )
}

export default index;
