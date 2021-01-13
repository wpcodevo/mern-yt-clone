import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

const Grid = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 6.5rem 1fr 10rem;
  height: 100%;
`

const HomeScreen = () => {
  return (
    <Grid>
      <Header />
      <Main />
      <Footer />
    </Grid>
  )
}

export default HomeScreen
