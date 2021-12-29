import styled from "styled-components";

export const Card = styled.div`
    background: #ffffff;
    border-radius: .5rem;
    margin-top: 5rem;
`;

export const CardTitle = styled.h2`
    font-size: 1.8rem;
    width: 50%;
`;

export const CardSubTitle = styled.h2`
    font-size: 2.8rem;
    font-weight: 400;
    margin-top: 1rem;
`;

export const CardContent = styled.div`
    padding-left: 3rem;
    padding-top: 5rem;
    padding-right: 3rem;
`;

export const CardDescription = styled.p`
    font-size: 1.8rem;
    font-style: italic;
    margin-top: 1rem;
`;

export const CardBody = styled.div`
    display: flex;
`;

export const CardImg = styled.img`
    width: 50rem;
    height: 50rem;
    object-fit: cover;
`;