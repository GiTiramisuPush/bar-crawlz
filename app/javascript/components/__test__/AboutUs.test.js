// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16' 
 // Imports in the component we are going to be testing. 
import AboutUs from '../pages/AboutUs'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() }) 



it('show h1 tag contents', () => {
    const show = shallow(<AboutUs />)
    expect(show.find('h1').text()).toEqual('About the App')
  })

it('show p tag content', () => {
  const show = shallow(<AboutUs />)
  console.log(show.debug())
  expect(show.find("#aboutUs").text()).toEqual('We created this app as a way to more easily plan out a night on the town. We know how long it can take to sift through ratings, restaurants, and bars on Google Maps or Yelp to figure out which look the most fun for a night out.V1 makes it easy to find and save bars to a list.V2 will include Leaflet maps to discover the distances between bars and more efficiently plan your perfect barcrawl.This full stack React-in-Rails App was created by Summer Cook, Filippo Venturini, and Ryan Sarll. It uses information from the Yelp Fusion API, and 3 data tables in rails includes Rails Devise for its users. It also uses Reactstrap for consistent styling.We are students at LEARN Academy, a Full-Stack Software Development Bootcamp based in San Diego, CA.')
})