import React, { Component } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';


//Button Functions********************************************************

//increment hit +1, reset strikes and balls (fouls)?
export const newHit = hitCount => {
  return hitCount + 1;
}

//increment strike +1, if strike > 3, reset count to zero
export const newStrike = strikeCount => {
  return strikeCount + 1;
}

// export const resetStrike

//increment ballCount by 1, if ballCount > 4, reset to zero
export const newBall = ballCount => {
  return ballCount + 1;
}

//increment foul +1, strike +1, if strike>2, don't increment strike
export const newFoul = (foulCount, strikeCount) => {
  return foulCount;
}

//***************************************************************************** */



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      hits: 0,
      fouls: 0
    }
    console.log(this.state);
  }//constructor

  //state setter functions: 
  //strikes
  addStrikes = () => {
    if (this.state.strikes < 2){
      this.setState({strikes: this.state.strikes + 1})
      console.log('Strikes ', this.state.strikes);
    } else {
      this.setState({strikes: 0});
      console.log('Strikes ', this.state.strikes);
    }
  };


  //balls
 addBalls = () => {
    if (this.state.balls < 3){
      this.setState({balls: this.state.balls + 1})
      console.log('Balls ', this.state.balls);
    } else {
      this.setState({balls: 0});
      console.log('Balls ', this.state.balls);
    }
  }

//hits
  addHits = () => {
    this.setState({
      hits: this.state.hits+1,
      strikes: 0,
      balls: 0
    })
    console.log(
      'Hits ', this.state.hits,
      'Balls', this.state.balls,
      'Strikes',this.state.strikes
      )
  }

  resetHits = () => {
    this.setState({hits: 0});
  }


  //fouls

  addFouls = () => {
    if (this.state.strikes < 2){
      this.setState({fouls: this.state.fouls + 1})
      this.setState({strikes: this.state.strikes + 1})
      console.log('fouls ', this.state.fouls, 'Strikes ',this.state.strikes);
    } else {
      this.setState({fouls: 0});
      console.log('fouls ', this.state.fouls);
    }
  }


  
  render() {
    return (
      <div className="App">
       
      <h1>At-Bat Tracker</h1>
      <Display {...this.state} />
      <Dashboard 
      {...this.state} 
      addStrikes={this.addStrikes}
      setStrikes={this.setStrikes} 
      addBalls={this.addBalls}
      addHits={this.addHits}
      addFouls={this.addFouls}
      resetHits={this.resetHits}
      />
      </div>
    );
  }
}

export default App


