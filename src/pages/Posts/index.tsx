import React, { FC, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { WaitingComponent } from 'components/shared/WaitingComponent'

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
    <Route path={'/posts'} exact component={WaitingComponent(List)} />
    <Route path={'/posts/:id'} component={WaitingComponent(Detail)} />
    <Redirect to={'/posts'} />
  </Switch>
)

export default Users
