import React, { FC, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { WaitingComponent } from 'components/shared/WaitingComponent'
import { PATHS } from 'config/paths'

const List = lazy(() => import('pages/Posts/PostList'))
const Detail = lazy(() => import('pages/Posts/Detail'))

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const Users: FC = () => (
  <Switch>
    <Route path={PATHS.POSTS} exact component={WaitingComponent(List)} />
    <Route path={`${PATHS.POSTS}/:id`} component={WaitingComponent(Detail)} />
    <Redirect to={PATHS.POSTS} />
  </Switch>
)

export default Users
