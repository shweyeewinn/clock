import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">{this.state.time}</header>
      </div>
    );
  }
}
export default App;
