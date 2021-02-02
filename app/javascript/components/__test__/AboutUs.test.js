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



it('show renders content', () => {
    const show = shallow(<AboutUs />)
    expect(show.find('h1').text()).toEqual('About the App')
  })


// test('1 + 1 equals 2', () => {
//     expect(1 + 1).toBe(2);
//   });