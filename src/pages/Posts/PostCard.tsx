import React, { FC } from 'react'

import { Card } from 'components/shared/Card'
import { Paragraph, Title, Text } from 'components/shared/Typography'
import { Link } from 'components/shared/Link'
import { Post } from 'pages/Posts'

interface Props {
  post: Post
  linkToDetail?: boolean
  linkToAuthor?: boolean
}

export const PostCard: FC<Props> = ({ post, linkToDetail, linkToAuthor }) => {
  const { id, title, body, userId } = post

  return (
    <Card>
      <Title level={4}>{title}</Title>
      <Paragraph>{body}</Paragraph>

      {linkToDetail && (
        <div>
          <Link to={`/posts/${id}`}>
            <Text underline>See detail</Text>
          </Link>
        </div>
      )}

      {linkToAuthor && (
        <Link to={`/users/${userId}`}>
          <Text underline>See author detail</Text>
        </Link>
      )}
    </Card>
  )
}
