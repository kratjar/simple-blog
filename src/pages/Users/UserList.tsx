import React, { FC } from 'react'

import { List } from 'components/shared/List'
import { User } from 'pages/Users'
import { UserCard } from 'pages/Users/UserCard'

const UserList: FC = () => (
  <List
    searchTitle="Search"
    listTitle="Users"
    endpoint="/users"
    shouldUseFilter
    shouldUsePage
    component={(user: User) => <UserCard key={user.id} user={user} linkToDetail />}
  />
)

export default UserList
