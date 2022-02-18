import { useState } from 'react';
import './App.css';

import Input from './components/input';
import ListDisplay from './components/listDisplay';

function App() {
  

  const [list, setList] = useState([]);

  return (
    <div className="App">
        <Input list={list} listSetter={setList}/>
        <ListDisplay list={list} />
    </div>
  );
}

export default App;
