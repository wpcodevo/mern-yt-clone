import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: calc(100vh - 6.5rem);
  background-color: var(--primary);
  position: relative;
  overflow: hidden;
`

const Left = styled.div`
  color: var(--white);
  position: absolute;
  left: 7%;
  top: 40%;

  @media (max-width: 996px) {
    top: 30%;
  }
  @media (max-width: 567px) {
    top: 25%;
  }
`

const Right = styled.div`
  position: absolute;
  right: -7%;
  bottom: -1%;

  @media (max-width: 996px) {
    right: -10%;
  }
  @media (max-width: 567px) {
    right: -18%;
  }

  img {
    max-width: 80rem;
    width: 100%;
    height: 60rem;

    @media (max-width: 1200px) {
      height: 50rem;
    }
    @media (max-width: 996px) {
      height: 35rem;
    }
    @media (max-width: 567px) {
      height: 30rem;
    }
  }
`

const SubTitle = styled.span`
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    font-size: 1.7rem;
  }
  @media (max-width: 567px) {
    font-size: 1.6rem;
  }
`
const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }
  @media (max-width: 567px) {
    font-size: 3rem;
  }
`

const Small = styled.small`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`

const HeroLink = styled(Link)`
  display: inline-block;
  color: var(--white);
  font-weight: 700;
  border: 2px solid var(--white);
  padding: 0.7rem 1.5rem;
  margin-top: 1rem;
  transition: all 300ms ease-out;

  :hover {
    color: var(--primary);
    background-color: var(--white);
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <Left>
        <SubTitle>Exclusive Sales</SubTitle>
        <Title>UP TO 50% OFF ON SALES</Title>
        <Small>Get all exclusive offers for the season</Small>
        <HeroLink to='/'>View Collection</HeroLink>
      </Left>

      <Right>
        <img src='/images/hero.png' alt='' />
      </Right>
    </Wrapper>
  )
}

export default Hero
