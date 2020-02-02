import React, { FC, Fragment } from 'react'

import { Post } from 'pages/Posts'
import { Comments } from 'pages/Posts/Comments'
import { useParams } from 'react-router-dom'
import { useAsyncCall } from 'hooks/useAsyncCall'
import { PostCard } from 'pages/Posts/PostCard'
import { Title } from 'components/shared/Typography'

const Detail: FC = () => {
  const { id } = useParams()
  const [data] = useAsyncCall(`/posts/${id}`)

  const post = data as Post

  return (
    <Fragment>
      <Title level={3} marginTop>
        Post detail
      </Title>
      <PostCard post={post} linkToAuthor />
      <Comments postId={id!} />
    </Fragment>
  )
}

export default Detail