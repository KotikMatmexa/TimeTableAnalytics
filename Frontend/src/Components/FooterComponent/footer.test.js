import React from 'react';
import FooterComponent from './footer';
import { shallow } from 'enzyme'

describe("[UNIT] Testing the Footer component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<FooterComponent />)
  })

  describe("Component validation", () => {    
    it('header says footer', () => {
      expect(wrapper.find("h6").text()).toContain("footer")       
    })
  })
})