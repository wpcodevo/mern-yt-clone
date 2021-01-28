import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled(Link)`
  color: var(--black);
  font-size: 1.5rem;
  padding: 0.9rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 300ms ease;

  :hover {
    color: var(--primary);
  }

  span {
    margin-left: 0.3rem;
  }

  @media (max-width: 996px) {
    display: block;
    font-size: 1.8rem;
    padding: 0 2rem;
    color: var(--black);

    &.desktopLink {
      display: none;
    }
  }
`

const DropMenu = styled.ul`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  width: 20rem;
  top: 8.5rem;
  line-height: 4.5rem;
  position: absolute;
  background-color: var(--white);
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease;

  @media (max-width: 996px) {
    position: static;
    opacity: 1;
    visibility: visible;
    top: 6.5rem;
    padding-left: 2rem;
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }
`

const DropItem = styled.li`
  @media (max-width: 996px) {
    margin: 0;
  }
`

const DropLink = styled(Link)`
  display: block;
  font-size: 1.5rem;
  width: 100%;
  padding: 0 0 0 1.5rem;
  border-radius: 0;
  color: var(--grey2);

  :hover {
    color: var(--primary);
  }

  @media (max-width: 996px) {
    color: var(--grey2);
    font-size: 1.5rem;
  }
`

const MegaMenu = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 8.5rem;
  left: 0;
  width: 100%;
  padding: 0 3rem;
  background-color: var(--white);
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease;

  @media (max-width: 996px) {
    position: static;
    top: 6.5rem;
    padding: 0 2rem;
    opacity: 1;
    visibility: visible;
    max-height: 0;
    overflow: hidden;
    transition: all 300ms ease;
  }
`
const Content = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 996px) {
    flex-direction: column;
    padding: 2rem 2rem 0 2rem;
  }
`

const Row = styled.div`
  width: calc(25% - 3rem);
  line-height: 4.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 996px) {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.09);
    margin-bottom: 1.5rem;

    :nth-child(1),
    :nth-child(2) {
      border-top: 0;
    }
  }
`
const Header = styled.header`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--grey1);
`
const MegaList = styled.ul`
  border-left: 1px solid rgba(255, 255, 255, 0.09);
  margin-left: -4rem;

  @media (max-width: 996px) {
    border-left: 0;
    padding-left: 2rem;
  }
`

const MegaItem = styled.li`
  padding: 0 2rem;

  @media (max-width: 996px) {
    margin: 0;
  }
`

const MegaLink = styled(Link)`
  padding: 0 2rem;
  display: block;
  font-size: 1.5rem;
  color: var(--grey2);

  :hover {
    color: var(--primary);
  }
`

const NavItemWrapper = styled.li`
  i {
    color: var(--grey2);
  }

  :hover ${DropMenu} {
    opacity: 1;
    visibility: visible;
    top: 6.5rem;
  }

  :hover ${MegaMenu} {
    opacity: 1;
    visibility: visible;
    top: 6.5rem;
  }

  @media (max-width: 996px) {
    margin: 1.5rem 1rem;
  }
`

const Input = styled.input`
  display: none;

  :checked ~ ${DropMenu},:checked ~ ${MegaMenu} {
    max-height: 100%;
  }
`

const Label = styled.label`
  display: none;

  span {
    margin-left: 0.3rem;
  }

  @media (max-width: 996px) {
    display: block;
    font-size: 1.8rem;
    padding-left: 2rem;
    color: var(--black);
    cursor: pointer;
    border-radius: 0.5rem;

    :hover {
      color: var(--primary);
    }
  }
`

const NavItem = ({ item, setMenu }) => {
  return (
    <NavItemWrapper>
      <NavLink
        to={item.path}
        className={item.class}
        onClick={() => setMenu(false)}
      >
        {item.title}
        <span>{item.subMenu && item.icon}</span>
        <span>{item.megaMenu && item.icon}</span>
      </NavLink>
      {item.subMenu && (
        <>
          <Input type='checkbox' id={item.label} />
          <Label htmlFor={item.label}>
            {item.title}
            <span>
              <i className='fas fa-chevron-down'></i>
            </span>
          </Label>

          <DropMenu>
            {item.subMenu.map((item, index) => {
              return (
                <DropItem key={index} onClick={() => setMenu(false)}>
                  <DropLink to={item.path}>{item.title}</DropLink>
                </DropItem>
              )
            })}
          </DropMenu>
        </>
      )}

      {item.megaMenu && (
        <>
          <Input type='checkbox' id={item.label} />
          <Label htmlFor={item.label}>
            {item.title}
            <span>
              <i className='fas fa-chevron-down'></i>
            </span>
          </Label>
          <MegaMenu>
            <Content>
              <Row>
                <img src='/images/woman.jpg' alt='' />
              </Row>
              {item.megaMenu.map((item, index) => {
                return (
                  <Row key={index}>
                    <Header>{item.title}</Header>
                    <MegaList>
                      <MegaItem>
                        {item.subItem.map((item, index) => (
                          <MegaLink
                            to={item.path}
                            key={index}
                            onClick={() => setMenu(false)}
                          >
                            {item.title}
                          </MegaLink>
                        ))}
                      </MegaItem>
                    </MegaList>
                  </Row>
                )
              })}
            </Content>
          </MegaMenu>
        </>
      )}
    </NavItemWrapper>
  )
}

export default NavItem
