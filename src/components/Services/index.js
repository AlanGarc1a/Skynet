import React from 'react'
import Block from '../Block/Block';
import Button from '../Button/Button';
import Container from '../Container/Container';
import {ServiceWrapper, ServicesTitle,
ServiceOverlay, ServiceContent, ServiceAbout, ServiceDescription} from './ServicesElements';

const index = () => {
    return (
        <ServiceWrapper>
            <ServiceOverlay></ServiceOverlay>
            <Container>
                <ServiceContent>
                    <ServiceAbout>
                        <ServicesTitle>Cloud Computing</ServicesTitle>
                        <Block />
                        <ServiceDescription>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                            blanditiis praesentium voluptatum deleniti atque corrupti quos 
                            dolores et quas molestias excepturi sint occaecati cupiditate non 
                            provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                            id est laborum et dolorum fuga.
                        </ServiceDescription>
                        <Button primary>Pricing</Button>
                    </ServiceAbout>
                </ServiceContent>
            </Container>
        </ServiceWrapper>
    )
}

export default index
