import React, { FC, Fragment } from 'react'

import { Card } from 'components/shared/Card'
import { Pagination } from 'components/shared/Pagination'
import { usePaginatedSWR } from 'hooks/usePaginatedSWR'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const Home: FC = () => {
  const { data, total, page, changePage } = usePaginatedSWR('/posts')

  const posts: Post[] = data

  return (
    <Fragment>
      {posts.map(({ title, body }) => (
        <Card>
          <div>{title}</div>
          <div>{body}</div>
        </Card>
      ))}
      <Pagination total={total} defaultCurrent={page} onChange={changePage} />
    </Fragment>
  )
}

export default Home
