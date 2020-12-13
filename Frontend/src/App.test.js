import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe("[UNIT] Testing the App", () => {
  let wrapper
  
  describe("Component validation", () => {    
    it('contains App', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.text()).toMatch("");    
    })
  })
})

