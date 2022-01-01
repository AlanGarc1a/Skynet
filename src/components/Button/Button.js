import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    padding: 1rem 1rem;
    width: 20rem;
    background: ${({primary}) => primary ? "#F9F7F7" : "#112D4E"};
    color: ${({primary}) => primary ? "#112D4E" : "#F9F7F7"};
    border: .2rem solid #F9F7F7;
    cursor: pointer;
`;

export default Button;