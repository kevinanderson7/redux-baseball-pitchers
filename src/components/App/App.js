import React, { Component } from 'react';

class App extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    currentCatcher: 'Elston Howard',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],
    newPitcher: '',
    newCatcher: '',
  }

  handlePitcherNameChange = event => {
    this.setState({
      newPitcher: event.target.value,
    });
  }

  handlePitcherSubmit = event => {
    event.preventDefault();
    this.setState({
      newPitcher: '',
      pitcherList: [ ...this.state.pitcherList, this.state.newPitcher ],
    });
  }

  handlePitcherSelectClick = selectedPitcher => () => {
    this.setState({
      currentPitcher: selectedPitcher,
    });
  }

  handleCatcherNameChange = event => {
    this.setState({
      newCatcher: event.target.value,
    });
  }

  handleCatcherSubmit = event => {
    event.preventDefault();
    this.setState({
      newCatcher: '',
      catcherList: [ ...this.state.catcherList, this.state.newCatcher ],
    });
  }

  handleCatcherSelectClick = selectedCatcher => () => {
    this.setState({
      currentCatcher: selectedCatcher,
    });
  }

  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <h2>On the Mound: {this.state.currentPitcher}</h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <div>Total Pitchers: {this.state.pitcherList.length}</div>
        <div>Total Catchers: {this.state.catcherList.length}</div>
        <h3>All Pitchers</h3>
        <form onSubmit={this.handlePitcherSubmit}>
          <input
            type="text"
            value={this.state.newPitcher}
            onChange={this.handlePitcherNameChange}
            placeholder="New Pitcher Name"
          />
          <button type="submit">Add Pitcher</button>
        </form>
        <ul>
          {this.state.pitcherList.map(pitcher => (
            <li
              onClick={this.handlePitcherSelectClick(pitcher)}
            >
              {pitcher}
            </li>
          ))}
        </ul>
        <h3>All Catchers</h3>
        <form onSubmit={this.handleCatcherSubmit}>
          <input
            type="text"
            value={this.state.newCatcher}
            onChange={this.handleCatcherNameChange}
            placeholder="New Catcher Name"
          />
          <button type="submit">Add Catcher</button>
        </form>
        <ul>
          {this.state.catcherList.map(catcher => (
            <li
              onClick={this.handleCatcherSelectClick(catcher)}
            >
              {catcher}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
