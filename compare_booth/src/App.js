import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox'
import data from './dataShop.json'

function App() {
  const loadData = data;
  console.log(loadData);
  return (
    <div className="App">
    <header>
    <SearchBox/>
    </header>

    </div>
  );
}

export default App;
