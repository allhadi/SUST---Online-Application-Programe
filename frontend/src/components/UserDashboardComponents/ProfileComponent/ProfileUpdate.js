import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../../components/Spinner'
import { update, reset } from '../../../features/auth/authSlice'

function ProfileUpdate() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  })

  const { firstName, lastName } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
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
        firstName,
        lastName
      }
      dispatch(update(userData))
  }

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
    <form onSubmit={onSubmit}>
          <div className='row'>
                <div className="col-md-3">
                    <div className="profile-img">
                       <img src={require('../../../assets/images/profile.png')} />
                    </div>
                    <input className='profile-image-input' type="file" id="img" name="img" accept="image/*"/>
                </div>

                <div className='col-md-9'>

                    <div className='form-horizontal'>
                      <section className='profile-form-section'>
                          <h2>Personal Information</h2>
                           <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>First Name</label>
                                  <input type="text" 
                                  className="form-control" 
                                  // defaultValue={!user.firstName ? ' ' : user.firstName} 
                                  placeholder='First Name' 
                                  id="firstName" 
                                  name="firstName"
                                  value={firstName}
                                  onChange={onChange}
                                  />
                                </div>

                                <div className='col-md-6'>
                                <label>Last Name</label>
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Last Name" 
                                    id="lastName" 
                                    name="lastName" 
                                    // defaultValue={!user.lastName ? ' ' : user.lastName}
                                    onChange={onChange}
                                    value={lastName}
                                    />
                                </div>
                              </div>
                          </div>

                          {/* <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                <label>Registration No</label>
                                  <input type="text" 
                                  className="form-control" 
                                  placeholder='Registration No' 
                                  id="email" name="email"  
                                  defaultValue={!user.email ? ' ' : user.email} 
                                  readOnly
                                  onChange={onChange}
                                  />
                                </div>

                                <div className='col-md-6'>
                                <label>Department</label>
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Department" 
                                    id="department" 
                                    name="department" 
                                    defaultValue={!user.department ? ' ' : user.department}
                                    onChange={onChange}
                                    />
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                <label>Admission Date</label>
                                  <input type="text" 
                                  className="form-control" 
                                  placeholder='Admission Date' 
                                  id="addmissionDate" 
                                  name="admissionDate" 
                                  defaultValue={!user.admissionDate ? ' ' : user.admissionDate}
                                  onChange={onChange}
                                  />
                                </div>

                                <div className='col-md-6'>
                                <label>Course</label>
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Course" 
                                    id="course" 
                                    name="course" 
                                    defaultValue={!user.course ? ' ' : user.course}
                                    onChange={onChange}
                                    />
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                <label>Email</label>
                                  <input type="email" className="form-control" placeholder='Email' id="email" name="email" defaultValue={!user.email ? ' ' : user.email}/>
                                </div>

                                <div className='col-md-6'>
                                <label>National ID</label>
                                    <input type="text" className="form-control" placeholder="National ID" id="nid" name="nationalID" defaultValue={!user.nationalID ? ' ' : user.nationalID}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Mobile Number</label>
                                  <input type="text" className="form-control" id="mobile" placeholder="Mobile Number" name="mobileNumber" defaultValue={!user.mobileNumber ? ' ' : user.mobileNumber}/>
                                </div>
                              
                                <div className="col-md-6">
                                <label>Birth Date</label>
                                  <input type="text" className="form-control" id="birthdate" placeholder="Birth Date" name="birthdate" defaultValue={!user.birthDate ? ' ' : user.birthDate}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Gender</label>
                                  <input type="text" className="form-control" id="gender" placeholder="Gender" name="gender" defaultValue={!user.gender ? ' ' : user.gender}/>
                                </div>
                              
                                <div className="col-md-6">
                                <label>Nationality</label>
                                <input type="text" className="form-control" id="nationality" placeholder="Nationality" name="nationality" defaultValue={!user.nationality ? ' ' : user.nationality}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Religion</label>
                                  <input type="text" className="form-control" id="religion" placeholder="Religion" name="religion" defaultValue={!user.religion ? ' ' : user.religion}/>
                                </div>
                              
                                <div className="col-md-6">
                                <label>Blood Group</label>
                                  <input type="text" className="form-control" id="bloodgroup" placeholder="Blood Group" name="bloodgroup" defaultValue={!user.bloodGroup ? ' ' : user.bloodGroup}/>   
                                </div>
                              </div>
                          </div>

                          
                          <div className="form-group">
                                <label>Present Address</label>
                                  <textarea type="text" className="form-control" id="presentAddress" placeholder="Present Address" name="presentAddress" defaultValue={!user.presentAddress ? ' ' : user.presentAddress}/>
                          </div>

                          <div className="form-group">
                                <label>Parmanent Address</label>
                                  <textarea type="text" className="form-control" id="parmanentAddress" placeholder="Parmanent Address" name="parmanentAddress" defaultValue={!user.parmanentAddress ? ' ' : user.parmanentAddress}/>
                          </div> */}

                      </section>
{/* 
                      <section className='profile-form-section'>
                          <h2>Gurdian Information</h2>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Father's Name</label>
                                <input type="text" className="form-control" id="fatherName" placeholder="Father's Name" name="fatherName" defaultValue={!user.firstName ? ' ' : user.firstName}/>   
                                </div>
                              
                                <div className="col-md-6">
                                <label>Mobile</label>
                                  <input type="text" className="form-control" id="fathersPhone" placeholder="Mobile" name="fathersMobileNo" defaultValue={!user.fathersMobileNo ? ' ' : user.fathersMobileNo}/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Mother's Name</label>
                                  <input type="text" className="form-control" id="motherName" placeholder="Mother's Name" name="motherName" defaultValue={!user.mothersName ? ' ' : user.mothersName}/>    
                                </div>
                              
                                <div className="col-md-6">
                                <label>Mobile</label>
                                  <input type="text" className="form-control" id="mothersPhone" placeholder="Mobile" name="mothersMobileNo" defaultValue={!user.mothersMobileNo ? ' ' : user.mothersMobileNo}/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Local Gurdian</label>
                                  <input type="text" className="form-control" id="localGurdianName" placeholder="Local Gurdian" name="localGurdianName" defaultValue={!user.localGurdianName ? ' ' : user.localGurdianName}/>    
                                </div>
                              
                                <div className="col-md-6">
                                <label>Mobile</label>
                                  <input type="text" className="form-control" id="localGurdianPhone" placeholder="Mobile" name="localGurdianPhone" defaultValue={!user.localGurdianMobileNo ? ' ' : user.localGurdianMobileNo}/>   
                                </div>

                                <div className='col-md-6'>
                                <label>Relation With Local Gurdian</label>
                                  <input type="text" className="form-control" id="relationWithLocalGurdian" placeholder="Relation With Local Gurdian" name="relationWithLocalGurdian" defaultValue={!user.firstName ? ' ' : user.localGurdianAddress}/>    
                                </div>
                              
                                <div className="col-md-6">
                                <label>Local Gurdian Address</label>
                                  <input type="text" className="form-control" id="localGurdianAddress" placeholder="Local Gurdian Address" name="localGurdianAddress" defaultValue={!user.firstName ? ' ' : user.relationWithLocalGurdian}/>   
                                </div>

                              </div>
                          </div>

                      </section> */}
                    </div>

                </div>
          </div>
          </form>
    </> 
  )
}

export default ProfileUpdate