import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const players = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
];

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players:{props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className  ="player-name">{ props.playerName }</span>
      <Counter score = {props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ props.score} </span>
        <button className="counter-action increment"> + </button>
      </div>
  );
}

const MyApp = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/>
      
      {/* Players list */}
      {props.initialPlayers.map( player =>
        <Player playerName = {player.name} score={player.score} />
      )}
      
    </div>
  );
}

ReactDOM.render(
  <MyApp initialPlayers = { players }/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
