import React, { FC } from 'react'

import { List } from 'components/shared/List'
import { CommentCard } from 'pages/Posts/CommentCard'

export interface Comment {
  id: number
  name: string
  email: string
  body: string
}

interface Props {
  postId: string
}

export const Comments: FC<Props> = ({ postId }) => (
  <List
    listTitle="Comments"
    endpoint={`/comments?postId=${postId}`}
    component={(comment: Comment) => <CommentCard key={comment.id} comment={comment} />}
  />
)
