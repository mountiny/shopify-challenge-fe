import { api } from "./api";
import useSWR from 'swr'

export const getImages = (search = null) => {

  const API_URL = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&`

  const {
    data: { data: data } = {},
    isValidating
  } = useSWR(`${API_URL}${search ? `&t=${search}` : ''}`, api.get)

  return {data, isValidating}

}