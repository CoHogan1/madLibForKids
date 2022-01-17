console.log("hello");

let x


const start = () => {
    console.log("started");
    x = setInterval(()=>{
            console.log("interval running")
        },100)
    return x
}


const end = () => {
    console.log('ending');
    clearInterval(x)
}


// start()
// console.log("middle");
// end()


const begin = () =>{
    console.log("begin");
}

const ending = () => {
    console.log("stopping");
}

let y = setInterval(begin, 100)
console.log("test number two");


setTimeout(()=>{
    clearInterval(y, ending())
},2000)
