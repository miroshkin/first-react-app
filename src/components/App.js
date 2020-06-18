import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';

const Player = (props) => {
  return (
    <div className="player">
      <span className  ="player-name">{ props.playerName }
      <button className="remove-player" onClick= { () => props.removePlayer(props.id) }>✖</button>
      </span>
      <Counter />
    </div>
  );
}

class Counter extends React.Component {

  state = {
    score : 0
  };



  incrementScore = () => {
    this.setState(
        prevState =>  ({
          score : prevState.score + 1
        }));
  }

  decrementScore = () => {
    this.setState(
      prevState =>  ({
        score : prevState.score - 1
      }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick = { this.decrementScore }> - </button>
        <span className="counter-score">{this.state.score} </span>
        <button className="counter-action increment" onClick = { this.incrementScore }> + 
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players : [
      {
        name: "Guil", 
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id)
      }
    });
  }

  render () {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
        
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
          playerName = {player.name} 
          id = {player.id}
          key={player.id.toString()} 
          removePlayer = {this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
} 


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
