import React, { FC, Fragment } from 'react'

import { Card } from 'components/shared/Card'
import { Input } from 'components/shared/Input'
import { Pagination } from 'components/shared/Pagination'
import { useAsyncCall } from 'hooks/useAsyncCall'
import { usePagination } from 'hooks/usePagination'
import { useFilter } from 'hooks/useFilter'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const Home: FC = () => {
  const { page, handlePageChange } = usePagination()
  const { filter, handleFilterChange } = useFilter()

  const [data, total] = useAsyncCall('/posts', { page, filter })

  const posts: Post[] = data

  return (
    <Fragment>
      <Input defaultValue={filter} onPressEnter={handleFilterChange} />
      {posts.map(({ title, body }) => (
        <Card>
          <div>{title}</div>
          <div>{body}</div>
        </Card>
      ))}
      <Pagination total={total} current={page} onChange={handlePageChange} hideOnSinglePage />
    </Fragment>
  )
}

export default Home
