import styled from "styled-components";
import Servers from '../../assets/servers.jpg';

export const ServiceWrapper = styled.section`
    position: relative;
    background-image: url(${Servers});
    background-size: cover;
    background-position: top;
    padding-top: 5rem;
    height: 65vh;
    opacity: 0.9;
`;

export const ServiceOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #112D4E;
    mix-blend-mode: overlay;
`;

export const ServicesTitle = styled.h3`
    font-size: 3.2rem;
    color: #F9F7F7;
`;

export const ServiceAbout = styled.div`
   position: absolute;
   transform: translate(0, 80%);
`;

export const ServiceDescription = styled.p`
    font-size: 1.8rem;
    margin: 3rem auto 3rem auto;
    color: #F9F7F7;
`;

export const ServiceContent = styled.div`
    position: relative;
    text-align: center ;
`;