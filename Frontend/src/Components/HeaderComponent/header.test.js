import React from 'react';
import HeaderComponent from './header';
import { shallow } from 'enzyme'

describe("[UNIT] Testing the Header component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HeaderComponent />)
  })

  describe("Component validation", () => {    
    it('header says the correct title', () => {
      expect(wrapper.find("h2").text()).toContain("Аналитика")       
    })
  })
})