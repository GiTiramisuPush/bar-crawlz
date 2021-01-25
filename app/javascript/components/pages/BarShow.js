import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, CardImg } from 'reactstrap'
import TopCrawls from '../components/TopCrawls'
import SignInBanner from '../components/SignInBanner'

class BarShow extends Component {
  render () {
    const { bar } = this.props
    return (
      <div className= "page-container">
      <NavLink 
        to={`/barindex`}
        className="white-background-container"><h4>Back to Search</h4></NavLink>
      <center>
      <div>
      <Row className= "bar-details-card">
          <Col>
        < div className="bar-img-container">
              <CardImg className= "bar-img"
                  alt = "check out this amazing bar" src = { bar.image_url } />
        </div>
        </Col>
        <Col>
      <div className="bar-info">
        <h2>{ bar.name }</h2>
        <h4>{ bar.display_address }</h4>
        <p><b>{ bar.display_phone }</b></p>
        <p>
          <b>Rating: </b>{ bar.rating }
          </p>
          <Row>
          <Col>
            <a className = 'button' 
            href= { bar.url }>
              Visit Website
            </a>
            </Col>
            <Col>
            <a className = 'button-dark' 
            href= '/'>
              Add to Crawl
            </a>
            </Col>
            </Row>
        </div>
        </Col>
        </Row>
        </div>
        </center>
        < TopCrawls />
        < SignInBanner 
                      sign_in_route = { this.props.sign_in_route }
                      sign_up_route = { this.props.sign_up_route }
                      new_user_route={ this.props.new_user_route }/>
      </div>
    );
  }
}

export default BarShow