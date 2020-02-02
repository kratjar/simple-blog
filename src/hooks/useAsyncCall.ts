import useSWR from 'swr'
import { stringify } from 'use-query-params'

interface Params {
  page?: number
  filter?: string
}

const extractTotalFromHeaders = (headers: any): number => {
  const { 'x-total-count': total } = headers

  return +total
}

const createSearch = ({ page, filter }: Params) => {
  const search = stringify({ _page: page, q: filter })

  if (search === '') {
    return search
  }

  return `?${search}`
}

export const useAsyncCall = (endpoint: string, params: Params = {}) => {
  const search = createSearch(params)

  const { data: response } = useSWR(`${endpoint}${search}`, {
    suspense: true,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  const { data, headers } = response
  const total = extractTotalFromHeaders(headers)

  return [data, total]
}
