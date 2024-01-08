import { useState } from "react"

const Home = ()=>{

    const [number , setNumber] = useState(0);

    function incrementNumber(){
        let newNumber = Math.ceil(Math.random() * 100)
        setNumber(newNumber);
    }

    return <div>
        <h1>Count :{number} </h1>
        <h3>Count is {number%2 ===0 ? 'Even' : 'Odd'}</h3>
        <button type='button' onClick={incrementNumber}>Increment</button>
        <p>*increase the number randomly between 0 to 100</p>
    </div>
}

export default Home