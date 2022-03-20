import { fetcher } from './fetcher'

type ResponseType = {
  message: string
  result: {
    boundaryYear: number
    data: {
      label: string
      data: {
        year: number
        value: number
        rate?: number
      }[]
    }[]
  }
}

export const fechPopuration = async (
  prefCode: number
): Promise<Popuration[]> => {
  const response = await fetcher<ResponseType>(
    `population/composition/perYear?cityCode=-&prefCode=${prefCode}`
  )

  if (response.result.data[0].label !== '総人口') {
    throw new Error('データが取得できませんでした')
  }

  console.log(response.result.data[0].data)

  return response.result.data[0].data
}
