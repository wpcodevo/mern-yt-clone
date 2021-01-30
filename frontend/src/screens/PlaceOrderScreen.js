import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'

const Wrapper = styled.div`
  margin: 10rem 0;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Group = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 0.5rem;

  p {
    color: #666;
    font-size: 1.5rem;
  }
`
const LinkWrapper = styled(Link)`
  font-size: 1.5rem;
  color: var(--blue);
`

const Content = styled.div`
  width: 100%;
  background-color: #f7f8fb;
  border-radius: 0.5rem;
  padding: 3rem 2rem;

  h2 {
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 1.8rem;
  }
`

const ContentGroup = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d1d1d1;
  padding: 2rem 0;

  p {
    font-weight: 600;
    color: #222;
    padding-right: 1rem;
  }
`

export const Button = styled.button`
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  margin: 3rem 0;
  padding: 1.5rem;
  background-color: var(--green1);
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 500;
  transition: all 300ms ease-in-out;

  :hover {
    opacity: 0.8;
  }
`

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { order, success } = useSelector(state => state.orderCreate)

  const addDecimal = num => {
    return (Number(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
  )
  cart.shippingPrice = addDecimal(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice =
    Number(cart.shippingPrice) +
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)

  useEffect(() => {
    if (success) {
      history.push(`/orders/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        shippingPrice: cart.shippingPrice,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Wrapper>
        <Row className='container'>
          <Col>
            <Group>
              <h2>Shipping</h2>
              <Card>
                <p>Ship to</p>
                <p>
                  {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                  {cart.shippingAddress.postalCode},{' '}
                  {cart.shippingAddress.country}
                </p>

                <LinkWrapper to='/shipping'>change</LinkWrapper>
              </Card>
            </Group>

            <Group>
              <h2>Shipping Method</h2>
              <Card>
                <p>Shipping</p>
                <p>international</p>
                <p>
                  <strong>$20</strong>
                </p>
              </Card>
            </Group>
          </Col>
          <Col>
            <Content>
              <h2>Your Order</h2>
              <ContentGroup>
                <h4>Product</h4>
                <h4>Total</h4>
              </ContentGroup>

              {cart.cartItems.map((item, index) => (
                <ContentGroup key={index}>
                  <p>
                    {item.name} <strong> x{item.qty}</strong>
                  </p>
                  <p>${addDecimal(item.price)}</p>
                </ContentGroup>
              ))}
              <ContentGroup>
                <p>
                  <strong>Subtotal</strong>
                </p>
                <p>${cart.itemsPrice}</p>
              </ContentGroup>
              <ContentGroup>
                <p>
                  <strong>Shipping</strong>
                </p>
                <p>${cart.shippingPrice}</p>
              </ContentGroup>
              <ContentGroup>
                <p>
                  <strong>Tax</strong>
                </p>
                <p>${cart.taxPrice}</p>
              </ContentGroup>
              <ContentGroup>
                <p>
                  <strong>Total</strong>
                </p>
                <p>${addDecimal(cart.totalPrice)}</p>
              </ContentGroup>
              <Button type='button' onClick={placeOrderHandler}>
                Place Order
              </Button>
            </Content>
          </Col>
        </Row>
      </Wrapper>
    </>
  )
}

export default PlaceOrderScreen
