import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardImg, Button} from 'reactstrap'

class BarIndex extends Component {
  render () {
    return (
<div className= "page-container">
      <h3>Your results for "search info here"</h3>
      <div>
        { this.props.bars && this.props.bars.businesses.map((bar, index) => {
          return (
            <Card key= { index } >
              <div>
              <a href= {`/bar/${bar.id}`}>
                <CardImg 
                  alt = "check out this amazing bar" src = { bar.image_url } />
                </a>
                </div>
              <h4>{ bar.name }</h4>
              <h5>rating: { bar.rating }</h5>
              <p>
                <NavLink to={`/bar/${bar.id}`}>
                  <Button color="secondary">
                    More Info
                  </Button>
                </NavLink>
              </p>
            </Card>
          )
        })}
        </div>
        </div>
    );
  }
}

export default BarIndex