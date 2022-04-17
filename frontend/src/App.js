import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';
import Header from './components/Header';
function App() {
  return (
    <>
    <Router>
        <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/user' element={<UserDashboard/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
