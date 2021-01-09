import React from 'react'
import Styled from 'styled-components'

import NavItem from './NavItem'
import NavBarData from './NavData'

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

const NavList = ({ menu, setMenu }) => {
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
    </Wrapper>
  )
}

export default NavList
