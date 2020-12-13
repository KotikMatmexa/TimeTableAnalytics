import configureStore from 'redux-mock-store';

import * as dataAction from './dataAction';

const mockStore = configureStore();
const store = mockStore();

describe('dataAction', () => {
  beforeEach(() => { 
    store.clearActions();
  });

});

describe('test data load', () => {
  test('Dispatches the correct action and payload for loadData', () => {
    var expectedActions = [
      {
        'flag': 1,
        'type': 'LOAD_DATA',
      },
    ];

    store.dispatch(dataAction.loadData(1));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
  });
});
describe('test teacher load', () => {
  test('Dispatches the correct action and payload for loadTeachers', () => {
    var expectedActions = [
      {
        'teachers': 1,
        'type': 'LOAD_TEACHERS',
      },
    ];

    store.dispatch(dataAction.loadTeachers(1));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
  });
});
describe('test teacher set', () => {
  test('Dispatches the correct action and payload for setCurrentTeacher', () => {
    var expectedActions = [
      {
        'teacher': 1,
		'dateInterval': 2,
        'type': 'SET_TEACHER',
      },
    ];

    store.dispatch(dataAction.setCurrentTeacher(1, 2));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
	});
});

  
