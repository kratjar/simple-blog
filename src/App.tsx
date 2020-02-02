import React, { FC, lazy } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { Layout } from 'components/Layout'
import { WaitingComponent } from 'components/shared/WaitingComponent'
import { PATHS } from 'config/paths'

import 'i18n'

const Posts = lazy(() => import('pages/Posts'))
const Users = lazy(() => import('pages/Users'))

export const App: FC = () => (
  <Layout>
    <ErrorBoundary>
      <Switch>
        <Route path={PATHS.POSTS} component={WaitingComponent(Posts)} />
        <Route path={PATHS.USERS} component={WaitingComponent(Users)} />
        <Redirect to={PATHS.POSTS} />
      </Switch>
    </ErrorBoundary>
  </Layout>
)
