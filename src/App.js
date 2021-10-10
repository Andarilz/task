import React from 'react'
import Searchinput from './components/Searchinput'
import Results from './components/Results'

export default function () {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Searchinput/>
      <Results/>
    </div>
  );
}
