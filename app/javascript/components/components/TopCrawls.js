import React, { Component } from 'react'
import { Card, CardImg, CardHeader, CardDeck, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import SanDiego from '../../assets/SD.png'
import Tijuana from '../../assets/TJ.png'
import Vegas from '../../assets/Vegas.png'

class TopCrawls extends Component {
  
  render () {
    return (
<CardDeck className= "top-crawls-container">
          <Col className="top-crawls-heading-container">
            <h2 className="dark-background-text">Top BarCrawls in the US</h2>
          </Col>
          <Card className= "top-crawls-card">
          <Link to='/popularcrawls/8'>
        <CardHeader className= "card-header" tag="h6">Downtown San Diego</CardHeader>
        <CardImg 
          bottom width="100%" 
          src={ SanDiego }
          alt="featured crawl" />
          </Link>
      </Card>
      <Card className= "top-crawls-card">
      <Link to= '/popularcrawls/6'>
        <CardHeader className= "card-header" tag="h6">Vegas Baby</CardHeader>
        <CardImg 
          bottom width="100%" 
          src={ Vegas }
          alt="featured crawl" />
        </Link>
      </Card>
      <Card className= "top-crawls-card">
        <Link to= '/popularcrawls/9'>
        <CardHeader className= "card-header" tag="h6">Viva Tijuana</CardHeader>
        <CardImg 
          bottom width="100%" 
          src={ Tijuana }
          alt="featured crawl" />
        </Link>
      </Card>
        </CardDeck>
    );
  }
}

export default TopCrawls