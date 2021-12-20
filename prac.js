// const foo = () => {
//     // this requires internet connection.
//     var msg = new SpeechSynthesisUtterance();
//     msg.text = "Hello World";
//     console.log(test.sentence, "Here", " returns an object with an array.");
//     return window.speechSynthesis.speak(msg);
// }


let obj = {one: '1',two:"two",three:"three"}

// console.log(obj['one']);
//
// console.log(`hello ${obj['one']}`);


// let str = `Once upon a time, there was a lonely Prince named...${}
//
// PRINCE: I'm lonely.
//
// His mother, the Queen of...${} wanted to help him find a princess that would make him happy.
//
// QUEEN: There are so many women out there that think they are princesses
// because they buy a Disney princess costume and dress up like ${}
//
// ${}, but it doesn't mean you're royalty.
//
// So the Queen put a notice in the official royal news service called ${}
// stating that they were seeking the one true princess in the land who would win a date with the prince.
//
// PRINCE: That's weird, Mom.
//
// Every woman who thought she was a princess wanted a date with the prince
// because he would one day be King and that meant she would become a Queen.
//
// QUEEN: It's good to be Queen.
//
//
// NARRATOR: So over ${} princesses lined up
// and waited for their turn to be interviewed by the Queen.
//
// PRINCE: Ask them if they like ${}, I love...${}
//
// QUEEN: I only need to do one thing to find a true princess.
// I will invite each princess to stay the night and I will place a single...${}
// under her mattress.
// If she can't sleep because of it, then she is a true princess.
//
// PRINCE: That's weird, Mom.
//
// So each princess was asked to stay the night and the Queen placed a...${}
// under each mattress. All the princesses slept well except for one.
//
// PRINCESS: What a ${} mattress. What is wrong with it? I can't sleep.
// The Queen won't think I'm right for her son if I have bags under my eyes and really bad bed head.
// I have to leave before she sees me.
//
// So the one true princess sneaked away early at ${}
//
// QUEEN: Where did this princess go?
//
// PRINCE: I will find her.
//
// So the prince went looking for the princess and found her crying in the ${}
//
// PRINCE: Why are you crying princess?
//
// PRINCESS: Because I failed the Queen's test.
//
// PRINCE: Actually you passed. You're the only one that couldn't sleep because of the ${}
// under your mattress.
//
// PRINCESS: Really?
//
// PRINCE: That means you're the one true princess in the land.
//
// PRINCESS: Does that mean I won a date with you?
//
// PRINCE: Sure does. Where do you want to go?
//
// PRINCESS: Let's go to ${}
//
// PRINCE: I love ${}
//
// NARRATOR: And they lived
// ${} ever after!`


let val = Object.values(obj)


Object.values(obj).forEach(item => { //.775
    console.log(item)
})
