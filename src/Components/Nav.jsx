import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/News">News</Link></li>
            </ul>
        </div>
    )
}

export default Nav