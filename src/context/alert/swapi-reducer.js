import {GET_DATA} from '../types'

const handlers = {
  [GET_DATA]: (state, { payload }) => ({...state, data: payload}),
  DEFAULT: state => state
}

export const swapiReducer = (state, action) => {
  console.log('reducer', state)
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
