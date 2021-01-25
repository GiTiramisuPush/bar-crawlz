import React from "react"

//mock Data
// import mockBars from './pages/mockBars.js'
import mockBars from './pages/yelpBarData.js'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import BarIndex from './components/BarIndex'

//Pages
import AboutUs from './pages/AboutUs'
import BarCrawlEditP from './pages/BarCrawlEditP'
import BarShow from './pages/BarShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserDashboardP from './pages/UserDashboardP'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bars: mockBars
    }
  } 

  render () {

//info about whats happening with logged in users etc
    console.log("mockBars test",this.state.bars)
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
              bars = { this.state.bars}     
              sign_in_route = { this.props.sign_in_route }
              sign_out_route = { this.props.sign_out_route }
              sign_up_route = { this.props.sign_up_route }
              new_user_route={ this.props.new_user_route } 
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
            console.log("bar", bar)
            console.log("id", id)
            return (
              <BarShow 
                bar={ bar }
                sign_in_route = { this.props.sign_in_route }
                sign_out_route = { this.props.sign_out_route }
                sign_up_route = { this.props.sign_up_route }
                new_user_route={ this.props.new_user_route }  />
            )
          }}
        />
        

    {/* -----Bar Crawl Edit Route----- */}
    <Route path="/editbarcrawl" component={ BarCrawlEditP } />

    {/* -----User Dashboard Route----- */}
    <Route path="/userdashboard" component={ UserDashboardP } />

    {/* -----NotFound Route----- */}
    <Route component={ NotFound } />

  </Switch>
        <Footer 
          sign_in_route = { this.props.sign_in_route }
          sign_out_route = { this.props.sign_out_route }
          sign_up_route = { this.props.sign_up_route }
        />
          
</Router>

    );
  }
}

export default App
