import { useState } from "react"


function App(){
    const [curImg, setCurImg] = useState(0);
    const arrPhotos = [
        {
            imgName: '/p1.jpg'
        },
        {
            imgName: '/p2.jpg'
        },
        {
            imgName: '/p3.jpg'
        },
        {
            imgName: '/p4.jpg'
        },
    ]
    return (
        <div>
            <h1>小圖換大圖</h1>
            <div>
                <div>
                    {/* <img src="./images/p1.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/>
                    <img src="./images/p2.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/>
                    <img src="./images/p3.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/>
                    <img src="./images/p4.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/> */}
                    {
                        arrPhotos.map((photo, index) => {
                            // setCurImg(photo)
                            return (
                                <img
                                    key={index}
                                    src={photo.imgName}
                                    alt=""
                                    width={120}
                                    height={80}
                                    style={{ cursor: "pointer" }}
                                    // onMouseOver={()=>{
                                    //     setCurImg(index)
                                    // }}
                                    onClick={()=>{
                                        setCurImg(index);
                                        let showPic=document.querySelector('#showPic');
                                        showPic.style.display="block";
                                    }}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <img src={arrPhotos[curImg].imgName} alt="" width={420} height={280} />
                </div>
            </div>
        </div>
    )
}

export default App