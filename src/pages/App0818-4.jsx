import { useState } from "react"

const App = () => {
    const [subject, setSubject] = useState('');
    const opList = ['HTML', 'CSS', 'JavaScript', 'React'];
    const opListValue = ['HTML', 'Css', 'JavaScript', 'React'];
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <select
                name=""
                id=""
                value={subject}
                onChange={(e) => {
                    setSubject(e.target.value);
                }}>
                <option value="" disabled>請選擇</option>
                {
                    opList.map((item,index)=>{
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }
                {/* <option value=""></option>
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="js">JS</option>
                <option value="react">React</option> */}
            </select>
        </div>
    )
}

export default App