// import React from 'react'
import Card from '../Components/Card'
import '../css/App0806-1.css'
// 

const arrCardinfor = [
    {
        id:1,
        imgURL: 'https://plus.unsplash.com/premium_photo-1754337885588-02a3ee7d1e51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Beach',
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnName: 'Go somewhere',
        btnURL: 'https://plus.unsplash.com/premium_photo-1754337885588-02a3ee7d1e51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id:2,
        imgURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Room ',
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnName: 'Go somewhere',
        btnURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id:3,
        imgURL: 'https://images.unsplash.com/photo-1754136362706-a7ef82050c9e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Street',
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnName: 'Go somewhere',
        btnURL: 'https://images.unsplash.com/photo-1754136362706-a7ef82050c9e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const App = () => {
    return (
        <>
            <div className='container'>
                {
                    arrCardinfor.map((cardinfor) => {
                        return (
                            <Card key={cardinfor.id} imgURL={cardinfor.imgURL} title={cardinfor.title} desc={cardinfor.desc} btnName={cardinfor.btnName} btnURL={cardinfor.btnURL}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default App