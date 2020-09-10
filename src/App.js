import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Feed>
        </Feed>
      </div>
    </div>
  );
}

export default App;
