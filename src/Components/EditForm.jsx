import { useState } from "react"


// 方法1
const EditForm = ({ todo,editTodo}) => {


    const [content, setContent] = useState(todo.content);


    // 建立一個函式處理新增的todo資料
    const editData = () => {
        // // console.log(content.length)
        let myInput = document.getElementById('myInput');
        myInput.focus();    // 指定游標

        if (content.length === 0) {
            alert('沒有輸入待辦內容！請重新輸入');
        } else {
            editTodo(todo.id,content)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        editTodo(todo.id,content);
    }

    return (
        <form className='create-form'>
            <input
                id="myInput"
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => {
                    // 去除資料前後的空白=> trim()
                    setContent(e.target.value.trim())
                }}
            />
            <button type="button" onClick={editData}>完成</button>
        </form>
    )
}


// 方法2
// const CreateForm = ({ addTodo }) => {    
//     // console.log(addTodo)
//     const [content, setContent] = useState('');


//     return (
//         <form className='create-form'>
//             <input
//                 id="myInput"
//                 type="text"
//                 placeholder='輸入待辦事項'
//                 value={content}
//                 onChange={(e) => { setContent(e.target.value.trim()) }}
//             />
//             <button type="button" onClick={() => {
//                 addTodo(content);
//                 setContent('');
//                 let myInput = document.getElementById('myInput');
//                 myInput.focus();    // 指定游標
//             }}>加入</button>
//         </form>
//     )
// }


export default EditForm


