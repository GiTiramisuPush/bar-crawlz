import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import SummerPic from '../../assets/summerpic.png'
import RyanPic from '../../assets/ryanpic.png'
import FilippoPic from '../../assets/filippopic.png'

class AboutUs extends Component {
  render () {
    return (
      <div className="page-container padding-sides padding-top-and-bottom"><center>
        <h1 className= "extra-padding">About the App</h1>
        <br/>
        <Row>
        <Col>
          <div className="circular-frame">
            <img 
            src={ FilippoPic } className="circular-frame" />
          </div>
          <h4>Filippo Venturini</h4>
          <p>Product Manager</p>
        </Col>
        <Col>
          <div className="circular-frame">
            <img 
            src={ SummerPic } className="circular-frame" />
          </div>
          <h4>Summer Cook</h4>
          <p>Design Lead</p>
        </Col>
        <Col>
          <div className="circular-frame">
            <img 
            src={ RyanPic } className="circular-frame" />
          </div>
          <h4>Ryan Sarll</h4>
          <p>Tech Lead</p>
        </Col>
        </Row>
        <div className= "about-us-paragraph extra-padding">
        <p>
          <br/>
        We created this app as a way to more easily plan out a night on the town. We know how long it can take to sift through ratings, restaurants, and bars on Google Maps or Yelp to figure out which look the most fun for a night out.
        <br/>
        <br/>
        V1 makes it easy to find and save bars to a list.
        <br/>
        <br/>
        V2 will include Leaflet maps to discover the distances between bars and more efficiently plan your perfect barcrawl. 
        <br/>
        <br/>
        This full stack React-in-Rails App was created by Summer Cook, Filippo Venturini, and Ryan Sarll. It uses information from the Yelp Fusion API, and it We are students at LEARN Academy, a Full-Stack Software Development Bootcamp based in San Diego, CA.
        </p>
        </div>
        </center>
        </div>
    );
  }
}

export default AboutUs