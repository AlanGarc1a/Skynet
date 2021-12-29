import styled from "styled-components";

const Block = styled.div`
    background: ${({primary}) => primary ? "#112D4E" : "#F9F7F7"};
    height: 1rem;
    width: 10rem;
    margin: 2rem auto 0rem auto;
`;

export default Block;