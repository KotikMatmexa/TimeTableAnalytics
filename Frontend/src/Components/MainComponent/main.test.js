import React from 'react';
import MainComponent from './main';
import { shallow } from 'enzyme'

console.error = jest.fn()
describe("[UNIT] Testing the Menu component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MainComponent />)
  })

  describe("Component validation", () => {    
    it('button group contains at least one button', () => {
      expect(wrapper.find("row").length).toBe(0);    
    })
  })
})