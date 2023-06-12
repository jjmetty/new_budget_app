import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginComponents/LoginPage';
import Graph from './Components/GraphComponents/Graph';
import Calendar from './Components/CalendarComponents/Calendar'
import Report from './Components/ReportComponent/Report'

function App() {
  const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

  //create active link styles
library.add(...iconList)
  return(
    <>
    <Navbar />
    <div className='side-content-container'>
    <Router>
    <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginpage" element={<LoginPage />}></Route>
          <Route path="/graphs" element={<Graph />}></Route>
          <Route path="/reports" element={<Report />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Routes>
    </Router>
    </div>
 
    </>
  )
}

export default App;
