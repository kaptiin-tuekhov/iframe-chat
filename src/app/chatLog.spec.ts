import { ADD_MESSAGE, chatLogReducer } from './chatLog';

describe('chatLogReducer', () => {
  it('returns new states with added chat messages', () => {
    let action = {
      type: ADD_MESSAGE,
      payload: {
        from: 'iframe2',
        message: 'Hi!'
      }
    };
    let stateBefore = [{
      from: 'iframe1',
      message: 'Hello!'
    }];
    let stateAfter = [{
      from: 'iframe1',
      message: 'Hello!'
    }, {
      from: 'iframe2',
      message: 'Hi!'
    }];
    expect(chatLogReducer(stateBefore, action)).toEqual(stateAfter);
    expect(stateBefore).toBe(stateBefore);
  });
  it('returns state if action is invalid', () => {
    let action = {
      type: 'SUPER_MESSAGE',
      payload: {
        from: 'iframe2',
        message: 'asdl;fkjasdf'
      }
    };
    let stateBefore = [{
      from: 'iframe1',
      message: 'as;ldkfjasdf'
    }];
    expect(chatLogReducer(stateBefore, action)).toBe(stateBefore);
  });
});
