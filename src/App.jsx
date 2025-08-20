import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
const App = () => {
  return (
    <div className="wrap">
      {/* 選單區 */}
      <Nav />
      <hr />
      <Routes>
        {/* 首頁 */}
        <Route path='/' element={<Home />}></Route>
        {/* About */}
        <Route path="/About" element={<About />}></Route>
        {/* About */}
        <Route path="/News" element={<News />}></Route>
      </Routes>
      {/* 內容區 */}

      {/* Footer區 */}
      <Footer />
    </div>
  )
}

export default App