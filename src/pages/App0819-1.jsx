function MyComponent(props) {
    return <>
        <div>Hello標準</div>
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()}
    </>
}

function MyComponent2({ a, b, c }) {
    return <>
        <div>Hello標準</div>
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}
const App = () => {
    return (<>
        <MyComponent a="我是屬性a" b="我是屬性b" c={()=>{console.log("123")}}/>
        <MyComponent2 a="我是屬性a" b="我是屬性b" c={()=>{console.log("456")}}/>
    </>
    )
}

export default App