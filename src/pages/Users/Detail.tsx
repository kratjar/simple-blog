import React, { FC } from 'react'

import { Card } from 'components/shared/Card'
import { User } from 'pages/Users'
import { useParams } from 'react-router-dom'
import { useAsyncCall } from 'hooks/useAsyncCall'

const Detail: FC = () => {
  const { id } = useParams()
  const [data] = useAsyncCall(`/users/${id}`)

  const { name, username, email } = data as User

  return (
    <Card>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </Card>
  )
}

export default Detail
