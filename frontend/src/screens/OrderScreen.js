import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'
import CustomLoader from '../components/CustomLoader'
import Message from '../components/Message'
import LittleMessage from '../components/LittleMessage'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

const Wrapper = styled.div`
  margin: 10rem 0;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5rem 0;
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

// const Button = styled.button`
//   display: block;
//   cursor: pointer;
//   outline: none;
//   border: none;
//   border-radius: 0.5rem;
//   width: 100%;
//   margin: 3rem 0;
//   padding: 1.5rem;
//   background-color: var(--green1);
//   color: var(--white);
//   font-size: 1.8rem;
//   font-weight: 500;
//   transition: all 300ms ease-in-out;

//   :hover {
//     opacity: 0.8;
//   }
// `

const Heading = styled.h1`
  margin-bottom: 5rem;
  padding-left: 0.5rem;

  @media (max-width: 567px) {
    font-size: 1.8rem;
  }
`

const OrderScreen = ({ match, history }) => {
  const [sdkReady, setSdkReady] = useState(false)
  const orderId = match.params.id

  const dispatch = useDispatch()
  const orderDetails = useSelector(state => state.orderDetails)
  const { loading, error, order } = orderDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const orderPay = useSelector(state => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  if (!loading) {
    const addDecimal = num => {
      return (Number(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimal(
      order.orderItems.reduce((acc, item) => acc + item.qty * item.price, 0)
    )
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    window.scrollTo(0, 0)

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, history, userInfo, order])

  const onPaymentHandler = paymentResult => {
    dispatch(payOrder(orderId, paymentResult))
  }

  return loading ? (
    <CustomLoader type='Oval' width={40} height={40} />
  ) : error ? (
    <Message type='success' message={error} />
  ) : (
    <>
      <Wrapper>
        <Heading>Order: {order._id}</Heading>
        <Row className='container'>
          <Col>
            <Group>
              <h2>Contact</h2>
              <Card>
                <p>Name</p>
                <p>{order.user.name}</p>
                <LinkWrapper to='/profile'>change</LinkWrapper>
              </Card>
            </Group>
            <Group>
              <Card>
                <p>Email</p>
                <p>
                  <a
                    style={{ color: 'var(--blue)' }}
                    href={`mailto:${order.user.email}`}
                  >
                    {order.user.email}
                  </a>
                </p>
                <LinkWrapper to='/profile'>change</LinkWrapper>
              </Card>
            </Group>
            <Group>
              <h2>Payment</h2>
              <Card>
                <p>Method</p>
                <p>{order.paymentMethod}</p>
                <LinkWrapper to='/payment'>change</LinkWrapper>
              </Card>
            </Group>
            <Group>
              {order.isPaid ? (
                <LittleMessage
                  type='success'
                  message={`Paid on ${order.paidAt}`}
                />
              ) : (
                <LittleMessage type='warning' message='Not Paid' />
              )}
            </Group>
            <Group>
              <h2>Shipping</h2>
              <Card>
                <p>Ship to</p>
                <p>
                  {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},{' '}
                  {order.shippingAddress.country}
                </p>

                <LinkWrapper to='/shipping'>change</LinkWrapper>
              </Card>
            </Group>
            <Group>
              {order.isDelivered ? (
                <LittleMessage
                  type='success'
                  message={`Delivered on ${order.deliveredAt}`}
                />
              ) : (
                <LittleMessage type='warning' message='Not Delivered' />
              )}
            </Group>
          </Col>
          <Col>
            <Content>
              <h2>Your Order</h2>
              <ContentGroup>
                <h4>Product</h4>
                <h4>Total</h4>
              </ContentGroup>

              {order.orderItems.map((item, index) => (
                <ContentGroup key={index}>
                  <p>
                    {item.name} <strong> x{item.qty}</strong>
                  </p>
                  <p>${item.price}</p>
                </ContentGroup>
              ))}
              <ContentGroup>
                <p>
                  <strong>Subtotal</strong>
                </p>
                <p>${order.itemsPrice}</p>
              </ContentGroup>
              <ContentGroup>
                <p>
                  <strong>Shipping</strong>
                </p>
                <p>${order.shippingPrice}</p>
              </ContentGroup>
              <ContentGroup>
                <p>
                  <strong>Tax</strong>
                </p>
                <p>${order.taxPrice}</p>
              </ContentGroup>
              <ContentGroup>
                <p>
                  <strong>Total</strong>
                </p>
                <p>${order.totalPrice}</p>
              </ContentGroup>

              {!order.isPaid && (
                <>
                  {loadingPay && (
                    <CustomLoader type='Oval' width={20} height={20} />
                  )}
                  {!sdkReady ? (
                    <CustomLoader type='Oval' width={20} height={20} />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={onPaymentHandler}
                    />
                  )}
                </>
              )}
            </Content>
          </Col>
        </Row>
      </Wrapper>
    </>
  )
}

export default OrderScreen
