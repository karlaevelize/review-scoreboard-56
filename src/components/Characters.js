import axios from "axios"
import { useState, useEffect } from "react"

export default function Characters() {

  const [ characters, setCharacters ] = useState()

  //Step 1. Import Axios
  //Step 2. Write an async function to fetch the data
  //Step 3. Make a request with axios
  //Step 4. Import useEffect and call the function
  //Step 5. Console.log the response
  //Step 6. Declare a variable with local state to hold the data you fetched, ex: const [ characters, setCharacters ] = useState()
  //Step 7. Put the data in local state using the setter, ex:  setCharacters(response.data.rows)
  //STep 8. Map over the data

  async function getData(){
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/got/characters")
    console.log("response", response)
    setCharacters(response.data.rows)
  }
  
  // getData() //this ends in an infinite loop
  console.log(characters)

  useEffect(() => { //use Effect only runs once, when the page renderes
    getData()
  }, [])

  return (
    <div>
      <h1>Characters list</h1>
      {!characters 
        //conditional rendering, in case something unexpected happens, like: slow internet, API breaks 
        ? "Loading" 
        : characters.map(char => {
          return (
            <div>
              <h3>{char.name}</h3>
              <img style={{width: 200}} src={char.imageUrl} />
            </div>
          )
        })}
    </div>
  )
}