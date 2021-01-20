import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const NavbarWrap = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const NavWrap = styled.div`

`

export const NavLink = styled(Link)`
  font-family: 'Yusei Magic', sans-serif;
  text-decoration: none;
  padding-right: 20px;
  color: #EBEBEB;

  &:hover {
    color: maroon;
  }
`

export const LogoWrap = styled.div`

`

export const Img = styled.img`
  height: 50px;
  padding-left: 10px;
`

