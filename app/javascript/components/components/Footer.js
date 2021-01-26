import React, { useState } from 'react';
import { NavLink } from 'reactstrap';


const Footer = (props) => {
    // const [isOpen, setIsOpen] = useState(false);
  
    // const toggle = () => setIsOpen(!isOpen);
  
    return (

        <div className= 'footer'>
            <div>
                    <NavLink 
                        className= 'nav-link' 
                        href={ props.sign_in_route }>
                      Sign In
                    </NavLink>
            </div>
            <div>
                    <NavLink 
                        className= 'nav-link'
                        href={ props.sign_up_route }>
                      Sign Up
                    </NavLink>
                    </div>
        </div>

    );
  }

export default Footer