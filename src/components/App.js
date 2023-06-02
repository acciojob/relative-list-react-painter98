import React, { useState } from 'react';
import List from './list.js';

const App = () => {
 // let list = ['Doremon','Barbie','Ken','Thumbelina','Elsa','Kristoff'];
  let [list,setList] = useState([]);
  let [name,setName] = useState('');

  function changing(){
    console.log(name);
    setList([...list,name]);
  }

  return (
    <div id="main">
               {/* Do not remove the main div */}
        <input type="text" onChange={e=>setName(e.target.value)}/>
        <button onClick={changing}>submit</button>
        <List list={list}/>
    </div>
  )
}

export default App
