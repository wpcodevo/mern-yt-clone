import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`
const SubHeading = styled.span`
  color: var(--grey2);
`

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <Heading>{title}</Heading>
      <SubHeading>{subtitle}</SubHeading>
    </TitleWrapper>
  )
}

export default Title
