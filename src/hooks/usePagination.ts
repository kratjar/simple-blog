import { useQueryParam, NumberParam } from 'use-query-params'

import { PARAMS } from 'config/url'

export const usePagination = () => {
  const [page = 1, setPage] = useQueryParam(PARAMS.PAGE, NumberParam)

  const handlePageChange = (newPage: number) => setPage(newPage, 'pushIn')

  return { page, handlePageChange }
}
