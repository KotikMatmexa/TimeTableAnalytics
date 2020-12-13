import React from 'react';
import ErrorComponent from './error';
import { shallow } from 'enzyme'

describe("[UNIT] Testing the Error component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ErrorComponent />)
  })

  describe("Component validation", () => {    
    it('button group contains at least one header', () => {
      expect(wrapper.contains('error--component')).toBe(false);    
    })
  })
})