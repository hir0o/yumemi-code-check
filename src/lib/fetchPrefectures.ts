import { fetcher } from './fetcher'

type ResponseType = {
  message: string
  result: Prefecture[]
}

export const fetchPrefectures = async (): Promise<ResponseType> => {
  const response = await fetcher('prefectures')
  return response as ResponseType
}
