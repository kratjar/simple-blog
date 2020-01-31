import React, { FC, lazy } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { Layout } from 'components/Layout'
import { WaitingComponent } from 'components/shared/WaitingComponent'

const Home = lazy(() => import('pages/Home'))

export const App: FC = () => (
  <Layout>
    <ErrorBoundary>
      <Switch>
        <Route path={'/'} exact component={WaitingComponent(Home)} />
        <Redirect to={'/'} />
      </Switch>
    </ErrorBoundary>
  </Layout>
)
