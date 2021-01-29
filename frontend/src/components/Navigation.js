import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import NavList from './Navigation/NavList'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--white);
  height: 6.5rem;
  line-height: 6.5rem;
  grid-area: header;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &.fix-nav {
    width: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .right {
    @media (min-width: 996px) {
      display: none;
    }
  }
`

const LogoWrapper = styled.div`
  .logo {
    color: var(--primary);
    font-size: 2.7rem;
    font-weight: 600;
    padding: 0.5rem;
    border: 3px solid var(--black);

    @media (max-width: 996px) {
      font-size: 2rem;
      font-weight: 600;
      padding: 0.3rem;
      border: 2px solid var(--black);
    }
  }
`

const Label = styled.label`
  display: none;

  @media (max-width: 996px) {
    display: block;
    color: var(--black);
    font-size: 2rem;
    cursor: pointer;
  }
`

const LinkWrapper = styled(Link)`
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

const Navigation = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => setMenu(true)

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const count = cartItems.reduce((acc, item) => acc + item.qty, 0)

  return (
    <Nav>
      <Wrapper className='container'>
        <Label onClick={showMenu}>
          <i className='fas fa-bars'></i>
        </Label>
        <LogoWrapper>
          <Link to='/' className='logo'>
            BLOGSHOP
          </Link>
        </LogoWrapper>

        <NavList menu={menu} setMenu={setMenu} count={count} />
        <div className='right'>
          <LinkWrapper to='/login'>
            <img src='/images/bx-user.svg' alt='' />
          </LinkWrapper>
          <LinkWrapper to='/cart'>
            <img src='/images/shoppingBag.svg' alt='' />
            <small className='count d-flex'>
              {count
                ? count
                : cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </small>
          </LinkWrapper>
        </div>
      </Wrapper>
    </Nav>
  )
}

export default Navigation
