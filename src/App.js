import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  render() {
    console.log('render!');
    return (
      <div>
        <h1>당신은 피자를 좋아하나요? 대답해 주세요. {this.state.count}</h1>
        <button onClick={this.add}>좋아요</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.Minus}>싫어요</button>
      </div>
    
    );
  }
}

export default App;
