import styled from 'styled-components';

export const Grid = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: ${({direction}) => direction ? "column" : "row"};
    flex-wrap: wrap;
    gap: 10rem;
    margin-top: 5rem;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10rem;

    @media screen and (max-width: 768px) {
        flex-wrap: ${({wrap}) => wrap ? "wrap-reverse" : "wrap"};
    }
`;

export const Col = styled.div`
    flex-basis: 100%;
`;