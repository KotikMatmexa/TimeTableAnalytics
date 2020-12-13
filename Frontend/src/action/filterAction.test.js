import configureStore from 'redux-mock-store';

import * as filterAction from './filterAction';

const mockStore = configureStore();
const store = mockStore();

describe('filterAction', () => {
  beforeEach(() => { 
    store.clearActions();
  });

});

describe('test getFilterType', () => {
  test('Dispatches the correct action and payload for getFilterType', () => {
    var expectedActions = [
      {
        'newType': 1,
        'type': 'GET_FILTER_TYPE',
      },
    ];

    store.dispatch(filterAction.getFilterType(1));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
  });
});

describe('test setFaculty', () => {
  test('Dispatches the correct action and payload for setFaculty', () => {
    var expectedActions = [
      {
        'faculty': 1,
        'type': 'SET_CURRENT_FACULTY',
      },
    ];

    store.dispatch(filterAction.setFaculty(1));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
  });
});

describe('test setFilteredTeachersListByLetter', () => {
  test('Dispatches the correct action and payload for setFilteredTeachersListByLetter', () => {
    var expectedActions = [
      {
        'letter': 1,
		'list': 2,
        'type': 'SET_FILTERED_TEACHERS_LIST_BY_LETTER',
      },
    ];

    store.dispatch(filterAction.setFilteredTeachersListByLetter(1, 2));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
  });
});