import './App.css';
import React , { useState } from 'react'
import "text-to-speech-js"

import MadLibOne from './lib01.js'
import MadLibTwo from './lib02.js'
import MadLibThree from './lib03.js'
import MadLibFour from './lib04.js'

import Footer from './footer.js'

//let arr = ['one', 'two', 'three', 'four']


function App() {
    let [ one, setOne ] = useState(false)
    let [ two, setTwo ] = useState(false)
    let [ three, setThree ] = useState(false)
    let [ four, setFour ] = useState(false)

    let arr = [setOne, setTwo, setThree, setFour]
    //let brr = [one, two, three, four]

    const hide = (ele) => {
        arr.forEach((item, index) => {
            if ((ele - 1) === index) {
                arr[index](true)
            } else {
                arr[index](false)
            }
        })
    }

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




  return (
    <div className="App">
        <h1>MadLibs</h1>
        <button onClick={stopSpeech}>stop speech</button>
        <div className="nav">
            <div onClick={()=> show(one,   setOne,   1)}>One</div>
            <div onClick={()=> show(two,   setTwo,   2)}>Two</div>
            <div onClick={()=> show(three, setThree, 3)}>Three</div>
            <div onClick={()=> show(four,   setFour, 4)}>Four</div>
        </div>
        <div>
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
