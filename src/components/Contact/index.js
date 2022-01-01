import React from 'react'
import Container from '../Container/Container';
import Button from '../Button/Button';

import {
    Contact, ContactForm, ContactTitle, ContactInputGroup,
    ContactLabel, ContactInput, ContactMessage, ContactBox, ContactHeading, ContactSubTitle
} from './ContactElements';

const index = () => {
    return (
        <Contact id="contact">
            <Container>
                <ContactForm>
                    <ContactBox>
                        <ContactHeading>
                            <ContactTitle>Contact Us</ContactTitle>
                            <ContactSubTitle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore.
                            </ContactSubTitle>
                        </ContactHeading>
                        <ContactInputGroup>
                            <ContactLabel htmlFor="name">Full Name</ContactLabel>
                            <ContactInput
                                id="name"
                                placeholder="John Doe"
                            />
                        </ContactInputGroup>
                        <ContactInputGroup>
                            <ContactLabel htmlFor="name">Company</ContactLabel>
                            <ContactInput
                                id="name"
                                placeholder="Company"
                            />
                        </ContactInputGroup>
                        <ContactInputGroup>
                            <ContactLabel htmlFor="name">Full Name</ContactLabel>
                            <ContactMessage
                                rows="6"
                                cols="50"
                                id="name"
                                placeholder="Message"
                            />
                        </ContactInputGroup>
                        <Button>Submit</Button>
                    </ContactBox>
                </ContactForm>
            </Container>
        </Contact>
    )
}

export default index;
