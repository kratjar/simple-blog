import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { List } from 'components/shared/List'
import { User } from 'pages/Users'
import { UserCard } from 'pages/Users/UserCard'
import { ENDPOINTS } from 'config/endpoints'

const UserList: FC = () => {
  const { t } = useTranslation()

  return (
    <List
      searchTitle={t('search')}
      listTitle={t('users')}
      endpoint={ENDPOINTS.USERS}
      shouldUseFilter
      shouldUsePage
      component={(user: User) => <UserCard key={user.id} user={user} linkToDetail />}
    />
  )
}

export default UserList
