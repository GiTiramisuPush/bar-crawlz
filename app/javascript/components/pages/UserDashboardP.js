import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardImg, Button, NavLink } from 'reactstrap'
import BarCrawlIcon from '../../assets/barcrawlicon.png'

class UserDashboardP extends Component {

  handleSubmit = (e, crawlID) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    // a function call being passed from App.js
    this.props.deleteCrawl(crawlID)
  }




  render () {
    return (
      <div className='purple-background'>
        <div className='padding-sides'>
        <h1 className= "dark-background-text">
            User Dashboard
            </h1>
        <h2 className= "dark-background-text">
          <center>
            Saved Crawls
            </center>
        </h2>
        </div>

        <div className="scroll-container">
            <Container>
                <Row className= "flex-container centered">
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
                    
                    <Button
                      className="button-small"
                      href={`/editbarcrawl/${crawl.id}`} >
                        Edit
                    </Button>

                    <Button
                      onClick= { (e) => this.handleSubmit(e, crawl.id) }
                      className="button-small"
                      href="/userdashboard" >
                      Delete
                    </Button>
                    </div>
                    </CardBody>
            </Card>
            </Col>
          )
        })}
            </Row>
            </Container>
            </div>

            <br/>
          <div className= "flex-container space-between padding-sides">
          <div className= "flex-container">
          <div className="arrow-left" ></div>
          <div className="spacer"></div>
          <a 
            className= "light" 
            href="/"> 
            Back to Search
          </a>
          </div>
          <div className= "flex-container">
          <a 
            className= "light" 
            href={ this.props.sign_out_route }>Sign Out
          </a>
          <div className="spacer"></div>
          <div className="arrow-right" href={ this.props.sign_out_route }></div>
          </div>
          </div>
      </div>
    );
  }
}

export default UserDashboardP