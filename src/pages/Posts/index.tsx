import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { PATHS } from 'config/paths'

import { PostList } from 'pages/Posts/PostList'
import { Detail } from 'pages/Posts/Detail'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const Users: FC = () => (
  <Switch>
    <Route path={PATHS.POSTS} exact component={PostList} />
    <Route path={`${PATHS.POSTS}/:id`} component={Detail} />
    <Redirect to={PATHS.POSTS} />
  </Switch>
)

export default Users
