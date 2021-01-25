import React, { Component } from 'react';
import SanDiegoMap from '../../assets/sandiegomap.png'
import { Form, FormGroup, Input } from 'reactstrap'
import TopCrawls from '../components/TopCrawls'
import SignInBanner from '../components/SignInBanner'


class Home extends Component {
  render () {
    return (
      <div className= "page-container">
        <div className= "hero-container">
          <div className= "map-image-container">
            <img className= "map-image"
            src = { SanDiegoMap } />
          </div>
          <div className= "hero-text-div">
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
                />
              </FormGroup>
              <FormGroup className= "search-field">
                <Input
                  type="text"
                  name="term"
                />
              </FormGroup>
              </Form>
            <a className= "button" href = '/'>Search</a>
          </div>
        </div>
        < TopCrawls />
        < SignInBanner 
                sign_in_route = { this.props.sign_in_route }
                sign_up_route = { this.props.sign_up_route }
                new_user_route={ this.props.new_user_route }/>
        </div>
    );
  }
}

export default Home