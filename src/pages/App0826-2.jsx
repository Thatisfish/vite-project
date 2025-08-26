import React, { useEffect, useState } from 'react'
import '../css/App0826-2.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
const App08026 = () => {
	const [currentImgIndex, setCurrentIndex] = useState(0);
	const slides = [
		{ url: '/p1.jpg', title: "photo-1" },
		{ url: '/p2.jpg', title: "photo-2" },
		{ url: '/p3.jpg', title: "photo-3" },
		{ url: '/p4.jpg', title: "photo-4" },
	]
	useEffect(() => {
		const autoplay = setInterval(() => {
			nextSlide();
		}, [])
		return () => clearInterval(autoplay);
	}, [currentImgIndex])
	const prevSlide = () => {
		setCurrentIndex((prevIndex) => {
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		})
	}
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => {
			prevIndex === slides.length - 1 ? 0 : prevIndex + 1
		})
	}

	const Arrow = ({ direction, onClick }) => {
		return (
			<div style={{
				position: 'absolute',
				top: "20%",
				cursor: "pointer",
				color: "#fff",
				[direction]: "20px",
			}}>
				{
					direction === "left" ? (
						<FaArrowAltCircleLeft size={50} onClick={onClick} />
					) : (<FaArrowAltCircleRight size={50} onClick={onClick} />)
				}

			</div>
		)
	}
	return (
		<div className='wrap'>
			<h1>輪播</h1>
			<div className='slide'>
				<div className='slideImg' style={{
					backgroundImage: `url(${slides[currentImgIndex].url})`
				}}>
				</div>
				<Arrow direction={"left"} onclick={prevSlide} />
				<Arrow direction={"right"} onclick={prevSlide} />
			</div>
		</div>
	)
}

export default App08026