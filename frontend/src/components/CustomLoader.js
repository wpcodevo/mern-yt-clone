import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 30rem 0;
`

const CustomLoader = ({ type, color }) => {
  return (
    <Wrapper>
      <Loader type={type} color={color} height={50} width={50} timeout={3000} />
    </Wrapper>
  )
}

CustomLoader.defaultProps = {
  color: '#ff4545',
}

export default CustomLoader
