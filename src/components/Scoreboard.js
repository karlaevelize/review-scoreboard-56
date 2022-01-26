import { useState } from "react"
import Player from "./Player"
import AddPlayerForm from "./AddPlayerForm"

const compareScore = (playerA, playerB) => {
  return playerB.score - playerA.score
}

const compareName = (playerA, playerB) => {
  return playerA.name.localeCompare(playerB.name)
}

// TO DO
//1. Create a card component for player
//2. Make it possible to sort players by score and name

export default function Scoreboard(){

  const [ players, setPlayers ] = useState([
    { id: 1, name: "Sam", score: 30 },
    { id: 2, name: "Frodo", score: 10 },
    { id: 3, name: "Bilbo", score: 40 },
    { id: 4, name: "Merry & Pippin", score: 20 },
  ])

  //Steps for sorting
  // Step 1. Create a selector with the <select> tag
  // Step 2. Add <option> tags and give each option a value (this way we can track the selected one)
  // Step 3. Write a function to console.log the selected value
  // Step 4. Pass the function to an onChange in the select tag (test it!, see if the console.log is right)
  // Step 5. Create a local state to hold the selected value
  // Step 6. Inside the function, use the setter to put the selected value in local state
  // Step 7. Write a const that decides the sorting method
  // Step 8. Map over that new const instead of [players]

  const [ sortBy, setSortBy ] = useState("name")

  const sortedPlayers = sortBy === "name"
    ? [...players].sort(compareName)
    : [...players].sort(compareScore)

  const select = (event) => {
    // console.log(event.target.value)
    setSortBy(event.target.value)
  }

  //Steps for Incremeting Score => Write a map that checks if that's the id we need, if so, we update, else not
  
  const incrementScore = (id) => {
    console.log("id", id)
    const newPlayersArray = players.map(player => {
      if (player.id === id){
        return {
          ...player, score: player.score + 1
        }
      } else {
        return player
      }
    })
    console.log("new array", newPlayersArray)
    setPlayers(newPlayersArray)
  }

  //Write a function to add a player to the array
  const addPlayer = (name) => {
    console.log("name", name)
    //1. Define what is a new player
    const newPlayer = { id: players.length + 1, name: name, score: 0 } 
    //2. Put the new player in the array
    const newPlayersArray = [...players, newPlayer]
    //3. Put new player in local state
    setPlayers(newPlayersArray)
  }

  return(
    <div>
      <h1>Scoreboard</h1>
      Sort By: 
      <select onChange={select}>
        <option value="name">name</option>
        <option value="score">score</option>
      </select>
      {!players 
        ? "Loading"
        : sortedPlayers.map(player => {
          return (
            <Player 
              key={player.id} 
              name={player.name} 
              score={player.score} 
              id={player.id}
              incrementScore={incrementScore}
               />
          )
        })}
      <AddPlayerForm addPlayer={addPlayer}/>
    </div>
  )
}