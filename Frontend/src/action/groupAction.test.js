import configureStore from 'redux-mock-store';

import * as groupAction from './groupAction';

const mockStore = configureStore();
const store = mockStore();

describe('groupAction', () => {
  beforeEach(() => { 
    store.clearActions();
  });

});

describe('test loadGroups', () => {
  test('Dispatches the correct action and payload for loadGroups', () => {
    var expectedActions = [
      {
        'faculty': 1,
        'type': 'LOAD_GROUPS_LIST',
      },
    ];

    store.dispatch(groupAction.loadGroups(1));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
  });
});
describe('test setActiveGroup', () => {
  test('Dispatches the correct action and payload for setActiveGroup', () => {
    var expectedActions = [
      {
        'faculty': 1,
		'group': 2,
        'type': 'LOAD_GROUP_DATA',
      },
    ];

    store.dispatch(groupAction.setActiveGroup(1, 2));
    expect([store.getActions().slice(-1)[0]] ).toEqual(expectedActions);
	});
});