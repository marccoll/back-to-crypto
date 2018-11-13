import { loadHistory, resetHistory } from '../actions/history'
import moxios from 'moxios'
import thunk from 'redux-thunk'

import configureStore from "redux-mock-store";

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

beforeEach(() => moxios.install())
afterEach(() => moxios.uninstall())

describe('Actions test', () => {
  it('get bpi history', () => {
    const store = mockStore({ history: [] });

    moxios.stubRequest(/https:\/\/api.coindesk.com\/v1\/bpi\/historical\/close.json*/, {
      status: 200,
      response: {
        bpi: [
          { "2018-10-17": 6514.6413 },
          { "2018-10-18": 6450.785 },
          { "2018-10-19": 6418.8525 },
          { "2018-10-20": 6455.485 }
        ]
      }
    })

    return store.dispatch(loadHistory())
      .then(() => {
        const actions = store.getActions()
        expect(actions.length).toBe(1)
      })

    expect(actions[0].type.toString()).toBe(Symbol('LOAD_HISTORY_SUCCESS').toString())
    expect(actions[0].payload).not.toBeNull();
    expect(actions[0].payload.length).toBe(4);
    
  })

  it('resetHistory action', () => {
    const store = mockStore()

    store.dispatch(resetHistory())

    const actions = store.getActions()
    expect(actions.length).toBe(1)
    expect(actions[0].type.toString()).toBe(Symbol('RESET_HISTORY').toString())
  })
})
