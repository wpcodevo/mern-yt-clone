import React from 'react'
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

    &.show{
      left: 0;
    }
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

const LinkWrapper = styled(Link)`
  display: inline-block;
  margin: 0.5rem 1rem 0 0;
  position: relative;

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

const NavList = ({ menu, setMenu, count }) => {
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
        <span>
          <img src='/images/search.svg' alt='' />
        </span>
      </Icon>
    </Wrapper>
  )
}

export default NavList
