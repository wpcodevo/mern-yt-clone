import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { login } from '../actions/userActions'
import CustomLoader from '../components/CustomLoader'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url('/images/login-bg.jpg') center/cover no-repeat fixed;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--green2);
  color: var(--green1);
  padding: 2.5rem;
  border-radius: 0.5rem 0.5rem 0 0;

  i {
    font-size: 3.8rem;
    margin-right: 2rem;

    @media (max-width: 567px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
  }
`
export const Form = styled.form`
  padding: 2.5rem;
  background-color: var(--white);

  &.color {
    background-color: #f7f8fb;
  }
`

export const FormControl = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  input {
    border: 1px solid rgba(34, 36, 38, 0.15);
    width: 100%;
    text-indent: 1rem;
    font-size: 1.5rem;
    padding: 1.4rem 0;
    border-radius: 0.5rem;
  }
`

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 1.5rem 0;
  outline: none;
  border: none;
  background-color: var(--green1);
  color: var(--white);
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

export const Bottom = styled.div`
  color: var(--brown1);
  padding: 2.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: var(--brown2);

  a {
    color: #4183c4;
  }

  i {
    padding-right: 1rem;
  }
`

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { loading, userInfo } = userLogin

  const submitHandler = e => {
    e.preventDefault()
    if (email && password) {
      dispatch(login(email, password))
    } else {
      toast.error('Please fill all fields!')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, history, redirect])

  return (
    <>
      <Wrapper>
        <FormContainer>
          <Top>
            <i className='fas fa-key'></i>
            <div>
              <h2>Welcome Back!</h2>
              <p>Login with email and password</p>
            </div>
          </Top>
          {loading && loading ? (
            <CustomLoader type='Oval' width={20} height={20} />
          ) : (
            <Form onSubmit={submitHandler}>
              <FormControl>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id='email'
                />
              </FormControl>

              <FormControl>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  id='password'
                />
              </FormControl>

              <Button type='submit'>Login Now</Button>
            </Form>
          )}

          <Bottom>
            <i className='fas fa-question'></i>
            Not an account?{' '}
            <Link
              to={redirect ? `/register/redirect=${redirect}` : '/register'}
            >
              Signup here
            </Link>{' '}
            instead.
          </Bottom>
        </FormContainer>
      </Wrapper>
    </>
  )
}

export default LoginScreen
