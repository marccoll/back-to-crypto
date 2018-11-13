import * as ActionType from "../actions/history";

let defaultState = {
  stats: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionType.LOAD_HISTORY_SUCCESS:
      return {
        stats: action.payload
      }
    
    case ActionType.LOAD_HISTORY_ERROR: 
      window.alert('Something went wrong, please try it again later :)')
      return state
    
    case ActionType.RESET_HISTORY:
      return defaultState

    default:
      return state;
  }
}
