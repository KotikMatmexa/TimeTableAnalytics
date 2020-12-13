import {loadDataReducer, teachersReducer, teacherReducer} from './dataReducer';

describe('dataReducer', () => {
	describe('LOAD_DATA', () => {
	  test('is correct', () => {
		const action = { type: 'dummy_action', flag: 1 };
		const initialState = false;

		expect(loadDataReducer(false, action)).toEqual(initialState);
	  });
	});
	describe('LOAD_DATA', () => {
	  test('is correct', () => {
		const action = { type: "LOAD_DATA", flag: 1 };
		const expectedState = 1;

		expect(loadDataReducer(false, action)).toEqual(expectedState);
	  });
	});
	
	describe('LOAD_TEACHERS', () => {
	  test('is correct', () => {
		const action = { type: "LOAD_TEACHERS", teachers: 1 };
		const expectedState = 1;

		expect(teachersReducer(false, action)).toEqual(expectedState);
	  });
	});
	
});