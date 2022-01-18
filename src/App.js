import './App.css';
import React , { useState } from 'react'
import "text-to-speech-js"

import MadLibOne from './lib01.js'
import MadLibTwo from './lib02.js'
import MadLibThree from './lib03.js'
import MadLibFour from './lib04.js'

import Footer from './footer.js'

function App() {
    let [ one, setOne ] = useState(false)
    let [ two, setTwo ] = useState(false)
    let [ three, setThree ] = useState(false)
    let [ four, setFour ] = useState(false)
    let arr = [setOne, setTwo, setThree, setFour]

    const show = (value, setValue, element) => {
        window.speechSynthesis.cancel()
        if (value === true){
            setValue(!value)
        } else {
            hide(element)
        }
    }

    const stopSpeech = () => { // works 100%
        console.log("cancelling speech");
        window.speechSynthesis.cancel()
        console.log(window.speechSynthesis.speaking, " is speaking?");
    }

    const hide = (ele) => {
        arr.forEach((item, index) => {
            if ((ele - 1) === index) {
                arr[index](true)
            } else {
                arr[index](false)
            }
        })
    }

  return (
    <div className="App">
        <h1>MadLibs</h1>
        <div className="nav">
            <div onClick={()=> show(one,   setOne,   1)}>The Prince</div>
            <div onClick={()=> show(two,   setTwo,   2)}>Camping</div>
            <div onClick={()=> show(three, setThree, 3)}>My Life</div>
            <div onClick={()=> show(four,   setFour, 4)}>Back to School</div>
        </div>
        <div>
            {one || two || three || four ? <button onClick={stopSpeech}>Stop Reading</button> : null}
            {one   ? <MadLibOne />   : null}
            {two   ? <MadLibTwo />   : null}
            {three ? <MadLibThree /> : null}
            {four  ? <MadLibFour />  : null}
        </div>
        {!one && !two && !three && !four ? <div className="story">Select a story</div> : null}
        <Footer />
    </div>
  )
}
export default App;
