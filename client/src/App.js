import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';


function App() {
  return(
    
    <>
    <Navbar />
    <div className='side-content-container'>
    <Sidebar />
    <Content />
    </div>
    </>
  )
}

export default App;
