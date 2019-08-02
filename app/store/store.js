import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer, rootSaga } from '@models/Demo/counter'
import conunter2 from '@models/Demo/conunter2'

console.log(conunter2)
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(
  sagaMiddleware,
))

sagaMiddleware.run(rootSaga)

export default store
