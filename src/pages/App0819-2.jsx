function MyComponent({a,children}) {
    return <>
    <h2>呼叫外部元件，來自主元件的傳遞</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis atque commodi tenetur iure necessitatibus eum possimus earum doloremque! Culpa, possimus. Incidunt alias quia sed, labore voluptas voluptates nemo rem.</p>
    {children}
    我是:{a}
    </>
}
function MyComponent2({b}) {   
    return <>
    <h2>呼叫外部元件，來自主元件的傳遞</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis atque commodi tenetur iure necessitatibus eum possimus earum doloremque! Culpa, possimus. Incidunt alias quia sed, labore voluptas voluptates nemo rem.</p>
    <SecondComponent c={b}/>
    我是:{b}
    </>
}
function SecondComponent(props) {
    return <>
    <h1>我是SC</h1>
    </>
}

const App = () => {
    return (<>
        <h1>元件之間傳遞元件</h1><hr />
        <MyComponent a="屬性a">
            <SecondComponent c="屬性a"/>
        </MyComponent>
        <hr />
        <MyComponent2 b="屬性b"/>
    </>
    )
}

export default App