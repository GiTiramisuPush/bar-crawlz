import React, { Component } from 'react'


class CopyLinkToCrawl extends Component {

  constructor(props) {
    super(props)
    this.state = {
      copySuccess: ''
      }
    }



copyToClipboard = () => {
    navigator.clipboard.writeText(`http://barcrawlz.herokuapp.com/popularcrawls/${this.props.crawl.id}`).then(() => {
      this.setState({ copySuccess: 'Copied!' });
    })
  };

render (){

    return (
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
        </div>
        )
    }
}

  export default CopyLinkToCrawl