import React, { Component } from 'react'
import {
  Col,
  Input,
  Form,
  FormGroup,
  Card,
  Row,
  Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import NewCrawlModal from '../components/NewCrawlModal'

class CrawlShow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      copySuccess: '' 
      }
    }

  handleChange = (e) => {
    let { form } = this.state
    // destructuring title out of state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  handleSubmitUpdate = (e) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    // a function call being passed from App.js
    this.props.updateCrawlTitle(this.state.form, this.props.crawl[0].id)
    this.setState({ success: true })
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };


  render () {


    return (
      <div className='purple-background'>
      {this.props.crawl &&
      <div className= "padding-sides centered-text-breakpoint flex-container space-between">
        <h1 className= "dark-background-text">"{this.props.crawl.title}"</h1>
        <div className="copy-link-box">
      <h4 className= "dark-background-text">Copy the link to this crawl to share!</h4>
      <div className="flex-container centered-text-breakpoint">
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div><center>
            <button className="button-small" onClick={this.copyToClipboard}>Copy</button> 
            <span className= "dark-background-text">{this.state.copySuccess}</span></center>
          </div>
        }
        <form>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value={`http://barcrawlz.herokuapp.com/popularcrawls/${this.props.crawl.id}`}
          />
        </form>
      </div>
      </div>
      </div>
  }
      
      <div className= "scroll-container">
      <div>
        { this.props.crawl && this.props.crawl.bars.map((bar, index) => {
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
              <p>{ bar.display_address }</p>
              <h5>rating: { bar.rating }</h5>
              </Col>
              <Col>
                {/* <NavLink to={`/bars/${bar.id}`}>
                  <button className="button">
                    More Info
                  </button>
                </NavLink> */}

                   {/* conditionally render the add to crawl button with a link to the sign in route if the user is not logged in */}
                {
              !this.props.logged_in &&
                <Button className = 'button' 
                href = { this.props.sign_in_route }>
                  Add to Crawl
                </Button>
                  }
            {/* if the user is logged in, conditionally render the modal to add the bar to a crawl */}
                {
                  this.props.logged_in &&

                  < NewCrawlModal
                        current_user={ this.props.current_user }
                        crawls = { this.props.crawls.filter(crawl => crawl.user_id === this.props.current_user.id) }
                        sign_in_route = { this.props.sign_in_route }
                        sign_out_route = { this.props.sign_out_route }
                        sign_up_route = { this.props.sign_up_route }
                        name = { bar.name }
                        bar={ bar }
                        createNewCrawl={ this.props.createNewCrawl }
                        addBartoCrawl={ this.props.addBartoCrawl } />
                }

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
          href="/"> 
          Back to Home
        </a>
        </div>
        <div className= "flex-container">
        <p>   </p>
        <div className="spacer"></div>
        </div>
        </div>
    </div>
    );
  }
}

export default CrawlShow