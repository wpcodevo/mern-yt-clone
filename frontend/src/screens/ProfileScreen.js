import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import CustomLoader from '../components/CustomLoader'
import { Top, Form, FormControl, Button } from './LoginScreen'

const Section = styled.section`
  padding: 15rem 0;
  width: 100%;
  background: url('/images/signup-bg.jpg') center/cover no-repeat fixed;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;
`

const Col = styled.div``

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

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
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
        </Col>
      </Row>
    </Section>
  )
}

export default ProfileScreen
