import React, { FC, lazy } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { Layout } from 'components/Layout'
import { WaitingComponent } from 'components/shared/WaitingComponent'

const Posts = lazy(() => import('pages/Posts'))
const Users = lazy(() => import('pages/Users'))

export const App: FC = () => (
  <Layout>
    <ErrorBoundary>
      <Switch>
        <Route path={'/posts'} component={WaitingComponent(Posts)} />
        <Route path={'/users'} component={WaitingComponent(Users)} />
        <Redirect to={'/posts'} />
      </Switch>
    </ErrorBoundary>
  </Layout>
)
