import React, { Component }  from "react"

//Components
import Header from './components/Header'
import Footer from './components/Footer'

//Pages
import AboutUs from './pages/AboutUs'
import BarCrawlEditP from './pages/BarCrawlEditP'
import BarIndex from './pages/BarIndex'
import BarShow from './pages/BarShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserDashboardP from './pages/UserDashboardP'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render () {
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
    <Route exact path="/" component={ Home } />

    {/* -----About Us Page Route----- */}
    <Route path="/about" component={ AboutUs } />

    {/* -----Bar Index (Search Page) Route----- */}
    <Route path="/barindex" component={ BarIndex } />

    {/* -----Bar Show Route----- */}
    <Route path="/barshow" component={ BarShow } />

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
          sign_up_route = { this.props.sign_up_route }/>
          
</Router>

    );
  }
}

export default App
