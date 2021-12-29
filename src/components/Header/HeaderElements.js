import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: relative;
    height: 100vh;
`;

export const HeaderBg = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeaderVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    object-fit: cover;
`;

export const VideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #112D4E;
    mix-blend-mode: overlay;
`;

export const HeaderContent = styled.div`
    position: absolute;
    top: 30%;
    left: 25%;
    color: #DBE2EF;
    width: 40%;
`;

export const HeaderTitle = styled.h1`
    font-size: 12rem;
    text-transform: uppercase;
`;

export const HeaderSubtitlte = styled.span`
    font-size: 2rem;
    font-weight: 700;
`;

export const HeaderSubContent = styled.p`
    font-size: 1.8rem;
    font-style: italic;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
`;