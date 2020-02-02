import { useQueryParam, NumberParam } from 'use-query-params'

export const usePagination = () => {
  const [page = 1, setPage] = useQueryParam('page', NumberParam)

  const handlePageChange = (newPage: number) => setPage(newPage, 'pushIn')

  return { page, handlePageChange }
}
