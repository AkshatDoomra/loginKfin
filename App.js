
import './App.css';
import Login from './pages/login';
import {Routes,Route} from 'react-router-dom';
import NewPage from './pages/newPage'
import Register from './pages/register'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/newPage' element={<NewPage/>}/>
        <Route path='/' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
