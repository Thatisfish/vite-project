import $ from 'jquery'
import { useEffect } from 'react'
import '../css/App0826-1.css'

const App0826 = () => {
    useEffect(() => {
        $('.zoom').on('mouseover', function () {
            $(this).addClass('imgScale');
        })

        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    }, [])
    return (
        <div>
            <h1>useEffect</h1>
            <h2>JQ-圖片縮放</h2>
            <a href="#" className='zoom'>
                <img src="./p1.jpg" alt="" />
            </a>
        </div>
    )
}

export default App0826