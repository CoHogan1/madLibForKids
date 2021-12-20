import './App.css';
import React , { useState } from 'react'
import "text-to-speech-js"

function MadLibOne() {
    let [ input,  setInput ] = useState('')
    let [ toggle, setToggle ] = useState(false)
    let [ answer, setAnswer ] = useState({one:'',two:'', three: '', four: '',
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
    under her mattress.
    If she can't sleep because of it, then she is a true princess.

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

    const onChange = (event) => {
        event.preventDefault()
        setAnswer({...answer, [event.target.name]: event.target.value})
    }

    const read = (string) => {
        console.log("reading....")
        console.log(string)
        let msg = new SpeechSynthesisUtterance();
        //var voices = window.speechSynthesis.getVoices();
        msg.text = string
        return window.speechSynthesis.speak(msg)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        Object.values(answer).forEach(item => {
            if (item == ''){
                console.log("fill out form pls")
                return null
            } else {
                setToggle(true)
                read(str)
            }
        })
    }
    return(
        <div className="madLib">
            <h2>MadLibOne</h2>

        <form onSubmit={handleSubmit}>
            <label>An Unusual name:</label>
            <input type='text' name="one" onChange={onChange}></input>

            <label>The name of a place:</label>
            <input type='text' name="two" onChange={onChange} ></input>

            <label>The name of a character:</label>
            <input type='text' name="three" onChange={onChange} ></input>

            <label>The name of somewhere you'd place an ad:</label>
            <input type='text' name="four" onChange={onChange} ></input>

            <label>A number:</label>
            <input type='number' name="five" onChange={onChange} ></input>

            <label>A favorite food:</label>
            <input type='text' name="six" onChange={onChange} ></input>

            <label>A second favorite food:</label>
            <input type='text' name="seven" onChange={onChange} ></input>

            <label>An adjective:</label>
            <input type='text' name="eight" onChange={onChange} ></input>

            <label>A specific time on the clock:</label>
            <input type='text' name="nine" onChange={onChange} ></input>

            <label>An outdoor location:</label>
            <input type='text' name="ten" onChange={onChange} ></input>

            <label>A fun place to go:</label>
            <input type='text' name="eleven" onChange={onChange} ></input>

            <label>An adverb (word ending in -ly):</label>
            <input type='text' name="twelve" onChange={onChange} ></input>

            <input type="submit" className="formSubmit" value="Read it to me"></input>
        </form>

        {toggle? str : null}

        </div>
    )
}
export default MadLibOne;
