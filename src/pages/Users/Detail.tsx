import React, { FC, Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import { User } from 'pages/Users'
import { useParams } from 'react-router-dom'
import { useAsyncCall } from 'hooks/useAsyncCall'
import { UserCard } from 'pages/Users/UserCard'
import { Posts } from 'pages/Users/Posts'
import { Title } from 'components/shared/Typography'
import { ENDPOINTS } from 'config/endpoints'

export const Detail: FC = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const [data] = useAsyncCall(`${ENDPOINTS.USERS}/${id}`)

  const user = data as User

  return (
    <Fragment>
      <Title level={3} marginTop>
        {t('user-detail')}
      </Title>
      <UserCard user={user} extendedInfo />
      <Posts userId={user.id} />
    </Fragment>
  )
}
