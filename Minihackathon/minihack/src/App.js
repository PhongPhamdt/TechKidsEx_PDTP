import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Navbar from './Components/Navbar';
import NewGame from './Components/NewGame';
import './App.css';

class App extends Component {
  state{
    game: null
  }

  ComponentDidMount() {

  }

  updateGameState = (gameData) => {

  }

  render() {
    const title = "Score Keeper";
    return (
      // <Navbar />
      <Container>
        <header className="App-header">
          <Navbar title={title}/>
        </header>
        <div className="content">
        {
          this.state.game ? <NewGame updateGameState={this.updateGameState}/> : "Play Game"
        }
        </div>
      </Container>
    );
  }
}

export default App;
