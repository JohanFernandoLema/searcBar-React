import { useState } from 'react'

import './App.css'

import { SearchBar } from './components/SearchBar'
import { SearchResulsList } from './components/SearchResultsList';

function App() {

  // create another state in order to get the values that we get from the API and send them to the "search results", so we will be able to modify the array

  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className='search-bar-container'>
        <SearchBar setResults={setResults}/>
        <SearchResulsList results={results}/>
      </div>
    </div>
  )
}

export default App
