import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    font-size: 1.8rem;
    border-radius: 0.3rem;
    padding: 1rem 1rem;
    margin: 0.5rem 1rem;
    width: 20rem;
    background: ${({primary}) => primary ? "#F9F7F7" : "#112D4E"};
    color: #112D4E;
    border: .2rem solid #F9F7F7;
    cursor: pointer;
`;

export default Button;