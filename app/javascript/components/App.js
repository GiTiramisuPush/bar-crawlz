import React from "react"

//mock Data
// import mockBars from './pages/yelpBarData.js'
// import mockCrawls from './pages/mockCrawls.js'


//Components
import Header from './components/Header'
import Footer from './components/Footer'

//Pages
import AboutUs from './pages/AboutUs'
import BarCrawlEditP from './pages/BarCrawlEditP'
import BarShow from './pages/BarShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserDashboardP from './pages/UserDashboardP'
import CrawlShow from './pages/CrawlShow'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bars: null,
      crawls: []
    }
  } 

// yelp API bar index methods

  //this method takes the user's inputted information from the Search Bar on the Home Page. 
  //It then runs the indexYelpBars method (which is a fetch call to the API) with this user's search info as its arguments.
  getUserYelpInfo = (userlocation, userterm) => {
    this.indexYelpBars(userlocation, userterm)
  }

  //fetch call to the Yelp API to return bars in a certain location with a specific term.
  indexYelpBars = (userlocation, userterm) => {
    // let { location, term } = this.state
    console.log(userlocation)
    console.log(userterm)
    fetch(`/yelp?location=${userlocation}&term=${userterm}`)
    .then(response => response.json())
    .then(payload => {
      console.log(payload)
      this.setState({bars: payload})
    })
  }
  

//methods used in newcrawlmodal

componentDidMount(){
  this.indexCrawls()
}

indexCrawls = () => {
  fetch("/crawls")
  .then(response => {
    return response.json()
  })
  .then(crawlsObject => {
    // set the state with the data from the backend into the empty arra
    this.setState({ crawls: crawlsObject })
  })
  .catch(errors => {
    console.log("index errors:", errors)
  })
}

createNewCrawl = (title, userid) => {
  const requestBody = {
    title: title,
    user_id: userid
  }
  return fetch('/crawls', {
    body: JSON.stringify(requestBody),
    headers: {
    "Content-Type": "application/json"
  },
  method: "POST"
  })
  .then(response => response.json())
  .then(payload => { 
    //this line will return the crawl ID of the crawl
    return payload.id
    // payload.id 
    //might be payload.crawl.id- depends what the console log below looks like
  })
}


addBartoCrawl = (bar, crawlID) => {
  const requestBody = {
    bar: {
      yelp_id: bar.id, 
      name: bar.name, 
      image_url: bar.image_url, 
      url: bar.url,
      categories: bar.categories.map(category => category.title).join(" / "),
      rating: bar.rating, 
      address1: bar.location.address1, 
      city: bar.location.city, 
      state: bar.location.state,
      zip_code: bar.location.zip_code, 
      country: bar.location.country, 
      display_address: bar.location.display_address.join(", "),
      phone: bar.phone, 
      display_phone: bar.display_phone
    },
    crawl: {
      id: crawlID
    }
  }
  return fetch('/bars', {
    body: JSON.stringify(requestBody),
    headers: {
    "Content-Type": "application/json"
  },
  // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
  .then(response => {
    if(response.status === 422){
      alert("Your submission was not accepted. BYE")
    }
    return response.json()
  })
  .catch(errors => {
    console.log("Add Bar to Crawl Errors:", errors)
  })
}



//methods used in user dashboard
deleteCrawl = (id) => {
  alert("Delete this crawl? 🥺")
  fetch(`/crawls/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => {
    console.log(response)
    if(response.status === 422){
      alert("There is something wrong with your submission.")
    }
    return response.json()
  })
  .then(() => {
    this.indexCrawls()
  })
  .catch(errors => {
    console.log("delete errors", errors)
  })
}

newCrawlOnly = (newcrawl) => {
  fetch("/crawls", {
    body: JSON.stringify(newcrawl),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
  .then(response => {
    if(response.status === 422){
      alert("There is something wrong with your submission.")
    }
    return response.json()
  })
  .then(() => {
    this.indexCrawls()
  })
  .catch(errors => {
    console.log("create errors", errors)
  })
}



//methods used in barcrawl edit

updateCrawlTitle = (crawl, id) => {
  console.log(id,"CRAWL ID")
  fetch(`/crawls/${id}`, {
    body: JSON.stringify(crawl),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
  })
  .then(response => {
    console.log(response)
    if(response.status === 422){
      alert("There is something wrong with your submission.")
    }
    return response.json()
  })
  .then(() => {
    this.indexCrawls()
  })
  .catch(errors => {
    console.log("update crawl errors", errors)
  })
}

// deleteBarFromCrawl = (id) => {
//   alert("Are you sure you want to delete this bar from your crawl?")
//   fetch(`/bars/${id}`, {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method: "DELETE"
//   })
//   .then(response => {
//     console.log(response)
//     if(response.status === 422){
//       alert("There is something wrong with your submission.")
//     }
//     return response.json()
//   })
//   .then(() => {
//     this.indexCrawls()
//   })
//   .catch(errors => {
//     console.log("delete bar from crawl errors", errors)
//   })
// }

  render () {

//info about whats happening with logged in users etc
    console.log("logged in", this.props.logged_in)
    console.log("current user", this.props.current_user)
    console.log("this.state.bars", this.state.bars)

    return (

    <Router>

      <Header 
        logged_in={ this.props.logged_in }
        sign_in_route = { this.props.sign_in_route }
        sign_out_route = { this.props.sign_out_route }
        sign_up_route = { this.props.sign_up_route }
        new_user_route={ this.props.new_user_route }
      />

  <Switch>
    {/* -----Home Route----- */}
      <Route exact path="/" 
            render={ (props) => 
            <Home      
              bars = { this.state.bars }     
              sign_in_route = { this.props.sign_in_route }
              sign_out_route = { this.props.sign_out_route }
              sign_up_route = { this.props.sign_up_route }
              new_user_route={ this.props.new_user_route }
              getUserYelpInfo={ this.getUserYelpInfo }
            /> 
        } 
      />

    {/* -----About Us Page Route----- */}
      <Route path="/about" component={ AboutUs } 
      />


    {/* -----Bar Show Route----- */}
    <Route 
          path="/bar/:id"
          render={ (props) =>{
            let id = props.match.params.id
            let bar = this.state.bars.businesses.find(bar => bar.id == id)
            return (
              <BarShow 
                bar={ bar }
                crawls= { this.state.crawls }
                indexYelpBars= { this.indexYelpBars }
                getUserYelpInfo= { this.getUserYelpInfo }
                createNewCrawl={ this.createNewCrawl }
                addBartoCrawl={ this.addBartoCrawl }
                logged_in={ this.props.logged_in }
                sign_in_route = { this.props.sign_in_route }
                sign_out_route = { this.props.sign_out_route }
                sign_up_route = { this.props.sign_up_route }
                new_user_route={ this.props.new_user_route }
                current_user={ this.props.current_user }  
                />
            )
          }}
        />
        

    {/* -----Bar Crawl Edit Route (protected)----- */}
{ this.props.logged_in &&
    <Route 
      path="/editbarcrawl/:id"
      render={ (props) => {
        let id = props.match.params.id
        let crawl = this.state.crawls.filter(crawl => crawl.id === parseInt(id))

              return (
                <BarCrawlEditP
                  current_user={ this.props.current_user }
                  crawl= { crawl[0] }
                  sign_out_route = { this.props.sign_out_route }
                  updateCrawlTitle={ this.updateCrawlTitle }
                  bars={ this.state.ourBars }
                  // deleteBarFromCrawl={ this.deleteBarFromCrawl }
                />
              )
            }}
          />
  }



    {/* -----User Dashboard Route----- */}
    { this.props.logged_in &&
    <Route
       path="/userdashboard"
       render={ (props) =>{
         //makes sure that the selectedcrawl's ID matches the id that needs to be edited
        let id = props.match.params.id
        let crawl = this.state.crawls.find(crawl => crawl.id === parseInt(id))
        //filters all the crawls so they only show the ones with the logged in user's ID
        let userid = this.props.current_user.id
        let crawls = this.state.crawls.filter(crawl => crawl.user_id === userid)
        return(
          <UserDashboardP 
            crawls={ crawls }
            crawl={ crawl }
            sign_out_route = { this.props.sign_out_route } 
            deleteCrawl={ this.deleteCrawl }
            newCrawlOnly={ this.newCrawlOnly }
            current_user={ this.props.current_user } 
          />
        )
      }}
    />
  }

  {/* ------CrawlShow Route------- */}
  <Route 
      path="/popularcrawls/:id"
      render={ (props) => {
        let id = props.match.params.id
        let crawl = this.state.crawls.filter(crawl => crawl.id === parseInt(id))

              return (
                <CrawlShow
                  current_user={ this.props.current_user }
                  crawl= { crawl[0] }
                  sign_out_route = { this.props.sign_out_route }
                />
              )
            }}
          />


    {/* -----NotFound Route----- */}
    <Route component={ NotFound } />

  </Switch>
        <Footer 
          logged_in={ this.props.logged_in }
          sign_in_route = { this.props.sign_in_route }
          sign_out_route = { this.props.sign_out_route }
          sign_up_route = { this.props.sign_up_route }
          new_user_route={ this.props.new_user_route }
        />
          
</Router>

    );
  }
}

export default App
