import { ADD_IFRAME, iframeReducer } from './iframes';

describe('iframeReducer', () => {
  it('returns new states with added iframes', () => {
    let action = {
      type: ADD_IFRAME,
      payload: 'iframe2'
    };
    let stateBefore = ['iframe1'];
    let stateAfter = ['iframe1', 'iframe2'];
    expect(iframeReducer(stateBefore, action)).toEqual(stateAfter);
    expect(stateBefore).toBe(stateBefore);
  });
  it('returns state if action is invalid', () => {
    let action = {
      type: 'INVALID_ACTION',
      payload: `shouldn't matter`
    };
    let stateBefore = ['iframe1'];
    expect(iframeReducer(stateBefore, action)).toBe(stateBefore);
  });
});
