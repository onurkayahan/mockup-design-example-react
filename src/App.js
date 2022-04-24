import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import Description from './components/layout/Description'
import Segment from './components/layout/Segment';
import Bundles from './components/layout/Bundles'
import GuestBook from './components/layout/GuestBook'
import React, { useState } from 'react'

function App() {

  const [index, setIndex] = useState(0);

  const onBundle = (index) => {
    setIndex(index);
  }

  return (
    <div className="App">
      <Header />
      <Description />
      <Segment onBundle={ onBundle } />
      <Bundles index={ index }/>
        <GuestBook />
    </div>
  );
}

export default App;
