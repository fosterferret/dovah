/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import media from "../styles/media"
import theme from "../styles/theme"
import { generateSpace } from '../styles/shared-styles'


const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  ${generateSpace('padding')};
  ${props => !props.open ? `counter-reset: li;` : ''}
  
  ul:last-child li {
    text-align: right;
    
    a {
      transition: color .4s ease;
      will-change: color;
      position: relative;
    
      &:not(.active)::before {
        opacity: 1;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: #fff;
        
        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    }
  }
  ${media.tablet`
  position: static;
  padding: 0;
`}
`

export const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
`

export const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  line-height: 0.85em;
  
  &:last-child {
    padding-bottom: 0;
  }

  a {
    font-size: .8rem;
    font-family: ${theme.fonts.Inconsolata};
    pointer-events: all;
    transition: color .1s ease;
    line-height: 1em;
    ${props => props.highlight 
      ? css`
        color: ${theme.colors.darkYellow};
        
        &:hover::before {
          display: none !important;
          color: #fff;
        }
      `
      : css`
        color: ${theme.colors.darkGrey};
        &:hover {
          color: white;
        }
      `}
  }
`

export const NavLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  &.active {
    color: ${theme.colors.darkYellow};
    
    &::before {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`


const Menu = ({open}) =>
  <NavWrapper open={open}>
    <Nav open={open}>
      <NavItem>
        <a href="https://twitter.com/auxinom" rel="noopener noreferrer" target="_blank">TWITTER</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/fosterferret" rel="noopener noreferrer" target="_blank">GITHUB</a>
      </NavItem>
      <NavItem>
        <a href="https://medium.com/@AuxiNom" rel="noopener noreferrer" target="_blank">MEDIUM</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/fosterferret" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem open={open}>
        <NavLink open={open} to='/'>HOME</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/work'>WORK</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/profile'>PROFILE</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/lists'>LISTS</NavLink>
      </NavItem>
    </Nav>
  </NavWrapper>

export default Menu
