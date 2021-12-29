import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding-left: 3rem;
    padding-right: 3rem;
`;

const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container;
