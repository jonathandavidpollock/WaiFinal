import React from 'react'
import Router from './src/config/router.js'
import configureStore from './src/redux/store/store'
import Provider from 'react-redux'

const store = configureStore({
  user: 'Jonathan Pollock'
})

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
