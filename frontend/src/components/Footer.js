import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: footer;
  padding: 6rem 1rem;
  line-height: 3rem;
  background-color: var(--black);

  .payment-methods {
    margin-top: 2rem;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: var(--white);

  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Col = styled.div`
  span {
    margin-right: 1rem;
  }

  div {
    color: #f1f1f1;
    font-size: 1.4rem;
  }
`

const LinkWrapper = styled(Link)`
  display: block;
  color: #f1f1f1;
  font-size: 1.4rem;
  transition: 0.6s;

  :hover {
    color: var(--primary);
  }
`

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Row>
          <Col>
            <Heading>EXTRAS</Heading>
            <LinkWrapper to='#'>Brands</LinkWrapper>
            <LinkWrapper to='#'>Gift Certificates</LinkWrapper>
            <LinkWrapper to='#'>Affiliate</LinkWrapper>
            <LinkWrapper to='#'>Specials</LinkWrapper>
            <LinkWrapper to='#'>Site Map</LinkWrapper>
          </Col>
          <Col>
            <Heading>INFORMATION</Heading>
            <LinkWrapper to='#'>About Us</LinkWrapper>
            <LinkWrapper to='#'>Privacy Policy</LinkWrapper>
            <LinkWrapper to='#'>Terms & Conditions</LinkWrapper>
            <LinkWrapper to='#'>Contact Us</LinkWrapper>
            <LinkWrapper to='#'>Site Map</LinkWrapper>
          </Col>
          <Col>
            <Heading>EXTRAS</Heading>
            <LinkWrapper to='#'>Brands</LinkWrapper>
            <LinkWrapper to='#'>Gift Certificates</LinkWrapper>
            <LinkWrapper to='#'>Affiliate</LinkWrapper>
            <LinkWrapper to='#'>Specials</LinkWrapper>
            <LinkWrapper to='#'>Site Map</LinkWrapper>
          </Col>
          <Col>
            <Heading>CONTACT US</Heading>
            <div>
              <span>
                <i className='fas fa-map-marker-alt'></i>
              </span>
              42 Dream House, Dreammy street, 7131 Dreamville, USA
            </div>
            <div>
              <span>
                <i className='far fa-envelope'></i>
              </span>
              company@gmail.com
            </div>
            <div>
              <span>
                <i className='fas fa-phone'></i>
              </span>
              456-456-4512
            </div>
            <div className='payment-methods'>
              <img src='/images/payment.png' alt='' />
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  )
}

export default Footer
