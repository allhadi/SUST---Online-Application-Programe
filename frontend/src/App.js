import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/student' element={<UserDashboard/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
