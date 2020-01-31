import React, { FC } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { Layout } from 'components/Layout'
import Home from 'pages/Home'

export const App: FC = () => (
  <Layout>
    <ErrorBoundary>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Redirect to={'/'} />
      </Switch>
    </ErrorBoundary>
  </Layout>
)
