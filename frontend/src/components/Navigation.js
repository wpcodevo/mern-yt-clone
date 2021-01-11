import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

import NavList from './Navigation/NavList'

const Nav = Styled.nav`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--white);
  height: 6.5rem;
  line-height: 6.5rem;

  .fix-nav {
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 999;
}
`

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const LogoWrapper = Styled.div`
.logo{
  color: var(--primary);
  font-size: 2.7rem;
  font-weight: 600;
  padding: 0.5rem;
  border: 3px solid var(--black);
}
`

const Label = Styled.label`
display:none;

@media (max-width: 996px){
  display: block;
color: var(--black);
font-size: 2rem;
  cursor: pointer;
}
`

const Navigation = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => setMenu(true)

  return (
    <Nav>
      <Wrapper className='container'>
        <LogoWrapper>
          <Link to='/' className='logo'>
            BLOGSHOP
          </Link>
        </LogoWrapper>
        <NavList menu={menu} setMenu={setMenu} />
        <Label onClick={showMenu}>
          <i className='fas fa-bars'></i>
        </Label>
      </Wrapper>
    </Nav>
  )
}

export default Navigation
