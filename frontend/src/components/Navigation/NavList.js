import React from 'react'
import Styled from 'styled-components'

import NavItem from './NavItem'
import NavBarData from './NavData'

const Label = Styled.label`
 color: var(--white);
  font-size: 2rem;
  cursor: pointer;
  display: none;
`

const Wrapper = Styled.ul`
display: inline-flex;
`

const Top = Styled.div`
display: none;
`

const NavList = () => {
  return (
    <Wrapper>
      <Top>
        <Label>
          <i className='fas fa-times'></i>
        </Label>
      </Top>
      {NavBarData.map((item, index) => (
        <NavItem item={item} key={index} />
      ))}
    </Wrapper>
  )
}

export default NavList
