import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Form, Select } from './ProductScreen'
import Message from '../components/Message'
import CustomLoader from '../components/CustomLoader'

const Cart = styled.div`
  margin: 10rem auto;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Th = styled.th`
  text-align: left;
  padding: 0.5rem;
  color: var(--white);
  background-color: var(--primary);
  font-weight: normal;
`

const Td = styled.td`
  padding: 1rem 0.5rem;

  img {
    width: 8rem;
    height: 8rem;
    margin-right: 1rem;
  }
`

const CartInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.p`
  @media (max-width: 576px) {
    display: none;
  }
`

const LinkWrapper = styled(Link)`
  color: var(--primary);
  font-size: 1.4rem;
`

const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  margin-top: 2rem;
`

const TotalTable = styled.table`
  border-top: 3px solid var(--primary);
  width: 100%;
  max-width: 35rem;
`

const TotalLink = styled.button`
  display: inline-block;
  background-color: var(--primary);
  color: var(--white);
  padding: 1.3rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 3rem;
  outline: none;
  border: none;
  cursor: pointer;
`

const CartScreen = ({ match, location, history }) => {
  const [loading, setLoading] = useState(true)
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }

    setTimeout(() => setLoading(false), 500)
  }, [dispatch, productId, qty])

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id))
    history.push('/cart')
  }

  const checkOutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      <Navigation count={cartItems.reduce((acc, item) => acc + item.qty, 0)} />
      {cartItems.length === 0 ? (
        <Message type='warning' message='Your Cart is Empty' />
      ) : loading ? (
        <CustomLoader type='Oval' />
      ) : (
        <Cart className='container'>
          <Table>
            <thead>
              <tr>
                <Th>Product</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.product}>
                  <Td>
                    <CartInfo>
                      <Link to={`/products/${item.product}`}>
                        <img src={item.image} alt={item.name} />
                      </Link>
                      <div>
                        <Link to={`/products/${item.product}`}>
                          <Title>{item.name}</Title>
                        </Link>
                        <span>Price: ${item.price}</span>
                        <br />
                        <LinkWrapper
                          to='#'
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          remove
                        </LinkWrapper>
                      </div>
                    </CartInfo>
                  </Td>
                  <Td>
                    {item.countInStock > 0 && (
                      <Form>
                        <div>
                          <Select
                            value={item.qty}
                            onChange={e =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map(x => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Select>
                          <span>
                            <i className='fas fa-chevron-down'></i>
                          </span>
                        </div>
                      </Form>
                    )}
                  </Td>
                  <Td>${item.price * item.qty}</Td>
                </tr>
              ))}
            </tbody>
          </Table>

          <TotalPrice>
            <TotalTable>
              <tbody>
                <tr>
                  <Td>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  </Td>
                  <Td>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </Td>
                </tr>
                <tr>
                  <Td>Tax</Td>
                  <Td>$50</Td>
                </tr>
                <tr>
                  <Td>Total</Td>
                  <Td>$250</Td>
                </tr>
              </tbody>
            </TotalTable>
            <TotalLink
              type='button'
              disabled={cartItems.length === 0}
              onClick={checkOutHandler}
            >
              Proceed To Checkout
            </TotalLink>
          </TotalPrice>
        </Cart>
      )}

      <Footer />
    </>
  )
}

export default CartScreen
