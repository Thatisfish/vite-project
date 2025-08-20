import './css/App0805-1.css'

function App(){
    const dogname="abc"
    const myClassName="myClass"
    function myClick(){
        alert('我是按鈕1')
    }
    return(
        <>
            <div>
                <p style={{color:"red"}} className={myClassName}>姓名:{dogname}</p>
                <button type="button" onClick={myClick}>按鈕</button>
                <button type="button" onClick={()=>{
                    alert('我是按鈕2')
                }}>按鈕2</button>
            </div>
        </>
    )
}
export default App;