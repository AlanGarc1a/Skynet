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
`;

export const Col = styled.div`
    flex-basis: 100%;
`;