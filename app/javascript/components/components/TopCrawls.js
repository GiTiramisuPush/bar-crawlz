import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardHeader, CardDeck, Col} from 'reactstrap'

class TopCrawls extends Component {
  render () {
    return (
<CardDeck className= "top-crawls-container">
          <Col className="top-crawls-heading-container">
            <h2 className="dark-background-text">Top BarCrawls in the US</h2>
          </Col>
          <Card className= "top-crawls-card">
        <CardHeader className= "card-header" tag="h3">Featured Crawl</CardHeader>
        <CardBody>
        <CardImg 
          bottom width="100%" 
          src=""
          alt="featured crawl" />
        </CardBody>
      </Card>
      <Card className= "top-crawls-card">
        <CardHeader className= "card-header" tag="h3">Featured Crawl</CardHeader>
        <CardBody>
        <CardImg 
          bottom width="100%" 
          src=""
          alt="featured crawl" />
        </CardBody>
      </Card>
      <Card className= "top-crawls-card">
        <CardHeader className= "card-header" tag="h3">Featured Crawl</CardHeader>
        <CardBody>
        <CardImg 
          bottom width="100%" 
          src=""
          alt="featured crawl" />
        </CardBody>
      </Card>
      
          {/* <div className="top-crawls-card-container">
            <div className="top-crawls-card-container-top">

            </div>
          </div>
          <div className="top-crawls-card-container">
            <div className="top-crawls-card-container-top">
              <div className="top-crawls-car-container-pic">
                
              </div>
            </div>
          </div>
          <div className="top-crawls-card-container">
            <div className="top-crawls-card-container-top">
              <div className="top-crawls-car-container-pic">
                
              </div>
            </div>
          </div> */}
        </CardDeck>
    );
  }
}

export default TopCrawls