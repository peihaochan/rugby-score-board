import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    teamOne: 0,
    teamTwo: 0,
 
  }
   // teamOneTurn: false,
  // teamChange = () => {
  //   this.setState({
  //     teamOneTurn: !this.state.teamOneTurn
  //   });
  // }

  addTry = () => {
    this.setState({
      teamOne: this.state.teamOne + 5
    })
  }

  addConversion = () => {
    this.setState({
      teamOne: this.state.teamOne + 2
    })
  }

  penalty = () => {
    this.setState({
      teamOne: this.state.teamOne + 3
    })
  }

  dropGoal = () => {
    this.setState({
      teamOne: this.state.teamOne + 3
    })
  }

  reset = () => {
    this.setState({
      teamOne: 0,
      teamTwo: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Team One: {this.state.teamOne}</h1>
        <h1>Team Two: {this.state.teamTwo}</h1>
        <button onClick={this.teamChange}>Change Teams</button>
        <button onClick={this.addTry}>Try (+5)</button>
        <button onClick={this.addConversion}>Conversion (+2)</button>
        <button onClick={this.penalty}>Penalty (+3)</button>
        <button onClick={this.dropGoal}>Drop Goal (+3)</button>
        <button onClick={this.reset}>Reset Scores</button>
        {/* <ResultComponent resultTwo={this.state.resultTwo}/>
        <AdditionComponent /> */}
      </div>
    )
  }
}

export default App;
