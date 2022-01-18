import './App.css';
import React , { useState } from 'react'
import "text-to-speech-js"

function MadLibTwo() {
    let [ toggle, setToggle ]   = useState(false)

    let [ answer, setAnswer ]   = useState({nameOne:'',nameTwo:'', adj: '', ptv: '',
        pnoun:'', ingV:'', adV:'', noun:'', verb:'', a1:'', a2:''
    })

    let str = `${answer['nameOne']}, and ${answer['nameTwo']} went on a ${answer['adj']}
    camping trip. They ${answer['ptv']} their ${answer['adj']} ${answer['pnoun']} and
    started ${answer['ingV']} ${answer['adV']} to build a ${answer['noun']}. They knew
    they needed to ${answer['verb']} a lot of ${answer['pnoun']} before it became too
    ${answer['adj']} so they ${answer['ptv']} very ${answer['adV']}. For a snack they decided
    to make ${answer['pnoun']} on a ${answer['noun']} and cook up a can of ${answer['pnoun']}
    As it got dark outside, ${answer['nameTwo']} heard a ${answer['a1']} make a sound
    in the woods! ${answer['nameOne']} was scared and ${answer['ptv']} a ${answer['noun']}!
    Outside, ${answer['nameTwo']} ${answer['ptv']} a ${answer['noun']} from inside the tent.
    The ${answer['a1']} ${answer['ptv']} but not before ${answer['ingV']} over all the
    ${answer['adj']} ${answer['noun']}! When morning came, ${answer['nameOne']} and ${answer['nameTwo']}
    left to go ${answer['verb']} up a ${answer['adj']} ${answer['noun']} and gather ${answer['pnoun']}
    It truly was a ${answer['adj']} camping trip! The End.`

    const stopSpeech = () => { // works 100%
        console.log("cancelling speech");
        window.speechSynthesis.cancel()
        console.log(window.speechSynthesis.speaking, " is speaking?");
    }

    const onChange = (event) => {
        event.preventDefault()
        setAnswer({...answer, [event.target.name]: event.target.value})
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

    return(
        <div className="madLib">
            <h2>Camping</h2>

                <form onSubmit={handleSubmit}>
                    <label>Any name:</label>
                    <input type='text' name="one" onChange={onChange} placeholder="any name"></input>

                    <label>Second name:</label>
                    <input type='text' name="two" onChange={onChange} placeholder="location"></input>

                    <label>Adjective:</label>
                    <input type='text' name="three" onChange={onChange} placeholder="describes a noun"></input>

                    <label>Past-tense verb:</label>
                    <input type='text' name="four" onChange={onChange} placeholder="flew, slept, went"></input>

                    <label>Plural noun:</label>
                    <input type='text' name="five" onChange={onChange} placeholder="kids, cats, dogs"></input>

                    <label>A verb ends with ING:</label>
                    <input type='text' name="six" onChange={onChange} placeholder="running, sleeping"></input>

                    <label>Pronoun:</label>
                    <input type='text' name="seven" onChange={onChange} placeholder="I, we, you"></input>

                    <label>Noun:</label>
                    <input type='text' name="nine" onChange={onChange} placeholder="singer, dancer"></input>

                    <label>Verb:</label>
                    <input type='text' name="ten" onChange={onChange} placeholder="quick, slow"></input>

                    <label>Animal one:</label>
                    <input type='text' name="eleven" onChange={onChange} placeholder="fish, bird"></input>

                    <label>Animal two:</label>
                    <input type='text' name="twelve" onChange={onChange} placeholder="chicken, cow"></input>

                    <input type="submit" className="formSubmit" value="Load Madlib"></input>

                    <button className= "readButton" onClick={readToMe}>Read MadLib</button>

                </form>
                <button onClick={stopSpeech}>Stop Reading</button>

        </div>
    )
}
export default MadLibTwo;
