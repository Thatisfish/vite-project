import Card from '../Components/WeatherCard'
import Saf from '../images/weatherIcon/saf.svg'
import Cr from '../images/weatherIcon/cr.svg'
import Caf from '../images/weatherIcon/caf.svg'
import '../css/App0812-1.css'
import { useEffect, useState } from 'react'
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
    // 建立一個react變數，使用useState Hook
    const [citys, setCitys] = useState([]);

    // useEffect Hook=>渲染後，只呼叫一次json
    // 取得渲染後的Dom元素，要寫在useEffect
    useEffect(() => {
        // 非同步取得資料
        (async () => {
            // 取得public中的json檔
            const jsonData = await axios.get('./src/json/F-C0032-001.json')
            // const data =await axios.get('./src/F-C0032-001.json')

            // 取得各縣市的氣象資訊
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);
            // 將各縣市資訊透過setCitys方法，更新citys
            setCitys(location);
        })();
    }, [])



    return (
        <>

            <h2>三十六小時天氣預報</h2>
            <div className="cards">
                {
                    citys.map((city) => {
                        return (
                            <div key={city.locationName}>
                                <div className="card">
                                    <div className='card-header'>{city.locationName}</div>
                                    <div className="card-body">
                                        {city.weatherElement[0].time.map((item, index) => {
                                            return (
                                                <div className="item" key={index}>
                                                    <Card
                                                        date={new Date(item.startTime).toLocaleString(undefined, { day: 'numeric' })}
                                                        time={
                                                            <>
                                                                {new Date(item.startTime).toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' })}
                                                                <br />~<br />
                                                                {new Date(item.endTime).toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' })}
                                                            </>
                                                        }
                                                        // timeS={new Date(item.startTime).toLocaleString(undefined, {hour: 'numeric',minute: 'numeric'})}
                                                        // timeE={new Date(item.endTime).toLocaleString(undefined, {hour: 'numeric',minute: 'numeric'})}
                                                        img={`./weatherIcon/${item.parameter.parameterName}.svg`}
                                                        wname={item.parameter.parameterName}
                                                        prob={`${city.weatherElement[4].time[index].parameter.parameterName}%`}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default App