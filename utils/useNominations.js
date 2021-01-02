import { useState, useEffect } from 'react'


// Hook to manage nominations of the user
// To save and retrive the list of nominations from the localStorage
export const useNominations = () => {

  const [nominations, setNominations] = useState([]) 

  // Firsly, check if there are nominations saved in localStorage
  // If yes, load it and save then to the state
  useEffect(() => {

    if (localStorage.getItem("shopify-challenge-nominations")) {
      setNominations(JSON.parse(localStorage.getItem("shopify-challenge-nominations")))
    }

  }, [])

  // If nominations are changed, save it to localStorage
  useEffect(() => {

    localStorage.setItem("shopify-challenge-nominations", JSON.stringify(nominations))

  }, [nominations])

  return { nominations, setNominations }

}