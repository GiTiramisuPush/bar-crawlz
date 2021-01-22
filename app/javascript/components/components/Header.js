import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Header = (props) => {

  const {
    logged_in,
    sign_in_route,
    sign_out_route,
    sign_up_route
  } = props

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
<div>
    <Navbar 
        color="dark"
        dark expand="md"
        fixed="top">
    <NavbarBrand href="/">ApartmentApp</NavbarBrand>
    <NavbarToggler onClick={toggle} className="mr-2" />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
      {
          !logged_in &&
          <>
        <NavItem >
        <NavLink href={ sign_in_route }>Sign In
        </NavLink>
      </NavItem>
      <NavItem >
        <NavLink href={ sign_up_route }>Sign Up
        </NavLink>
      </NavItem>
      </>
    }
          {
          !logged_in &&
          <>
        <NavItem >
        <NavLink href='/UserDashboard'>User Dashboard
        </NavLink>
      </NavItem>
      <NavItem >
        <NavLink href={ sign_out_route }>Sign Out
        </NavLink>
      </NavItem>
      </>
    }
        </Nav>
    </Collapse>
  </Navbar>
</div>
  )
}




  export default Header;