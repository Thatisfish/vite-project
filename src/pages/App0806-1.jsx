// import React from 'react'
import '../css/App0806-1.css'
// 
const App = () => {
    const photos={
        photo1:{
            imgURL:'https://plus.unsplash.com/premium_photo-1754337885588-02a3ee7d1e51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Beach',
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnName:'Go somewhere',
            btnURL:'https://plus.unsplash.com/premium_photo-1754337885588-02a3ee7d1e51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2:{
            imgURL:'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Room ',
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnName:'Go somewhere',
            btnURL:'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo3:{
            imgURL:'https://images.unsplash.com/photo-1754136362706-a7ef82050c9e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Street',
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnName:'Go somewhere',
            btnURL:'https://images.unsplash.com/photo-1754136362706-a7ef82050c9e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }
    return (
        <>
            <div className='container'>
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App