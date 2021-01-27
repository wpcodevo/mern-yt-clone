import React, { useState } from 'react'
import Styled from 'styled-components'

import NavItem from './NavItem'
import NavBarData from './NavData'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Label = Styled.label`
 color: var(--white);
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 996px){
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 2.5rem;
    color: var(--white);
  }
`

const Wrapper = Styled.ul`
display: inline-flex;

@media (max-width: 996px){
  position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    max-width: 35rem;
    background-color: var(--white);
    display: block;
    overflow-y: auto;
    line-height: 5rem;
    box-shadow: 0 1.5rem 1.5rem rgba(0, 0, 0, 0.1);
    transition: all 300ms linear;
    z-index: 999
}

 &.show{
      left: 0;
    }
`

const Top = Styled.div`
display: none;

@media (max-width: 996px){
  position: relative;
    display: block;
    background-color: var(--primary);
    width: 100%;
    height: 8rem;
}
`

const Icon = styled.div`
  @media (max-width: 996px) {
    display: none;
  }

  span {
    display: inline-block;
    margin: 0.5rem 1rem 0 0;
    position: relative;
    cursor: pointer;

    .count {
      justify-content: center;
      position: absolute;
      top: 0rem;
      right: -0.8rem;
      background-color: var(--primary);
      height: 2rem;
      padding: 0.5rem;
      color: var(--white);
      font-weight: 700;
      border-radius: 50%;
    }
  }
`

export const LinkWrapper = styled(Link)`
  display: inline-block;
  margin: 0.5rem 1rem 0 0;
  position: relative;
  z-index: 1;

  .count {
    justify-content: center;
    position: absolute;
    top: 0rem;
    right: -0.8rem;
    background-color: var(--primary);
    height: 2rem;
    padding: 0.5rem;
    color: var(--white);
    font-weight: 700;
    border-radius: 50%;
  }
`

const SearchWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  content: '';
  transition: all 0.4s ease-in-out;
  text-align: center;
  opacity: 0.8;
  background-color: #000;
  overflow: hidden;

  &.open {
    width: 100%;
    left: 0;
    right: auto;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  div {
    position: relative;
    width: 80rem;
  }
`

const Button = styled.button`
  position: absolute;
  top: -190%;
  right: 0;
  cursor: pointer;
  border: none;
  background: none;
`

const Form = styled.form`
  position: relative;
  z-index: 9999;
  width: 100%;

  input {
    width: 100%;
    height: auto;
    padding: 10px 0;
    color: #fff;
    border: 0;
    border-bottom: 2px solid #fff;
    background-color: transparent;

    &::placeholder {
      font-size: 2rem;
    }
  }

  button {
    position: absolute;
    top: 25%;
    right: 0;
    cursor: pointer;
    color: #fff;
    border: none;
    background: none;
  }
`

const NavList = ({ menu, setMenu, count }) => {
  const [search, setSearch] = useState(false)

  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

  return (
    <Wrapper className={menu ? 'show' : ''}>
      <Top>
        <Label onClick={() => setMenu(false)}>
          <i className='fas fa-times'></i>
        </Label>
      </Top>
      {NavBarData.map((item, index) => (
        <NavItem item={item} key={index} />
      ))}
      <Icon>
        <LinkWrapper to='/cart'>
          <img src='/images/shoppingBag.svg' alt='' />
          <small className='count d-flex'>
            {count ? count : cartItems.reduce((acc, item) => acc + item.qty, 0)}
          </small>
        </LinkWrapper>

        <LinkWrapper to='/login'>
          <img src='/images/bx-user.svg' alt='' />
        </LinkWrapper>

        <span onClick={() => setSearch(true)}>
          <img src='/images/search.svg' alt='' />
        </span>

        {
          <SearchWrapper className={search ? 'open' : ''}>
            <Container>
              <div>
                <Button onClick={() => setSearch(false)}>
                  <img src='/images/bx-x.svg' alt='' />
                </Button>
                <Form>
                  <input type='search' placeholder='Search' />
                  <button type='submit'>
                    <img src='/images/search-x.svg' alt='' />
                  </button>
                </Form>
              </div>
            </Container>
          </SearchWrapper>
        }
      </Icon>
    </Wrapper>
  )
}

export default NavList
