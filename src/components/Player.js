export default function Player(props){

  return(
    <div>
      <ul>
        <li>{props.name}: {props.score}  
          <button onClick={() => props.incrementScore(props.id)}>increment +1</button></li>
      </ul>
    </div>
  )
}