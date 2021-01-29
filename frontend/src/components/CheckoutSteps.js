import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15rem 0 0 0;
  padding: 2rem 5rem;
  background-color: var(--white);
`

const NavItem = styled.div`
  padding: 1.5rem 1.5rem 0 0;
  border-top: 3px solid #ccc;
  transition: all 500ms ease-in;

  &.color {
    border-color: var(--green1);
  }
`

const NavLink = styled(Link)`
  padding: 2rem 2rem 2rem 0;
  font-size: 2rem;
  color: #ccc;
  transition: all 500ms ease-in;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 1rem 1rem 1rem 0;
  }

  @media (max-width: 567px) {
    font-size: 1.4rem;
  }

  &.color {
    color: var(--green1);
  }

  &.disabled {
    cursor: context-menu;
  }
`

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Wrapper>
      {step1 ? (
        <NavItem className='color'>
          <NavLink to='/login' className='color'>
            Sign In
          </NavLink>
        </NavItem>
      ) : (
        <NavItem>
          <NavLink to='/login' className='disabled' disabled>
            Sign In
          </NavLink>
        </NavItem>
      )}

      {step2 ? (
        <NavItem className='color'>
          <NavLink to='/shipping' className='color'>
            Shipping
          </NavLink>
        </NavItem>
      ) : (
        <NavItem>
          <NavLink to='/shipping' className='disabled' disabled>
            Shipping
          </NavLink>
        </NavItem>
      )}

      {step3 ? (
        <NavItem className='color'>
          <NavLink to='/payment' className='color'>
            Payment
          </NavLink>
        </NavItem>
      ) : (
        <NavItem>
          <NavLink to='/payment' className='disabled' disabled>
            Payment
          </NavLink>
        </NavItem>
      )}

      {step4 ? (
        <NavItem className='color'>
          <NavLink to='/placeorder' className='color'>
            Place Order
          </NavLink>
        </NavItem>
      ) : (
        <NavItem>
          <NavLink className='disabled' to='/placeorder' disabled>
            Place Order
          </NavLink>
        </NavItem>
      )}
    </Wrapper>
  )
}

export default CheckoutSteps
