import React from 'react';

class App extends React.Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <h1>당신은 피자를 좋아하나요? 대답해 주세요.</h1>
        <button onClick>좋아요</button>
        <button onClick>싫어요</button>
      </div>
    );
    
  }
}


export default App;