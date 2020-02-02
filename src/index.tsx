import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { SWRConfig } from 'swr'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'

import { App } from 'App'
import { fetcher } from 'utils/fetcher'

ReactDOM.render(
  <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <App />
      </QueryParamProvider>
    </BrowserRouter>
  </SWRConfig>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
