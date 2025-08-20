import Card from '../Components/WeatherCard'
import Saf from '../images/weatherIcon/saf.svg'
import Cr from '../images/weatherIcon/cr.svg'
import Caf from '../images/weatherIcon/caf.svg'
import '../css/App0811-1.css'
import { useEffect } from 'react'
import axios from "axios";

const arrWeather = [
  {
    id: 1,
    date: '11日',
    timeS: '上午6:00',
    timeE: '下午6:00',
    img: Saf,
    wname: '晴午後短暫雷陣雨',
    prob: '80%'
  },
  {
    id: 2,
    date: '11日',
    timeS: '下午6:00',
    timeE: '上午6:00',
    img: Caf,
    wname: '多雲短暫陣雨',
    prob: '40%'
  },
  {
    id: 3,
    date: '12日',
    timeS: '上午6:00',
    timeE: '下午6:00',
    img: Cr,
    wname: '多雲午後短暫雷陣雨',
    prob: '40%'
  },
]

const App = () => {

  useEffect(() => {
    // 非同步取得資料
    (async () => {
      // 取得public中的json檔
      const data =await axios.get('./src/F-C0032-001.json')
      // const data =await axios.get('./src/F-C0032-001.json')
      console.log(data);
    })();
  }, [])



  return (
    <>
      <h1>36小時天氣預報</h1>
      <div className='fa'>
        <div className='city'>台北市</div>
        <div className="container">
          {arrWeather.map((Wea) => {
            return (
              <Card key={Wea.id} date={Wea.date} timeS={Wea.timeS} timeE={Wea.timeE} img={Wea.img} wname={Wea.wname} prob={Wea.prob} />
            )
          })}
        </div>
      </div>

    </>
  )
}

export default App