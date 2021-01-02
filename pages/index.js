import React, { useState, useEffect } from 'react'
import { getImages } from '../utils/movieService'
import Nav from '../components/Nav'
import { api } from '../utils/api';
import useSWR from 'swr'
import LoadingDots from '../components/LoadingDots'


export default function Index() {

  let API_URL = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}`

  const [search, setSearch] = useState('')

  const [results, setResults] = useState([])

  const MOVIES_ONLY = true
  const INCLUDE_YEAR = true
  
  
  const {
    data: {data: movies} = {},
    isValidating
  } = useSWR(search !== '' ? 
    `${API_URL}&s=${search}${MOVIES_ONLY ? "&type=movie": ''}` : null, api.get)
  
  console.log('Data: ', movies)


  return (
    <div>
      <Nav />
      <div className='py-20'>
        <h2 className='text-1xl md:text-2xl lg:text-3xl font-bold text-center mb-6'>
          Shopify Frontend Developer Intern
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12'>
          Code Challenge - The Shoppies
        </h1>

        <div className='w-full mx-auto px-4 max-w-4xl mt-16'>
          <div className='w-full flex flex-col items-start'>
            <label htmlFor='search' className='mb-4 text-xl font-bold'>Movie title</label>
            <input 
              type='text'
              name='search'
              id='search'
              className='bg-accents-0 w-full px-4 py-4 rounded-lg'
              value={search}
              placeholder={'Titanic...'}
              onChange={({target}) => setSearch(target.value)}
              />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Results for "{search}"
              </h3>
              <div className="border-2 border-white rounded-lg h-24">
                <LoadingDots />
              </div> 
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Nominations
              </h3>
              <div className="border-2 border-white rounded-lg h-24">

              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
