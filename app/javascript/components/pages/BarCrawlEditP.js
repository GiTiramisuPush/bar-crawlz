import React, { Component } from 'react'
import {
  Col,
  Input,
  Form,
  FormGroup,
  Card,
  Row, } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class BarCrawlEditP extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form:{
        title: "",
        user_id: this.props.current_user.id
      },
      success: false,
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
    this.props.updateCrawlTitle(this.state.form, this.props.crawl.id)
    this.setState({ success: true })
  }

  handleSubmitDeleteBar = (e, crawlid, barid) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    // a function call being passed from App.js
    this.props.deleteBarFromCrawl(crawlid, barid)
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
        <div>
        <h1 className= "dark-background-text">
          Edit Your Saved BarCrawl
          </h1>
        <h2 className= "dark-background-text">"{this.props.crawl.title}"</h2>

        <Form className="modal-form">
                    <FormGroup className= "edit-title-form-field">
                        <Input
                        type="text"
                        name="title"
                        placeholder="Write Your New Crawl Title Here 😉"
                        value= { this.state.form.title }
                        onChange={ this.handleChange }
                        />
                    </FormGroup>
                <button 
                className= "button-small" 
                onClick={ this.handleSubmitUpdate }
                disabled= { this.state.form.title.length < 1 }>
                    UPDATE TITLE
                </button>
                </Form>
            </div>
        <div className="copy-link-box">
      <h4 className= "dark-background-text">Copy the link to this crawl to share!</h4>
      
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div><center>
            <button className="button" onClick={this.copyToClipboard}>Copy</button> 
            <p className= "dark-background-text">{this.state.copySuccess}</p></center>
          </div>
        }
        <form className="hidden">
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value={`http://barcrawlz.herokuapp.com/popularcrawls/${this.props.crawl.id}`}
          />
        </form>
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

                  <button 
                    className="button" onClick={ (e) => this.handleSubmitDeleteBar(e, this.props.crawl.id, bar.id) }>
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