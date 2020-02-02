import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { PATHS } from 'config/paths'

import { UserList } from 'pages/Users/UserList'
import { Detail } from 'pages/Users/Detail'

interface Address {
  street: string
  suite: string
  zipcode: string
  city: string
  geo: Location
}

interface Location {
  lat: string
  lng: string
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: string
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: Address
  company: Company
}

const Users: FC = () => (
  <Switch>
    <Route path={PATHS.USERS} exact component={UserList} />
    <Route path={`${PATHS.USERS}/:id`} component={Detail} />
    <Redirect to={PATHS.USERS} />
  </Switch>
)

export default Users
