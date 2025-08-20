import { useState } from "react"

const App = () => {
    const [txt,setTxt]=useState('');
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <select name="" id="" onChange={(e)=>{
                setTxt(e.target.value);
                console.log(e.target.value);
            }}>
                <option value=""></option>
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="js">JS</option>
                <option value="react">React</option>
            </select>
        </div>
    )
}

export default App