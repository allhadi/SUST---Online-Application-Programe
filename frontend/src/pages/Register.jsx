import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function AdminDashboard() {
  const [formData, setFormData] = useState({
    regino: '',
  })

  const { regino } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/login')
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
      regino,
    }

    dispatch(register(userData))
  }


  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <section className='studentReg'>
      <h1>
        <FaUser/> Register Student
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
            <input 
              className='form-control'
              type="text" 
              id='regino' 
              name='regino' 
              value={regino} 
              placeholder='Student Registration Number'
              onChange={onChange}
            />
        </div>
        <div className='form-group'>
          <button type='submit'className='btn btn-block'>Register</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default AdminDashboard