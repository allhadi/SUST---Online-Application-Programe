import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
function AdminDashboard() {
  const [formData, setFormData] = useState({
    regino:'',
  })

  const{regino} = formData

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