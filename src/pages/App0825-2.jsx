import React from 'react'
const arrCitys = [
    {
        cityId: 1,
        cityName: '台北市',
    },
    {
        cityId: 2,
        cityName: '桃園市',
    },
]
const App0825 = () => {
    return (
        <div>
            <h1>Local storage - 陣列物件資料存取</h1>
            <button onClick={()=>{
                let strCity=JSON.stringify(arrCitys);
                console.log(strCity);
                window.localStorage.setItem('citys',strCity)
            }}>寫入</button>

            <button onClick={()=>{
                let getData=window.localStorage.getItem('citys');
                let getArrData=JSON.parse(getData);
                console.log(getArrData);
            }}>讀取</button>
        </div>
    )
}

export default App0825