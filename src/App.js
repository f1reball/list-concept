import { useEffect, useState } from 'react';
import './App.css';

import Input from './components/input';
import ListDisplay from './components/listDisplay';

function App() {
  
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("listData");
    const parsed = JSON.parse(saved);
    return parsed || [];
  });

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(list));
  });

function reset() {
  setList([]);
}

  return (
    <div className="App">
      <div className='AppWrapper'>
        <Input list={list} listSetter={setList} />
        <ListDisplay list={list} />
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
