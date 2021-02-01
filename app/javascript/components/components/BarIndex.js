import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardImg, Button, Col, Row} from 'reactstrap'

class BarIndex extends Component {
  render () {
    return (
<div className= "scroll-container">

      <h3>Your results for "{this.props.location} , {this.props.term}"</h3>

      <div>
        { this.props.bars && this.props.bars.businesses.map((bar, index) => {
          return (
            <Card 
              className= "bar-card"
              key= { index } >
                <Row>
              <Col>
              <div className= "bar-search-thumbnail">
              <a href= {`/bar/${bar.id}`}>
                <img 
                  className= "bar-img"
                  alt = "check out this amazing bar" src = { bar.image_url } />
                </a>
                </div>
                </Col>
              <Col>
              <h4>{ bar.name }</h4>
              <h5>rating: { bar.rating }</h5>
              </Col>
              <Col>
                <NavLink to={`/bar/${bar.id}`}>
                  <button className="button">
                    More Info
                  </button>
                </NavLink>
              </Col>
              </Row>
            </Card>
          )
        })}
        </div>
    </div>
    );
  }
}

export default BarIndex