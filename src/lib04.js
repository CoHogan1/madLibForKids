import './App.css';
//import React , { useState, useEffect } from 'react'
import React , { useState } from 'react'
import "text-to-speech-js"

function MadLibFour() {
    let [ toggle, setToggle ]   = useState(false)

    let [ answer, setAnswer ]   = useState({verb:'', verby:'', clock: '', food: '',
        plnoun:'', adj:'', teacher:'', pn2:'', food2:'', liquid:'', noun:'', game:''
    })

    let str = `I ${answer['verb']} out of bed when my alarm clock ${answer['verby']}
    at ${answer['clock']}. I do not want to be late for my first day of school!
    I am so excited that I barely eat my ${answer['food']} for breakfast. The School
    is packed with ${answer['plnoun']} all dressed in ${answer['adv']} clothes for the new
    school year. My teachers name is Mrs${answer['teacher']}. Everyone says she is the
    ${answer['adj']} teacher in the school. My teacher hands out books, ${answer['plnoun']},
    ${answer['pn2']}. Before I know it, lunch time comes. The cafeteria is serving
    ${answer['food2']} with french fries and ${answer['liquid']} to drink. At recess,
    I swing on the ${answer['noun']} and play on the ${answer['game']} in the field.
    In mate we ${answer['noun']} problems. We play a lot of games so that we get to
    know eachother ${answer['adj']} kids in our class. The day goes by so ${answer['verby']}
    Finally the ${answer['noun']} rings and we get on the ${answer['verb']} to go home.
    I can't wait to tell my famiy all about my first day of school! The End.`

    const stopSpeech = () => { // works 100%
        console.log("cancelling speech");
        window.speechSynthesis.cancel()
        console.log(window.speechSynthesis.speaking, " is speaking?");
    }

    const onChange = (event) => {
        event.preventDefault()
        setAnswer({...answer, [event.target.name]: event.target.value})
    }

    const readToMe = (c) => {
        let msg = new SpeechSynthesisUtterance();
        let read = setInterval(()=>{
                console.log("interval running");
                window.speechSynthesis.pause()
                window.speechSynthesis.resume()
            }, 12000)
        const endRead = () => {
            clearInterval(read)
            console.log("cleared Inteval");
        }
        msg.onend = () => {
            endRead()
            console.log("reading end")
            console.log("interval end???")
        }
        msg.text = str
        window.speechSynthesis.speak(msg)

        setTimeout(()=> {
            clearInterval(read)
        },135000)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        let quit = false

        Object.values(answer).forEach(item => {
            if (item === '') { quit = true }
        })
        if (quit){
            console.log("fill out form properly");
            return
        }
        setToggle(true) // show story belod mad lib
    }

    // const getVoices = () => {
    //     console.log("getting Voices")
    //     setVoices(window.speechSynthesis.getVoices())
    // }
    // useEffect(getVoices, [])// empty array runs this once.


    return(
        <div className="madLib">
        <h2>Back to School</h2>

        <form onSubmit={handleSubmit}>
            <label>A verb:</label>
            <input type='text' name="one" onChange={onChange} placeholder="jump, swim, fall"></input>

            <label>A verb ends with Y:</label>
            <input type='text' name="two" onChange={onChange} placeholder="happy, akwardly"></input>

            <label>A food:</label>
            <input type='text' name="three" onChange={onChange} placeholder="cereal, ice cream"></input>

            <label>A liquid:</label>
            <input type='text' name="four" onChange={onChange} placeholder="oil, soda"></input>

            <label>Time on a clock:</label>
            <input type='text' name="five" onChange={onChange} placeholder="1:15pm"></input>

            <label>A favorite food:</label>
            <input type='text' name="six" onChange={onChange} placeholder="tacos, cheese"></input>

            <label>Plural noun:</label>
            <input type='text' name="seven" onChange={onChange} placeholder="cats, birds, fishes"></input>

            <label>An adjective:</label>
            <input type='text' name="eight" onChange={onChange} placeholder="describes a noun"></input>

            <label>Teacher's name:</label>
            <input type='text' name="nine" onChange={onChange} placeholder="Binkly"></input>

            <label>A second pluran noun:</label>
            <input type='text' name="ten" onChange={onChange} placeholder="toys, cars, blocks"></input>

            <label>Second food:</label>
            <input type='text' name="eleven" onChange={onChange} placeholder="lobster"></input>

            <label>A game:</label>
            <input type='text' name="twelve" onChange={onChange} placeholder="pong"></input>

            <input type="submit" className="formSubmit" value="Load Madlib"></input>

            <button className= "readButton" onClick={readToMe}>Read MadLib</button>

        </form>
        <button onClick={stopSpeech}>Stop Reading</button>
        </div>
    )
}
export default MadLibFour;
