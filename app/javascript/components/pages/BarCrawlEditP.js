import React, { Component } from 'react'
import {
  Col,
  Input,
  Form,
  FormGroup,
  Card,
  Row } from 'reactstrap';

class BarCrawlEditP extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  } 


  handleChange = (e) => {
    let { title } = this.state
    // destructuring title out of state
    title = e.target.value
    // setting state to the updated form
    this.setState({ title: title })
  }

  handleSubmitUpdate = (e) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    // a function call being passed from App.js
    this.props.updateCrawlTitle(this.state.title, this.props.crawl.id)
  }

  // handleSubmitDeleteBar = (e) => {
  //   // keeps react from refreshing the page unnecessarily
  //   e.preventDefault()
  //   // a function call being passed from App.js
  //   this.props.deleteBarFromCrawl(this.props.crawl)
  // }

  render () {

    console.log("EDIT PAGE'S CRAWL'", this.props.crawl)

    return (
      <div className='purple-background'>
      <h1 className= "dark-background-text padding-sides">
          Edit Your Saved Bar Crawl
          </h1>
      <h2 className= "dark-background-text padding-sides">"{this.props.crawl.title}"</h2>
      <Form className="modal-form padding-sides">
                    <FormGroup className= "edit-title-form-field">
                        <Input
                        type="text"
                        name="title"
                        placeholder="Write Your New Crawl Title Here 😉"
                        value= { this.state.title }
                        onChange={ this.handleChange }
                        />
                    </FormGroup>
                <button 
                className= "button-small" 
                onClick={ this.handleSubmitUpdate }
                disabled= { this.state.title.length < 1 }>
                    UPDATE TITLE
                </button>
                </Form>


      
      <div className= "scroll-container">
      <div>
        { this.props.bars && this.props.bars.map((bar, index) => {
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

                  <button 
                    className="button">
                    Delete from Crawl
                  </button>

              </Col>
              </Row>
            </Card>
          )
        })}
        </div>
    </div>

          <br/>
        <div className= "flex-container space-between padding-sides">
        <div className= "flex-container">
        <div className="arrow-left" ></div>
        <div className="spacer"></div>
        <a 
          className= "light" 
          href="/userdashboard"> 
          Back to Dashboard
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

export default BarCrawlEditP