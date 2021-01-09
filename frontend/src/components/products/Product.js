import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Title from '../Title'
import ProductData from './ProductData'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  @media (max-width: 996px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 996px) {
    grid-template-columns: 1fr;
  } ;
`

const ImgContainer = styled.div`
  position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0.6rem;
  background-color: var(--white);
  border-radius: 50%;
  padding: 1.3rem 1.6rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
`

const ProductItem = styled.div`
  overflow: hidden;

  i {
    transition: all 300ms ease-in-out;
  }

  :hover ${IconWrapper} {
    border-radius: 1rem 0 0 0;
  }
`

const Bottom = styled.div`
  padding: 1rem;
  text-align: center;
`

const ProductLink = styled(Link)`
  margin-bottom: 1rem;
  font-weight: inherit;
  font-size: 1.5rem;

  :hover {
    color: var(--primary);
  }
`

const PriceLabel = styled.span`
  color: var(--primary);
  font-size: 1.8rem;
`

const Price = styled.div``

const Product = () => {
  return (
    <section className='section'>
      <Title
        title='New Products'
        subtitle='Select from the premium product brands and save plenty money'
      />

      <Wrapper className='container'>
        {ProductData.map((item, index) => (
          <ProductItem key={index}>
            <ImgContainer>
              <img src={item.url} alt={item.title} />
              <IconWrapper>
                <i className='fas fa-shopping-cart'></i>
              </IconWrapper>
            </ImgContainer>
            <Bottom>
              <ProductLink to={`/products/${item._id}`}>
                {item.title}
              </ProductLink>
              <Price>
                <PriceLabel>${item.price}</PriceLabel>
              </Price>
            </Bottom>
          </ProductItem>
        ))}
      </Wrapper>
    </section>
  )
}

export default Product
