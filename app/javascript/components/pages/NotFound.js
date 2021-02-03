import React, { Component } from 'react'
import {Col, Row} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/blacklogo.png'


class NotFound extends Component {
  render () {
    return (
      <div className="flex-container vertically-centered-container padding-sides">
        <Col className="vertically-centered">
          <div>
          <h1 className="XL-text">Looks Like You're Lost!</h1>
          <h2 className="XL-text">Too Many Drinks?</h2>
          <NavLink to="/"><button className="button">Back to Home 😉</button></NavLink>
          </div>
        </Col>
        <Col className="vertically-centered">
        <img className="not-found-logo" src={Logo}/>
        </Col>
      </div>
    );
  }
}

export default NotFound