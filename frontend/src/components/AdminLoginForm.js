import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from './Spinner'

function StudentForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user && user.userType ==='admin') {
        navigate('/admin')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
    <form id="std-login" onSubmit={onSubmit}>
    <div className="field-wrap">
        <input
         type='email'
         className='form-control'
         id='email'
         name='email'
         value={email}
         placeholder='Registration Number'
         onChange={onChange}
        />
      </div>

      <div className="field-wrap">
        <input 
         type='password'
         className='form-control'
         id='password'
         name='password'
         value={password}
         placeholder='Enter password'
         onChange={onChange}
        />
      </div>
      <p className="forgot"><a href="#">Forgot Password?</a></p>
      <button className="button-student-login button-bloc">Login</button>
    </form>
  </>
  )
}

export default StudentForm