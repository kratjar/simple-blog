import useSWR from 'swr'
import { useHistory, useLocation } from 'react-router-dom'

const extractPageFromUrl = (search: string): number => {
  const urlParams = new URLSearchParams(search)
  const page = urlParams.get('page') || 1

  return +page
}

const extractTotalFromHeaders = (headers: any): number => {
  const { 'x-total-count': count } = headers
  const total = +count

  return total
}

export const usePaginatedSWR = (endpoint: string) => {
  const history = useHistory()
  const { search } = useLocation()

  const page = extractPageFromUrl(search)

  const { data: response } = useSWR(`${endpoint}?_page=${page}`, {
    suspense: true,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  const changePage = (newPage: number) => {
    history.push({ search: `?page=${newPage}` })
  }

  const { data, headers } = response
  const total = extractTotalFromHeaders(headers)

  return { data, total, page, changePage }
}
