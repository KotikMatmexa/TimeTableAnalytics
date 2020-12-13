/*
import React from 'react';
import './menu.css'
import MenuComponent from './menu';
import { shallow } from 'enzyme'
import sinon from 'sinon'
console.error = jest.fn()

describe("[UNIT] Testing the Menu component", () => {

  console.error = jest.fn()
  describe("Component validation", () => {    
    it('simulates click events', () => {
		const onButtonClick = sinon.spy();
		const wrapper = shallow(<MenuComponent onClick={onButtonClick} />);
		wrapper.find('btn-group-vertical').simulate('click');
		sinon.assert.called(onButtonClick);
		//expect(wrapper.find("btn-group-vertical")).to.have.length(3);    
    })
  })
})
*/