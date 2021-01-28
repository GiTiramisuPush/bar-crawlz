import React, { Component } from 'react';
import { Row, Col, NavLink } from 'reactstrap'



class SignInBanner extends Component {
    render () {

const{
        sign_in_route,
        sign_up_route,
          } = this.props

      return (
        <Row className= "sign-in-banner  flex-column-reverse flex-md-row">

            <Col className="sign-up-buttons">

            <NavLink 
              className= "button" 
              href = { sign_in_route }>Sign In
            </NavLink>
            <div className="spacer"></div>

            <NavLink 
              className= "button-dark spacer-left" 
              href = { sign_up_route }>Sign Up
              </NavLink>
            </Col>
            <Col>
                <h2>Join the Fun & Save Your Favorite Routes </h2>
            </Col>

        </Row>
      );
    }
  }
  
  export default SignInBanner