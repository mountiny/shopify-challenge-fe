import React, { useState, useEffect, useRef } from 'react';
import Banner from '../components/Banner';
import { api } from '../utils/api';
import { useNominations } from '../utils/useNominations';
import useSWR from 'swr';
import LoadingDots from '../components/LoadingDots';
import Heart from'../components/icons/Heart';


export default function Index() {

  let API_URL = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}`

  const [search, setSearch] = useState('')
  const [showBanner, setShowBanner] = useState(false)
  const searchBar = useRef()

  const { nominations, setNominations } = useNominations()

  const MOVIES_ONLY = true
  const INCLUDE_YEAR = true

  console.log('Nominations: ', nominations)
  
  const {
    data: {data: movies} = {},
    isValidating
  } = useSWR(search !== '' ? 
    `${API_URL}&s=${search}${MOVIES_ONLY ? "&type=movie": ''}` : null, api.get, {
      revalidateOnFocus: false
    })


  useEffect(() => {

    if (showBanner) {

      const bannerInterval = setInterval(() => {
        setShowBanner(false)
      }, 5000);

      return () => clearInterval(bannerInterval);
    }

  }, [showBanner])
  
  console.log('Data: ', movies)

  // Method to generate the list of movies
  const listMovies = () => {

    if (!movies || movies.Response === "False") return null

    const renderedMovies = movies.Search.map((mov, key) => (
      <div 
        key={mov.imdbID} 
        className={`w-full py-4 px-4 flex justify-between items-center ${key % 2 && 'bg-accents-1'}`}
        data-id={mov.imdbID}>
        <div className="font-bold text-base">
          {mov.Title}&nbsp;({mov.Year})
        </div>
        <div className="self-end">
          {
            isNominated(mov.imdbID) ? (
              <button role="button" className="cursor-pointer px-2 py-2 bg-transparent" onClick={() => handleNominationDelete(mov.imdbID)}>
                <Heart 
                  fill={'var(--pink)'}
                  />
              </button>
            ) : (
              <button
                role="button"
                onClick={() => handleMovieNomination(mov.imdbID)}
                disabled={isNominated(mov.imdbID)}
                className="rounded-lg text-sm bg-primary-2 font-medium text-primary px-4 py-2 transition-colors duration-200 hover:bg-pink"
                >
                Nominate
              </button>
            )
          }
        </div>
      </div>
    ))

    return renderedMovies
  }


  // Method to generate the list of movies
  const listNominatedMovies = () => {

    if (nominations.length === 0) return null

    const renderedMovies = nominations.map((mov, key) => (
      <div 
        key={mov.imdbID} 
        className={`w-full py-4 px-4 flex justify-between items-center ${key % 2 && 'bg-accents-1'}`}
        data-id={mov.imdbID}>
        <div className="font-bold text-base">
          {mov.Title}&nbsp;({mov.Year})
        </div>
        <div className="self-end">
          <button role="button" className="cursor-pointer px-2 py-2 bg-transparent" onClick={() => handleNominationDelete(mov.imdbID)}>
            <Heart 
              fill={'var(--pink)'}
              />
          </button>
        </div>
      </div>
    ))

    return renderedMovies
  }

  // Method to add movie to the nomination list
  const handleMovieNomination = (id) => {
    
    
    // If this is the fifth nominated movie and the banner is not show => show the banner
    if ((nominations.length === 4 || nominations.length === 5) && !showBanner) {
      setShowBanner(true)
    }

    if (nominations.length === 5) return

    const nominatedMovie = movies.Search.filter(mov => mov.imdbID === id)[0]


    setNominations((_nominations) => [..._nominations, nominatedMovie])

  }

  // Method to delte movie from the nomination list
  const handleNominationDelete = (id) => {

    const temp_nominations = nominations.filter(mov => mov.imdbID !== id)

    setNominations(temp_nominations)
  }

  // Helper method to find out if given movie is nominated
  const isNominated = (id) => {
    return nominations.filter(mov => mov.imdbID === id).length !== 0
  }


  return (
    <div>

      <Banner 
        show={showBanner} 
        onClick={() => setShowBanner(false)}>
        You have used all 5 of your nominations!<br />
        <span className="text-xs pt-4">
          You can remove a nomination by clicking on the heart.
        </span>
      </Banner>

      <div className='py-20'>
        <h2 className='text-1xl md:text-2xl lg:text-3xl font-bold text-center mb-6'>
          Shopify Frontend Developer Intern
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12'>
          Code Challenge - The Shoppies
        </h1>

        <div className='w-full mx-auto px-4 max-w-4xl mt-16'>
          <div className='w-full flex flex-col items-start'>
            <label htmlFor='search' className='mb-6 text-xl font-bold'>Movie title</label>
            <input 
              type='text'
              name='search'
              id='search'
              ref={ ref => searchBar.current = ref}
              className='bg-accents-0 w-full px-4 py-4 rounded-lg'
              value={search}
              placeholder={'Titanic...'}
              onChange={({target}) => setSearch(target.value)}
              />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex flex-col ">
              <div className="mb-4">
                <h3 className="text-xl font-bold py-2">
                  {
                    search === '' ? (
                      "Type in the box above"
                    ) : (
                      <>
                        Results for "{search}"
                      </>
                    )
                  }
                  
                </h3>
              </div>
              <div className="border-2 border-white rounded-lg bg-accents-0">
                {
                  isValidating ? (
                    <div className="flex w-full h-16 justify-center items-center">
                      <LoadingDots />
                    </div>
                  ) : movies ? 
                      
                      movies.Response === "False" ? (
                        <div className="w-full text-base px-4 h-16 font-medium text-center flex items-center cursor-pointer"
                          onClick={() => searchBar.current.focus()}>
                          {movies.Error}
                        </div>
                      )
                      : (

                      <div>
                        {listMovies()}
                      </div>

                  ) : (

                    <div className="w-full text-base h-16 px-4 font-medium text-center flex items-center cursor-pointer"
                      onClick={() => searchBar.current.focus()}>
                      Nothing to show.
                    </div>
                  )

                }
              </div> 
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold py-2">
                  Nominations
                </h3>
                
                <button
                  role="button"
                  onClick={() => setNominations([])}
                  className="rounded-lg text-sm font-medium text-primary px-4 py-2 transition-colors duration-200 bg-pink hover:bg-red disabled:bg-accents-0 disabled:cursor-not-allowed "
                  disabled={nominations.length === 0}
                  >
                  Remove all
                </button>
                  
              </div>
              <div className="border-2 border-white rounded-lg bg-accents-0">
                {
                  nominations.length === 0 ? (
                    <div className="w-full text-base h-16 px-4 font-medium text-center flex items-center">
                      Nominate up to 5 movies!
                    </div>
                  ) : (

                    <div>
                      {listNominatedMovies()}
                    </div>
                  )
                }
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
