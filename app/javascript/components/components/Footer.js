import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import WhiteLogo from '../../assets/whitelogo.png'


const Footer = (props) => {


  const {
    logged_in,
    sign_in_route,
    sign_out_route,
    sign_up_route
  } = props

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
    return (

  <div className= 'footer'>
    <Navbar expand="md">
     <NavbarToggler 
        onClick={toggle} className="ml-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {
          !logged_in &&
          <>
         <NavItem >
          <NavLink 
          className= "nav-link" 
          href={ sign_in_route }>
            Sign In
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink 
          className= "nav-link" 
          href={ sign_up_route }>
            Sign Up
          </NavLink>
        </NavItem>
        </>
        }
          {
          logged_in &&
      <>
        <NavItem>
        <NavLink 
          className= "nav-link" 
          href='/UserDashboard'>
          User Dashboard
        </NavLink>
      </NavItem>
      <NavItem >
        <NavLink 
          className= "nav-link" 
          href={ sign_out_route }>
          Sign Out
        </NavLink>
      </NavItem>
      </>
    }
      <NavItem >
        <NavLink 
          className= "nav-link" 
          href= '/about'>
          About
        </NavLink>
      </NavItem>
        </Nav>
    </Collapse>
      <NavbarBrand 
        className= "nav-link" 
        href="/">
          <img 
          className = "footer-logo" 
          src = { WhiteLogo } 
          alt= "Bar Crawlz!" />
      </NavbarBrand>
  </Navbar>
        </div>

    );
  }

export default Footer