import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardImg, Button, NavLink } from 'reactstrap'
import BarCrawlIcon from '../../assets/barcrawlicon.png'

class UserDashboardP extends Component {
  render () {
    return (
      <div className='purple-background'>
        <h1 className= "dark-background-text">
            User Dashboard
            </h1>

        <br/><br/>

        <h2 className= "dark-background-text">
          <center>
            Saved Crawls
            </center>
        </h2>

        <div className="scroll-container">
            <Container>
                <Row>
            { this.props.crawls && this.props.crawls.map((crawl, index) => {
          return (
            <Col key={index} className="spacing" lg="4" sm="6" xs="12">
            <Card 
              className= "top-crawls-card"
              key= { index } >
                <CardHeader className= "card-header" tag="h6">{ crawl.title }
                </CardHeader>
                <CardBody>
                    <CardImg 
                    bottom width="20%" 
                    src= { BarCrawlIcon }
                    alt="your crawl" />
                    <div className="modal-form">
                    <Button className="button-small" >Edit</Button>
                    <Button className="button-small" >Delete</Button>
                    </div>
                    </CardBody>
            </Card>
            </Col>
          )
        })}
            </Row>
            </Container>
            </div>

            <br/><br/>

      </div>
    );
  }
}

export default UserDashboardP