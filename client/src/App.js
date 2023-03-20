import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Money from './Components/Money/Money';


function App() {
  return(
    
    <>
    <Navbar />
    <div className='side-content-container'>
    <Sidebar />
    <Money />
    </div>
    </>
  )
}

export default App;
