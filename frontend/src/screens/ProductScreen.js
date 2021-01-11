import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ProductDetails = styled.section`
  margin-top: 5rem;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 7rem;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  text-align: center;
  background-color: #f6f2f1;
  margin-bottom: 2rem;
  height: 45rem;
  padding: 3rem;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
`

const Thumbnail = styled.div`
  height: 10rem;
  background-color: #f6f2f1;
  text-align: center;

  img {
    height: 100%;
    object-fit: contain;
  }
`
const CatLabel = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const Right = styled.div`
  div {
    display: inline-block;
    position: relative;
    z-index: 1;
  }
`

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`
const Price = styled.div`
  font-size: 600;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 2rem;
`
const Form = styled.form`
  margin-bottom: 2rem;

  &.form {
    margin-bottom: 3rem;
  }
`

const Select = styled.select`
  font-family: 'Poppins', sans-serif;
  width: 20rem;
  padding: 0.7rem;
  border: 1px solid var(--grey1);
  appearance: none;
  outline: none;
`
const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  z-index: 0;
`

const Input = styled.input`
  padding: 0.8rem;
  text-align: center;
  width: 3.5rem;
  margin-right: 2rem;
`

const LinkWrapper = styled(Link)`
  background: var(--primary);
  padding: 0.8rem 4rem;
  color: var(--white);
  border-radius: 3rem;
`

const Heading = styled.h3`
  text-transform: uppercase;
  margin-bottom: 2rem;
`

const Discription = styled.p`
  color: var(--grey1);
`

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)

      setProduct(data.product)
    }

    fetchProduct()
  }, [match.params.id])

  return (
    <>
      <Navigation />
      <ProductDetails className='section'>
        <Details className='container'>
          <Left>
            <Main>
              <img src={product.image} alt='' />
            </Main>
            <Thumbnails>
              <Thumbnail>
                <img src={product.image} alt='' />
              </Thumbnail>
              <Thumbnail>
                <img src={product.image} alt='' />
              </Thumbnail>
              <Thumbnail>
                <img src={product.image} alt='' />
              </Thumbnail>
              <Thumbnail>
                <img src={product.image} alt='' />
              </Thumbnail>
            </Thumbnails>
          </Left>

          <Right>
            <CatLabel>Home/T-shirt</CatLabel>
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <Form>
              <div>
                <Select>
                  <option value='Select Size' defaultValue disabled>
                    Select Size
                  </option>
                  <option value='1'>32</option>
                  <option value='2'>42</option>
                  <option value='3'>52</option>
                  <option value='4'>62</option>
                </Select>
                <IconWrapper>
                  <i className='fas fa-chevron-down'></i>
                </IconWrapper>
              </div>
            </Form>
            <Form>
              <Input type='text' placeholder='1' />
              <LinkWrapper to='/cart'>Add To Cart</LinkWrapper>
            </Form>
            <Heading>Product Detail</Heading>
            <Discription>{product.description}</Discription>
          </Right>
        </Details>
      </ProductDetails>
      <Footer />
    </>
  )
}

export default ProductScreen
