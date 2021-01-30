import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import CustomLoader from '../components/CustomLoader'
import LittleMessage from '../components/LittleMessage'
import { Top, Form, FormControl, Button } from './LoginScreen'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { Link } from 'react-router-dom'

const Section = styled.section`
  padding: 15rem 0;
  width: 100%;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`

const Th = styled.th`
  text-align: left;
  padding: 1rem 0.5rem;
  color: var(--black);
  font-weight: normal;
  border: 1px solid rgba(34, 36, 38, 0.15);

  @media (max-width: 567px) {
    padding: 0.5rem;
  }
`

const Td = styled.td`
  padding: 1.7rem 0.5rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  background-color: #ddd;
  font-size: 1.5rem;

  @media (max-width: 567px) {
    font-size: 1.4rem;
    padding: 1.5rem 0.5rem;
  }
`

const Col = styled.div`
  overflow-x: auto;
`

const LinkWrapper = styled(Link)`
  background-color: var(--green1);
  padding: 0.5rem 1rem;
  color: var(--white);
  border-radius: 0.5rem;
`

const ProfileScreen = ({ history, location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()
  const userDetails = useSelector(state => state.userDetails)
  const { loading, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const orderListMy = useSelector(state => state.orderListMy)
  const { error, loading: loadingOrders, orders } = orderListMy

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [userInfo, history, redirect, dispatch, user])

  const submitHandler = e => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match')
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name,
          email,
          password,
        })
      )
    }
  }

  return (
    <Section>
      <Row className='container'>
        <Col>
          <Top>
            <i className='fas fa-cogs'></i>
            <div>
              <h2>Update Profile</h2>
            </div>
          </Top>
          {loading && loading ? (
            <CustomLoader type='Oval' width={20} height={20} />
          ) : (
            <Form onSubmit={submitHandler}>
              <FormControl>
                <label htmlFor=''>Name</label>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <label htmlFor=''>Password</label>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <label htmlFor=''>Confirm Password</label>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  value={passwordConfirm}
                  onChange={e => setPasswordConfirm(e.target.value)}
                />
              </FormControl>

              <Button type='submit'>Update</Button>
            </Form>
          )}
        </Col>
        <Col>
          <h1>My Orders</h1>
          {loadingOrders ? (
            <CustomLoader type='Oval' width={20} height={20} />
          ) : error ? (
            <LittleMessage type='warning' message={error} />
          ) : (
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Date</Th>
                  <Th>Total</Th>
                  <Th>Paid</Th>
                  <Th>Delivered</Th>
                  <Th></Th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id}>
                    <Td>{order._id}</Td>
                    <Td>{order.createdAt.substring(0, 10)}</Td>
                    <Td>${order.totalPrice}</Td>
                    <Td>
                      {order.isPaid
                        ? order.paidAt.substring(0, 10)
                        : 'Not Paid'}
                    </Td>
                    <Td>
                      {order.isDelivered
                        ? order.deliveredAt.substring(0, 10)
                        : 'Not Delivered'}
                    </Td>
                    <Td>
                      <LinkWrapper to={`/orders/${order._id}`}>
                        Details
                      </LinkWrapper>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Section>
  )
}

export default ProfileScreen
