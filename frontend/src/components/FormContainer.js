import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 15rem auto 15rem auto;
  max-width: 52rem;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  border-radius: 0.5rem;
`
const FormContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default FormContainer
