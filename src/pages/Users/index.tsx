import React, { FC, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { WaitingComponent } from 'components/shared/WaitingComponent'

const List = lazy(() => import('pages/Users/UserList'))
const Detail = lazy(() => import('pages/Users/Detail'))

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
    <Route path={'/users'} exact component={WaitingComponent(List)} />
    <Route path={'/users/:id'} component={WaitingComponent(Detail)} />
    <Redirect to={'/users'} />
  </Switch>
)

export default Users
