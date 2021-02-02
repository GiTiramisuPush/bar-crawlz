import React, { Component } from 'react';
import { Row, Col, NavLink } from 'reactstrap'

        // <Row className= "sign-in-banner  flex-column-reverse flex-md-row">

class SignInBanner extends Component {
    render () {

const{
        sign_in_route,
        sign_up_route,
          } = this.props

      return (
            <Row className= "sign-in-banner flex-container">

            <Col className="vertically-centered sign-in">

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


            <Col className="vertically-centered">
                <h2>Join the Fun & Save Your Favorite Routes </h2>
            </Col>

        </Row>
      );
    }
  }
  
  export default SignInBanner