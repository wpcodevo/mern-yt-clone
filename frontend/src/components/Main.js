import React from 'react'
import styled from 'styled-components'

import Collection from './collections/Collection'
import Product from './products/Product'

const MainWrapper = styled.div`
  grid-area: main;
`

const Main = () => {
  return (
    <MainWrapper>
      <Collection />
      <Product />
    </MainWrapper>
  )
}

export default Main
