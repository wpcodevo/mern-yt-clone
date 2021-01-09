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
`
const Content = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Row = styled.div`
  width: calc(25% - 3rem);
  line-height: 4.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`

const MegaItem = styled.li`
  padding: 0 2rem;
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
`

const NavItem = ({ item }) => {
  return (
    <NavItemWrapper>
      <NavLink to={item.path}>
        {item.title}
        <span>{item.subMenu && item.icon}</span>
        <span>{item.megaMenu && item.icon}</span>
      </NavLink>
      {item.subMenu && (
        <DropMenu>
          {item.subMenu.map((item, index) => {
            return (
              <DropLink key={index} path={item.path}>
                {item.title}
              </DropLink>
            )
          })}
        </DropMenu>
      )}

      {item.megaMenu && (
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
                        <MegaLink to={item.path} key={index}>
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
      )}
    </NavItemWrapper>
  )
}

export default NavItem
