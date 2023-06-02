import React from 'react';
import List from './list.js';

const App = () => {
  let list = ['Doremon','Barbie','Ken','Thumbelina','Elsa','Kristoff'];
  return (
    <div id="main">
               {/* Do not remove the main div */}
        <List list={list}/>
    </div>
  )
}

export default App
