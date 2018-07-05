import { createStore } from 'redux'
import allReducers from '../reducers'

 
export default function configureStore(initialState) {
           
  const store = createStore(allReducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__
          && window.__REDUX_DEVTOOLS_EXTENSION__())
 
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
 
  return store
}