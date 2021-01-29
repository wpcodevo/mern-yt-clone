import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

import { savePaymentMethod } from '../actions/cartActions'
import { Top, Form, Button } from './LoginScreen'
import CheckoutSteps from '../components/CheckoutSteps'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: url('/images/login-bg.jpg') center/cover no-repeat fixed;
`

const CheckMark = styled.span`
  position: absolute;
  top: .3rem;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 50%;

  ::after {
    content: '';
    position: absolute;
    display: none;
  }

  ::after {
 	top: 5.3px;
	left: 5.3px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
    background: white;
    
`

const FormGroup = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 2.5rem;
  margin: 0 3rem 1rem 0;
  cursor: pointer;
  font-size: 1.8rem;
  user-select: none;

  :hover input ~ ${CheckMark} {
    background-color: #ccc;
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  :checked ~ ${CheckMark}::after {
    display: block;
  }

  :checked ~ ${CheckMark} {
    background-color: var(--green1);
  }
`

const Container = styled.div`
  margin: 3rem 0;

  div {
    margin-bottom: 3rem;
  }
`

const Text = styled.p`
  color: var(--black);
  opacity: 0.7;
`

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shippingAddress')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const submitHandler = e => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Wrapper>
        <CheckoutSteps step1 step2 step3 />
        <FormContainer>
          <Top>
            <i className='fas fa-key'></i>
            <div>
              <h2>Payment Method</h2>
            </div>
          </Top>

          <Form onSubmit={submitHandler} className='color'>
            <Container>
              <div>
                <FormGroup>
                  PayPal or Credit Card
                  <Input
                    type='radio'
                    checked='checked'
                    name='paymentMethod'
                    value='PayPal'
                    id='PayPal'
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  <CheckMark></CheckMark>
                </FormGroup>
                <Text>
                  Pay via PayPal; you can pay with your credit card if you don't
                  have a PayPal account.
                </Text>
              </div>

              {/* <div>
                <FormGroup>
                  Direct Bank Transfer
                  <Input
                    type='radio'
                    name='paymentMethod'
                    value='Bank'
                    id='Bank'
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  <CheckMark></CheckMark>
                </FormGroup>
                <Text>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Text>
              </div> */}
            </Container>

            <Button type='submit'>Continue</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </>
  )
}

export default PaymentScreen
