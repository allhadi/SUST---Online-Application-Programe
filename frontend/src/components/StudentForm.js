import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function StudentForm() {
  const [formData, setFormData] = useState({
    regino: '',
    password: '',
  })

  const { regino, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { student, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || student) {
      navigate('/student')
    }

    dispatch(reset())
  }, [student, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const studentData = {
      registrationNo:regino,
      password,
    }

    dispatch(login(studentData))
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
    <form id="std-login" onSubmit={onSubmit}>
    <div className="field-wrap">
        <input
         type='text'
         className='form-control'
         id='regino'
         name='regino'
         value={regino}
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