import { delay } from 'dva/saga'

export default {
  namespace: 'counter',
  state: 0,
  effects: {
    * increment({ payload }, { put }) {
      yield put({ type: 'incrementReducer' })
    },
    * decrement({ payload }, { put }) {
      yield put({ type: 'decrementReducer' })
    },
    * incrementIfOdd({ payload }, { put }) {
      yield put({ type: 'incrementIfOddReducer' })
    },
    * incrementAsync({ payload }, { call, put }) {
      yield call(delay, 1000)
      yield put({ type: 'increment' })
    },
  },

  reducers: {
    incrementReducer(state, action) {
      return state + 1
    },
    decrementReducer(state, action) {
      return state - 1
    },
    incrementIfOddReducer(state, action) {
      return (state % 2 !== 0) ? state + 1 : state
    },
  },
}
