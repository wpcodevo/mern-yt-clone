import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0rem 0 40rem 0;

  @media (max-width: 567px) {
    margin: 0rem 0 40rem 0;
  }
`

const CustomLoader = ({ type, color, width, height }) => {
  return (
    <Wrapper>
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={3000}
      />
    </Wrapper>
  )
}

CustomLoader.defaultProps = {
  color: '#ff4545',
}

export default CustomLoader
