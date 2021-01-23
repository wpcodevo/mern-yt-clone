import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 15rem auto 15rem auto;

  div {
    padding: 2rem 0;
    text-align: center;

    &.warning {
      background-color: #f8d7da;

      span {
        color: #aa5c63;
      }
    }

    &.success {
      background-color: #d1e7dd;

      span {
        color: #0f5132;
      }
    }
  }
`

const Message = ({ message, type }) => {
  return (
    <Wrapper className='container'>
      <div className={type}>
        <span>{message}</span>
      </div>
    </Wrapper>
  )
}

export default Message
