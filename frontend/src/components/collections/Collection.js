import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import CollectionData from './CollectionData'
import Title from '../Title'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CollectionTitle = styled.h3`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5rem;
  padding: 0.7rem 1.4rem;
  font-size: 1.7rem;
  font-weight: inherit;
  margin-bottom: 1rem;
  transition: all 300ms ease-in-out;

  @media (min-width: 1200px) {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5rem;
    padding: 0.7rem 1.4rem;
    font-size: 1.6rem;
  }
`

const CollectionItem = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 500ms ease-in-out;
  }

  :hover ${CollectionTitle} {
    background-color: var(--white);
    color: var(--black);
  }

  :hover img {
    transform: scale(1.2);
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 500ms ease-in-out;
  }

  :hover::after {
    visibility: visible;
    opacity: 1;
  }
`

const CollectionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  text-align: center;
  z-index: 3;
`

const CollectionLink = styled(Link)`
  transition: all 300ms ease-in-out;
  font-size: 1.4rem;

  :hover {
    color: var(--primary);
  }
`

const Collection = () => {
  return (
    <section className='section'>
      <Title
        title='Shop Collections'
        subtitle='Select from the premium product and save plenty money'
      />
      <Wrapper className='container'>
        {CollectionData.map((item, index) => (
          <CollectionItem key={index}>
            <img src={item.url} alt={item.label} />
            <CollectionContent>
              <CollectionTitle>
                <Link to={item.path}>{item.label}</Link>
              </CollectionTitle>
              <CollectionLink to={item.path}>SHOP NOW</CollectionLink>
            </CollectionContent>
          </CollectionItem>
        ))}
      </Wrapper>
    </section>
  )
}

export default Collection
