import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 4.8rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.6rem;
    text-align: left;
    width: 16rem;
    color: #fff;
`;

export const FooterLinkTitle = styled.h4`
    font-size: 1.4rem;
    margin-bottom: 1.6rem;;
`;

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;

    &:hover {
        color: #01bf71;
        transition: 0ms.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 100rem;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 110rem;
    margin: 4rem auto 0 auto;
`;

export const SocialLogo = styled.a`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 1.6rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24rem;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 2.4rem;
`;