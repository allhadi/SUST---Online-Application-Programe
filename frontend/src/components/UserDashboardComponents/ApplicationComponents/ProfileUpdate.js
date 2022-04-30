import { useSelector } from 'react-redux'

function ProfileUpadte() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
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
                                  <input type="text" className="form-control" value={!user.firstName ? ' ' : user.firstName} placeholder='First Name' id="fName" name="firstName"/>
                                </div>

                                <div className='col-md-6'>
                                <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" id="lName" name="lastName" value={!user.lastName ? ' ' : user.lastName}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                <label>Registration No</label>
                                  <input type="text" className="form-control" placeholder='Registration No' id="regiNo" name="regiNo"  value={!user.email ? ' ' : user.email} readOnly/>
                                </div>

                                <div className='col-md-6'>
                                <label>Department</label>
                                    <input type="text" className="form-control" placeholder="Department" id="department" name="department" value={!user.department ? ' ' : user.department}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                <label>Admission Date</label>
                                  <input type="text" className="form-control" placeholder='Admission Date' id="addmissionDate" name="admissionDate" value={!user.admissionDate ? ' ' : user.admissionDate}/>
                                </div>

                                <div className='col-md-6'>
                                <label>Course</label>
                                    <input type="text" className="form-control" placeholder="Course" id="course" name="course" value={!user.course ? ' ' : user.course}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                <label>Email</label>
                                  <input type="email" className="form-control" placeholder='Email' id="email" name="email" value={!user.email ? ' ' : user.email}/>
                                </div>

                                <div className='col-md-6'>
                                <label>National ID</label>
                                    <input type="text" className="form-control" placeholder="National ID" id="nid" name="nationalID" value={!user.nationalID ? ' ' : user.nationalID}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Mobile Number</label>
                                  <input type="text" className="form-control" id="mobile" placeholder="Mobile Number" name="mobileNumber" value={!user.mobileNumber ? ' ' : user.mobileNumber}/>
                                </div>
                              
                                <div className="col-md-6">
                                <label>Birth Date</label>
                                  <input type="text" className="form-control" id="birthdate" placeholder="Birth Date" name="birthdate" value={!user.birthDate ? ' ' : user.birthDate}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Gender</label>
                                  <input type="text" className="form-control" id="gender" placeholder="Gender" name="gender" value={!user.gender ? ' ' : user.gender}/>
                                </div>
                              
                                <div className="col-md-6">
                                <label>Nationality</label>
                                <input type="text" className="form-control" id="nationality" placeholder="Nationality" name="nationality" value={!user.nationality ? ' ' : user.nationality}/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Religion</label>
                                  <input type="text" className="form-control" id="religion" placeholder="Religion" name="religion" value={!user.religion ? ' ' : user.religion}/>
                                </div>
                              
                                <div className="col-md-6">
                                <label>Blood Group</label>
                                  <input type="text" className="form-control" id="bloodgroup" placeholder="Blood Group" name="bloodgroup" value={!user.bloodGroup ? ' ' : user.bloodGroup}/>   
                                </div>
                              </div>
                          </div>

                          
                          <div className="form-group">
                                <label>Present Address</label>
                                  <textarea type="text" className="form-control" id="presentAddress" placeholder="Present Address" name="presentAddress" value={!user.presentAddress ? ' ' : user.presentAddress}/>
                          </div>

                          <div className="form-group">
                                <label>Parmanent Address</label>
                                  <textarea type="text" className="form-control" id="parmanentAddress" placeholder="Parmanent Address" name="parmanentAddress" value={!user.parmanentAddress ? ' ' : user.parmanentAddress}/>
                          </div>

                      </section>

                      <section className='profile-form-section'>
                          <h2>Gurdian Information</h2>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Father's Name</label>
                                <input type="text" className="form-control" id="fatherName" placeholder="Father's Name" name="fatherName" value={!user.firstName ? ' ' : user.firstName}/>   
                                </div>
                              
                                <div className="col-md-6">
                                <label>Mobile</label>
                                  <input type="text" className="form-control" id="fathersPhone" placeholder="Mobile" name="fathersMobileNo" value={!user.fathersMobileNo ? ' ' : user.fathersMobileNo}/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Mother's Name</label>
                                  <input type="text" className="form-control" id="motherName" placeholder="Mother's Name" name="motherName" value={!user.mothersName ? ' ' : user.mothersName}/>    
                                </div>
                              
                                <div className="col-md-6">
                                <label>Mobile</label>
                                  <input type="text" className="form-control" id="mothersPhone" placeholder="Mobile" name="mothersMobileNo" value={!user.mothersMobileNo ? ' ' : user.mothersMobileNo}/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <label>Local Gurdian</label>
                                  <input type="text" className="form-control" id="localGurdianName" placeholder="Local Gurdian" name="localGurdianName" value={!user.localGurdianName ? ' ' : user.localGurdianName}/>    
                                </div>
                              
                                <div className="col-md-6">
                                <label>Mobile</label>
                                  <input type="text" className="form-control" id="localGurdianPhone" placeholder="Mobile" name="localGurdianPhone" value={!user.localGurdianMobileNo ? ' ' : user.localGurdianMobileNo}/>   
                                </div>

                                <div className='col-md-6'>
                                <label>Relation With Local Gurdian</label>
                                  <input type="text" className="form-control" id="relationWithLocalGurdian" placeholder="Relation With Local Gurdian" name="relationWithLocalGurdian" value={!user.firstName ? ' ' : user.localGurdianAddress}/>    
                                </div>
                              
                                <div className="col-md-6">
                                <label>Local Gurdian Address</label>
                                  <input type="text" className="form-control" id="localGurdianAddress" placeholder="Local Gurdian Address" name="localGurdianAddress" value={!user.firstName ? ' ' : user.relationWithLocalGurdian}/>   
                                </div>

                              </div>
                          </div>

                      </section>
                    </div>

                </div>
          </div>
    </> 
  )
}

export default ProfileUpadte