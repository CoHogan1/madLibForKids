import './App.css';
import React , { useState } from 'react'
import "text-to-speech-js"


function MadLibThree() {

    let [ toggle, setToggle ]   = useState(false)

    let [ answer, setAnswer ]   = useState({name1:'', noun:'', verb1: '', color: '',
        city:'', food:'', school:'', name2:'', name3:'', superH:'', verb2:'', verb3: ''
    })

    let str = `Hello! My name is ${answer['name1']} and I have a secret to share
    with you. I am a normal child by day, and a ${answer['noun']} by night. Only
    you and my best friend ${answer['name2']} knows my secret. You may be wondering
    how this happened? Well, one night I was ${answer['verb1']} at home, and then BOOM!
    The lights went out and ${answer['name3']} showed up. In a booming voice ${answer['name3']}
    said because your favorite color is ${answer['color']}, you have been chosen
    to be a ${answer['superH']}. My mission is to save the people of ${answer['city']}
    by doing my favorite things, ${answer['verb2']}, and ${answer['verb3']}. This
    may sound easy, but it is no walk in the park. It requires hard work and ${answer['noun']}.
    My weakness is eating ${answer['food']}. They are gross! Keep that away from me.
    I save the world every night. But when I wake up in the morning, I go back to
    my normal life at ${answer['school']} The End.`

    const stopSpeech = () => { // works 100%
        console.log("cancelling speech");
        window.speechSynthesis.cancel()
        console.log(window.speechSynthesis.speaking, " is speaking?");
    }



    const onChange = (event) => {
        event.preventDefault()
        setAnswer({...answer, [event.target.name]: event.target.value})
    }

    const readToMe = () => {
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

    return(
        <div className="madLib">
        <h2>My Life</h2>

        <form onSubmit={handleSubmit}>
            <label>Name 1:</label>
            <input type='text' name="one" onChange={onChange} placeholder="Bob"></input>

            <label>Name 2:</label>
            <input type='text' name="two" onChange={onChange} placeholder="Lucy"></input>

            <label>Name 3:</label>
            <input type='text' name="three" onChange={onChange} placeholder="Mario"></input>

            <label>A Noun:</label>
            <input type='text' name="four" onChange={onChange} placeholder="tv bus-station"></input>

            <label>Verb 1:</label>
            <input type='text' name="five" onChange={onChange} placeholder="run, fly, sink"></input>

            <label>Verb 2:</label>
            <input type='text' name="six" onChange={onChange} placeholder="ride, build, chase"></input>

            <label>Verb 3:</label>
            <input type='text' name="seven" onChange={onChange} placeholder="buy, check, close"></input>

            <label>A Color:</label>
            <input type='text' name="eight" onChange={onChange} placeholder="ROY G BIV"></input>

            <label>A City:</label>
            <input type='text' name="nine" onChange={onChange} placeholder="Metrocity"></input>

            <label>A Food:</label>
            <input type='text' name="ten" onChange={onChange} placeholder="lake"></input>

            <label>A school:</label>
            <input type='text' name="eleven" onChange={onChange} placeholder="elementary school"></input>

            <label>A superhero name:</label>
            <input type='text' name="twelve" onChange={onChange} placeholder="The Flash?"></input>

            <input type="submit" className="formSubmit" value="Load Madlib"></input>

            <button className= "readButton" onClick={readToMe}>Read MadLib</button>

        </form>
        <button onClick={stopSpeech}>Stop Reading</button>
        </div>
    )
}
export default MadLibThree;
