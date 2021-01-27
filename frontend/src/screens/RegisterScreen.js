import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Container from '../components/FormContainer'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url('/images/signup-bg.jpg') center/cover no-repeat fixed;
`

const Top = styled.div`
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
const Form = styled.form`
  padding: 2.5rem;
  background-color: var(--white);
`

const FormControl = styled.div`
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

const Button = styled.button`
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

const Bottom = styled.div`
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
const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Navigation />
      <Wrapper>
        <Container>
          <Top>
            <i className='fas fa-cogs'></i>
            <div>
              <h2>Get Started</h2>
              <p>Create a new account</p>
            </div>
          </Top>
          <Form>
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
              <label htmlFor=''></label>
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

            <Button type='submit'>Signup Now</Button>
          </Form>
          <Bottom>
            <i className='fas fa-question'></i>
            Existing user? <Link to='/login'>Login here</Link> instead.
          </Bottom>
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}

export default RegisterScreen
