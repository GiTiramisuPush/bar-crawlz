import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, CardImg, Button } from 'reactstrap'

//components
import NewCrawlModal from '../components/NewCrawlModal'
import TopCrawls from '../components/TopCrawls'
import SignInBanner from '../components/SignInBanner'

class BarShow extends Component {
  // state = {
  //   isOpen: false
  // };

  // //opens and closes the "NewCrawlModal" component
  // openModal = () => this.setState({ isOpen: true });
  // closeModal = () => this.setState({ isOpen: false });


  render () {


    const { bar } = this.props
    return (
      <div className= "page-container">
      <NavLink 
        to={`/barindex`}
        className="white-background-container"><h4>Back to Search</h4></NavLink>
      <center>
      <div>
      <Row className= "bar-details-card">
          <Col>
        < div className="bar-img-container">
              <CardImg className= "bar-img"
                  alt = "check out this amazing bar" src = { bar.image_url } />
        </div>
        </Col>
        <Col>
      <div className="bar-info">
        <h2>{ bar.name }</h2>
        <h4>{ bar.display_address }</h4>
        <p><b>{ bar.display_phone }</b></p>
        <p>
          <b>Rating: </b>{ bar.rating }
        </p>
      <div className= "bar-categories-container">
          { bar.categories.map((category, index) => {
          return (<span className = "outlined-text" key= { index } > { category.title }</span>) })
          }
      </div>
          <Row>
          <Col>
            <a className = 'button' 
            href= { bar.url }>
              Visit Yelp Page
            </a>
            </Col>
            <Col>
            {/* conditionally render the add to crawl button with a link to the sign in route if the user is not logged in */}
                {
              !this.props.logged_in &&
                <Button className = 'button-dark' 
                href = { this.props.sign_in_route }>
                  Add to Crawl
                </Button>
                  }
            {/* if the user is logged in, conditionally render the modal to add the bar to a crawl */}
                {
                  this.props.logged_in &&
                  < NewCrawlModal
                  name = { bar.name }
                  createNewCrawl={ this.createNewCrawl } />
                }
            </Col>
            </Row>
        </div>
        </Col>
        </Row>
        </div>
        </center>
        < TopCrawls />
        < SignInBanner 
                      sign_in_route = { this.props.sign_in_route }
                      sign_up_route = { this.props.sign_up_route }
                      new_user_route={ this.props.new_user_route }/>
      </div>
    );
  }
}

export default BarShow