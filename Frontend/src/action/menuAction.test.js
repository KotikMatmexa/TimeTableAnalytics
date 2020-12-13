import configureStore from 'redux-mock-store';

import * as menuAction from './menuAction';

const mockStore = configureStore();
const store = mockStore();

describe('menuAction', () => {
  beforeEach(() => { 
    store.clearActions();
  });

});

describe('test getLine', () => {
  test('Dispatches the correct action and payload for getLine', () => {
    var expectedActions = [
      {
        'index': 1,
        'type': 'CHANGE_MENU_INDEX',
      },
    ];

    store.dispatch(menuAction.getLine(1));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
  });
});
describe('test getPrevLine', () => {
  test('Dispatches the correct action and payload for getPrevLine', () => {
    var expectedActions = [
      {
        'index': 1,
        'type': 'GET_PREV_INDEX',
      },
    ];

    store.dispatch(menuAction.getPrevLine(1));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
	});
});