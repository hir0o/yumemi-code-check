import { fetcher } from './fetcher'

type ResponseType = {
  message: string
  result: Prefecture[]
}

export const fetchPrefectures = async (): Promise<Prefecture[]> => {
  const response = await fetcher<ResponseType>('prefectures')
  return response.result
}
