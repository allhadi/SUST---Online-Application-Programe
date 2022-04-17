import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
function Login() {
  const [formData, setFormData] = useState({
    regino:'',
    password:'',
  })

  const{regino,password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
      e.preventDefault()
  }

  return (
    <>
    <section className='login'>
      <h1>
        <FaSignInAlt/> Login
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
            <input 
              className='form-control'
              type="text" 
              id='regino' 
              name='regino' 
              value={regino} 
              placeholder='Registration Number'
              onChange={onChange}
            />
            <input 
              className='form-control'
              type="text" 
              id='password' 
              name='password' 
              value={password} 
              placeholder='Password'
              onChange={onChange}
            />
        </div>
        <div className='form-group'>
          <button type='submit'className='btn btn-block'>Login</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login