import React, { Component } from 'react';
import { Row, Col, NavLink } from 'reactstrap'



class SignInBanner extends Component {
    render () {

const{
        sign_in_route,
        sign_up_route,
          } = this.props

      return (
        <Row xs="3" className= "sign-in-banner">

            <Col className="sign-in-banner-buttons" xs="6" sm="4">
                <Col>
            <NavLink className= "button" href = { sign_in_route }>Sign In</NavLink>
                </Col>
                <Col>
                <NavLink className= "button-dark" href = { sign_up_route }>Sign Up</NavLink>
                </Col>
            </Col>

            <Col className="signup-cards-container" xs="6" sm="4">
                <h2>Join the Fun & Save Your Favorite Routes </h2>
            </Col>

        </Row>
      );
    }
  }
  
  export default SignInBanner