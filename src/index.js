import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import Routes from './routes'
import store from './redux/store'

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
)
