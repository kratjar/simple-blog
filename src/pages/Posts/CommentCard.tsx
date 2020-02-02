import React, { FC } from 'react'

import { Card } from 'components/shared/Card'
import { Comment } from 'pages/Posts/Comments'
import { Paragraph, Title, Text } from 'components/shared/Typography'

interface Props {
  comment: Comment
}

export const CommentCard: FC<Props> = ({ comment }) => {
  const { name, email, body } = comment
  return (
    <Card>
      <Title level={4}>{name}</Title>
      <Paragraph type="secondary">{email}</Paragraph>
      <Text>{body}</Text>
    </Card>
  )
}
