import './App.css';
import React , { useState } from 'react'
import Say from 'react-say'

import "text-to-speech-js"

function MadLibOne() {

    let [ toggle, setToggle ]   = useState(false)
    let [ reading, setReading ] = useState(false)
    let [ answer, setAnswer ]   = useState({one:'',two:'', three: '', four: '',
         five:'', six:'', seven:'',eight:'',nine:'',ten:'',eleven:'',twelve:''
    })

    let str = `Once upon a time, there was a lonely Prince named...${answer['one']}
    PRINCE: I'm lonely.
    His mother, the Queen of...${answer['two']} wanted to help him find a princess that would make him happy.
    QUEEN: There are so many women out there that think they are princesses
    because they buy a Disney princess costume and dress up like ${answer['three']}
    , but it doesn't mean you're royalty.
    So the Queen put a notice in the official royal news service called ${answer['four']}
    stating that they were seeking the one true princess in the land who would win a date with the prince.
    PRINCE: That's weird, Mom.
    Every woman who thought she was a princess wanted a date with the prince
    because he would one day be King and that meant she would become a Queen.
    QUEEN: It's good to be Queen.
    NARRATOR: So over ${answer['five']} princesses lined up
    and waited for their turn to be interviewed by the Queen.
    PRINCE: Ask them if they like ${answer['six']}, I love...${answer['six']}
    QUEEN: I only need to do one thing to find a true princess.
    I will invite each princess to stay the night and I will place a single...${answer['one']}
    under her mattress. If she can't sleep because of it, then she is a true princess.
    PRINCE: That's weird, Mom.
    So each princess was asked to stay the night and the Queen placed a...${answer['seven']}
    under each mattress. All the princesses slept well except for one.
    PRINCESS: What a ${answer['eight']} mattress. What is wrong with it? I can't sleep.
    The Queen won't think I'm right for her son if I have bags under my eyes and really bad bed head.
    I have to leave before she sees me.
    So the one true princess sneaked away early at ${answer['nine']}
    QUEEN: Where did this princess go?
    PRINCE: I will find her.
    So the prince went looking for the princess and found her crying in the ${answer['ten']}
    PRINCE: Why are you crying princess?
    PRINCESS: Because I failed the Queen's test.
    PRINCE: Actually you passed. You're the only one that couldn't sleep because of the ${answer['seven']}
    under your mattress.
    PRINCESS: Really?
    PRINCE: That means you're the one true princess in the land.
    PRINCESS: Does that mean I won a date with you?
    PRINCE: Sure does. Where do you want to go?
    PRINCESS: Let's go to ${answer['eleven']}
    PRINCE: I love ${answer['eleven']}
    NARRATOR: And they lived
    ${answer['twelve']} ever after!`


    let len = `Once upon a time, there was a lonely Prince named...${answer['one']}
    PRINCE: I'm lonely.
    His mother, the Queen of...${answer['two']} wanted to help him find a princess that would make him happy.
    QUEEN: There are so many women out there that think they are princesses
    because they buy a Disney princess`

    const onChange = (event) => {
        event.preventDefault()
        setAnswer({...answer, [event.target.name]: event.target.value})
    }

    const readToMe = () => {
        console.log("reading madlib")
        let msg = new SpeechSynthesisUtterance();
        let voices = speechSynthesis.getVoices();
        let length = str.length

        msg.chunckLength = length
        msg.rate = 1
        msg.lang = "en" // eng?

        for (let i = 0; i < length; i = i + 200) {
            // may need an early exit.
            msg.text = str.slice(i, (i + 200))
            window.speechSynthesis.speak(msg)
        }
        console.log(speechSynthesis.pending, " true is pending");
        // reading turn to false.
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (reading) { return false }
        let quit = false
        Object.values(answer).forEach(item => {
            // see if form inputs are all filled out
            if (item === '') { quit = true }
        })

        if (quit){
            console.log("fill out form properly");
            // todo toggle a model asking for a form filled out properly.
            return
        }
        setToggle(true) // show story belod mad lib
    }


    return(
        <div className="madLib">
            <h2>MadLibOne</h2>

        <form onSubmit={handleSubmit}>
            <label>An Unusual name:</label>
            <input type='text' name="one" onChange={onChange} placeholder="any name"></input>

            <label>The name of a place:</label>
            <input type='text' name="two" onChange={onChange} placeholder="location"></input>

            <label>The name of a character:</label>
            <input type='text' name="three" onChange={onChange} placeholder="any character"></input>

            <label>Where you place an ad:</label>
            <input type='text' name="four" onChange={onChange} placeholder="tv bus-station"></input>

            <label>Any number:</label>
            <input type='number' name="five" onChange={onChange} placeholder="1-10000000"></input>

            <label>A favorite food:</label>
            <input type='text' name="six" onChange={onChange} placeholder="tacos"></input>

            <label>A second favorite food:</label>
            <input type='text' name="seven" onChange={onChange} placeholder="cake"></input>

            <label>An adjective:</label>
            <input type='text' name="eight" onChange={onChange} placeholder="describe a noun"></input>

            <label>A specific time on the clock:</label>
            <input type='text' name="nine" onChange={onChange} placeholder="12:49"></input>

            <label>An outdoor location:</label>
            <input type='text' name="ten" onChange={onChange} placeholder="lake"></input>

            <label>A fun place to go:</label>
            <input type='text' name="eleven" onChange={onChange} placeholder="the dmv"></input>

            <label>An adverb (word ending in -ly):</label>
            <input type='text' name="twelve" onChange={onChange} placeholder="dangerously"></input>

            <input type="submit" className="formSubmit" value="Load Madlib"></input>

            <button className= "readButton" onClick={readToMe}>Read MadLib</button>

        </form>
        {toggle ? <div className="fullStory">{str}</div> : null}
        </div>
    )
}
export default MadLibOne;
