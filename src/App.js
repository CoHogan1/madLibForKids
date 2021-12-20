import './App.css';
import React , { useState } from 'react'
import "text-to-speech-js"

import MadLibOne from './lib01.js'
import MadLibTwo from './lib02.js'
import MadLibThree from './lib03.js'
import MadLibFour from './lib04.js'

function App() {

    let [ one, setOne ] = useState(false)
    let [ two, setTwo ] = useState(false)


    const onClick = (event) => {
        console.log(event.target.innerHTML) // string




        // hide other MadLibs
        // open selcted madlib.
    }


  return (
    <div className="App">
        <h1>MadLibs</h1>
        <div className="container">

            <div onClick={onClick} id="one">{one ? <MadLibOne   /> : <div>Mad Lib Number 1</div>}</div>
            <div onClick={onClick} id="two">{two ? <MadLibTwo   /> : <div>Mad Lib Number 2</div>}</div>
        </div>



    </div>
  )
}
export default App;
