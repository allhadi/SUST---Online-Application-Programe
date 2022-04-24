import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
        <div className='container'>
        <Header/>
        </div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user' element={<UserDashboard/>}/>
          <Route path='/admin' element={<Register/>}/>
        </Routes>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
