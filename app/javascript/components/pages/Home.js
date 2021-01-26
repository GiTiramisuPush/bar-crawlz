import React, { Component } from 'react';
import SanDiegoMap from '../../assets/sandiegomap.png'
import { Form, FormGroup, Input, Row, Col } from 'reactstrap'

//components
import TopCrawls from '../components/TopCrawls'
import SignInBanner from '../components/SignInBanner'
import BarIndex from '../components/BarIndex'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        location: "",
        term: ""},
      viewToggle: false
    }
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    let { form, viewToggle } = this.state
    e.preventDefault()
    console.log("viewtoggle", viewToggle)
    console.log("location", form.location)
    console.log("term", form.term)
    if(form.location.length > 0){
      alert("fetch call happening")
      this.setState({ viewToggle: true })
    } else{
      return alert("You must enter a location to search!")
    }
  }

  render () {
    return (
      <div className= "page-container">
        <Row className= "hero-container">
          <Col className= "map-image-container">
            <img className= "map-image"
            src = { SanDiegoMap } />
          </Col>
          <Col className= "hero-text-div">
            <h1 className="hero-text">
            Drink to Discover a New City!
            </h1>
            <h2 className="hero-text">
              Plan the night you'll always remember
            </h2>
            <Form className= "search-form">
              <FormGroup className= "search-field">
                <Input
                  type="text"
                  name="location"
                  value={ this.state.form.location }
                  placeholder="Location?"
                  onChange={ this.handleChange }
                />
              </FormGroup>
              <FormGroup className= "search-field">
                <Input
                  type="text"
                  name="term"
                  placeholder="Keywords?"
                  value={ this.state.form.term }
                  onChange={ this.handleChange }
                />
              </FormGroup>
              </Form>
            <button className= "button" onClick= { this.handleSubmit } >Search</button>
          </Col>
        </Row>

        {/* if viewToggle is false, then the topcrawls component shows */}
        { !this.state.viewToggle && <TopCrawls />}

        {/* if viewToggle gets updated to TRUE when a user enters their input, then the bar search results will appear */}
        { this.state.viewToggle && 
          <BarIndex 
            bars = { this.props.bars}
            location = {this.state.form.location}
            term = {this.state.form.term}
              />}

        < SignInBanner 
                sign_in_route = { this.props.sign_in_route }
                sign_up_route = { this.props.sign_up_route }
                new_user_route={ this.props.new_user_route }/>
        </div>
    );
  }
}

export default Home