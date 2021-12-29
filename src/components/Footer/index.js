import React from 'react'
import {FooterContainer, FooterWrap,FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
SocialIcons, WebsiteRights,SocialLogo,SocialMediaWrap,SocialMedia,SocialIconLink} from './FooterElements';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const index = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Testimonials</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                            <FooterLink>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink>Contact</FooterLink>
                            <FooterLink>Support</FooterLink>
                            <FooterLink>Destinations</FooterLink>
                            <FooterLink>Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink>Instagram</FooterLink>
                            <FooterLink>Facebook</FooterLink>
                            <FooterLink>Youtube</FooterLink>
                            <FooterLink>Twitter</FooterLink>
                            <FooterLink>LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>Skynet</SocialLogo>
                        <WebsiteRights>Skynet &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default index;
