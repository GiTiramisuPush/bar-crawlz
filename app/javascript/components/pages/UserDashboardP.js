import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardImg, Button, Form, FormGroup, Input, NavLink } from 'reactstrap'
import BarCrawlIcon from '../../assets/barcrawlicon.png'
import { Redirect } from 'react-router-dom'

class UserDashboardP extends Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      title: "",
      user_id: this.props.current_user.id
    },
    success: false
    }
  }

  //this handlesubmit deletes the crawl
  handleSubmit = (e, crawlID) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    // a function call being passed from App.js
    this.props.deleteCrawl(crawlID)
  }

  //this changes text in the title as the user types
  handleChange = (e) => {
    let { form } = this.state
    // destructuring title out of state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  //this submits the form to create a new crawl
  handleSubmitNewCrawl = () => {
    // keeps react from refreshing the page unnecessarily
    // e.preventDefault()
    // a function call being passed from App.js
        //do we need to pass the user ID here?????
        console.log(this.state.form)
    this.props.newCrawlOnly(this.state.form)
    this.setState({ success: true })
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
          <Form className="modal-form padding-sides padding-top">
                  <FormGroup className= "edit-title-form-field">
                      <Input
                      type="text"
                      name="title"
                      placeholder="Write Your Crawl Title Here 😉"
                      value= { this.state.form.title }
                      onChange={ this.handleChange }
                      />
                  </FormGroup>
              <button 
              className= "button-small" 
              onClick={ this.handleSubmitNewCrawl }
              disabled= { this.state.form.title.length < 1 }>
                  CREATE A NEW CRAWL
              </button>
          </Form>
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
          { this.state.success && <Redirect to="/userdashboard" />}
      </div>
    );
  }
}

export default UserDashboardP