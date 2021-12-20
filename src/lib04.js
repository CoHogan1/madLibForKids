import './App.css';
import React , { useState } from 'react'
import "text-to-speech-js"

let story = []
let inserts = []


function MadLibFour() {

    const read = () => {
        // join both arrays, and read aloud.
    }


    const handleChange = (event) => {
        event.preventDefault()
        console.log("handle change")
        // assign value to array.
        // where to get the index from.
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("handling submit")

    }








    return(
        <div className="madLib">
            <h2>MadLibFour</h2>






        </div>
    )
}
export default MadLibFour;
