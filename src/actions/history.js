import axios from 'axios'
import dayjs from 'dayjs'

export const LOAD_HISTORY_SUCCESS = Symbol('LOAD_HISTORY_SUCCESS')
export const LOAD_HISTORY_ERROR = Symbol('LOAD_HISTORY_ERROR')

export const loadHistory = startDate => {
  return dispatch => {
    const today = dayjs().format('YYYY-MM-DD')

    return axios
      .get(` https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${today}`)
      .then(response => {
        dispatch({
          type: LOAD_HISTORY_SUCCESS,
          payload: response.data.bpi
        })
      })
      .catch(error => {
        dispatch({type: LOAD_HISTORY_ERROR})
        throw error;
      });
  };
};

export const RESET_HISTORY = Symbol('RESET_HISTORY')
export const resetHistory = () => ({
  type: RESET_HISTORY
})
