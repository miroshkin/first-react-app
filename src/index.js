import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players:{props.totalPlayers}</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className  ="player-name">Antonio</span>
      <Counter/>
    </div>
  );
}

const Counter = () => {
  return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>
  );
}

const MyApp = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={10}/>
      {/* Players list */}
      <Player/>
    </div>
  );
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
