/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import media from '../styles/media'
import theme from '../styles/theme'
import { generateSpace } from "../styles/shared-styles"
import ToggleMenu from '../components/ToggleMenu'
import Menu from './Menu'
import Home from "./HomeIcon"


export const Wrapper = styled.div`
  ${media.phablet`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  `}
`

export const Drawer = styled.div`
  ${media.phablet`
    background: ${theme.colors.darkNavyEnd};
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${props => props.open 
      ? css`
        max-height: 200px;
      `
      : css`
        max-height: 0;
      `}
    
    > div {
      padding: 0 3rem 3rem;
    }
  `}

  ${media.mobile`
    > div {
      padding: 0 2rem 2rem;
    }
  `}
`

export const Header = styled.header`
  ${media.phablet`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 7rem;
    background-image: linear-gradient(to bottom,rgba(20,35,51,0.0) 0%,rgba(20,35,51,1) 50%);
    ${generateSpace('padding')};
  `}
`




class Navigation extends Component {
    constructor() {
      super()
      this.state = { open: false }
      this.toggleMenu = this.toggleMenu.bind(this)
    }
  
    toggleMenu() {
      this.setState({ open: !this.state.open })
    }
  
    componentDidUpdate(prevProps) {
      const { location } = this.props
  
      if (location.pathname !== prevProps.location.pathname) {
        this.setState({ open: false })
      }
    }
  
    render() {
      const { open } = this.state
      return (
        <Wrapper>
          <Header>
            <Home />
            <ToggleMenu 
              open={open} 
              onClick={this.toggleMenu} 
            />
          </Header>
          <Drawer open={open}>
            <div>
              <Menu />
            </div>
          </Drawer>
        </Wrapper>      
      )
    }
  }
  
  export default Navigation
  