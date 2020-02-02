import React, { FC } from 'react'

import { User } from 'pages/Users'
import { useParams } from 'react-router-dom'
import { useAsyncCall } from 'hooks/useAsyncCall'
import { UserCard } from 'pages/Users/UserCard'

const Detail: FC = () => {
  const { id } = useParams()
  const [data] = useAsyncCall(`/users/${id}`)

  const user = data as User

  return <UserCard user={user} extendedInfo />
}

export default Detail
