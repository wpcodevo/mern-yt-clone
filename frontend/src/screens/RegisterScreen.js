import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Container from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import CustomLoader from '../components/CustomLoader'
import { Top, Form, FormControl, Button, Bottom } from './LoginScreen'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url('/images/signup-bg.jpg') center/cover no-repeat fixed;
`

const RegisterScreen = ({ history, location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)

  const { loading, userInfo } = userLogin

  useEffect(() => {
    window.scrollTo(0, 0)
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, history, redirect])

  const submitHandler = e => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match')
    } else if (name && email && password) {
      dispatch(register(name, email, password))
    } else {
      toast.error('Please fill all fields!')
    }
  }

  return (
    <Wrapper>
      <Container>
        <Top>
          <i className='fas fa-cogs'></i>
          <div>
            <h2>Get Started</h2>
            <p>Create a new account</p>
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

            <Button type='submit'>Signup Now</Button>
          </Form>
        )}

        <Bottom>
          <i className='fas fa-question'></i>
          Existing user? <Link to='/login'>Login here</Link> instead.
        </Bottom>
      </Container>
    </Wrapper>
  )
}

export default RegisterScreen
