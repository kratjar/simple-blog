import React, { FC, Fragment } from 'react'

import { User } from 'pages/Users'
import { useParams } from 'react-router-dom'
import { useAsyncCall } from 'hooks/useAsyncCall'
import { UserCard } from 'pages/Users/UserCard'
import { Posts } from 'pages/Users/Posts'
import { Title } from 'components/shared/Typography'

const Detail: FC = () => {
  const { id } = useParams()
  const [data] = useAsyncCall(`/users/${id}`)

  const user = data as User

  return (
    <Fragment>
      <Title level={3} marginTop>
        User detail
      </Title>
      <UserCard user={user} extendedInfo />
      <Posts userId={user.id} />
    </Fragment>
  )
}

export default Detail
