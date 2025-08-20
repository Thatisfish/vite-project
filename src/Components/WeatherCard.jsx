import React from 'react'
import { FaUmbrella } from "react-icons/fa";
const Card = ({ date, time, img, wname, prob }) => {
    // const{imgURL,title,desc,btnName,btnURL}=props;
    return (
        <>
            <h2 className="card-date">{date}</h2>
            <p className="card-timeS">{time}</p>
            {/* <p className="card-timeS">{timeS}</p>
            <p>~</p>
            <p className="card-timeE">{timeE}</p> */}
            <img src={img} className="card-weat-img" alt="..." />
            <p className="card-weat-name">{wname}</p>
            <div className='icon-text'>
                <FaUmbrella />
                <p className="card-prob">{prob}</p>
            </div>
        </>
    )
}

export default Card