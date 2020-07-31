import React from 'react';
import './App.css';
import './CreatableAdvanced.css';
import countries from './countries.js'
import Select from 'react-select';
import CreatableAdvanced from './CreatableAdvanced';
const App = () => (
  <div className="App">
    <CreatableAdvanced options={countries} />
    </div>

);
 
export default App;
