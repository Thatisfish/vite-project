import React, { useState } from 'react'

function Mycomponent() {
    const [counts, setCounts] = useState(0);
    const handleClick = () => {
        setCounts(counts + 1);
    }
    return (
        <button id='btn1' onClick={ handleClick }>點擊次數:{counts}</button>
    )
}

const App = () => {
    // let counts = 0;
    return (
        <div>
            {/* <button id='btn1' onClick={() => {
                setCount(counts+1);
                console.log(counts);
            }}>點擊次數:{counts}</button> */}
            <Mycomponent />
        </div>
    )
}

export default App