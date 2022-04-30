import { useSelector } from 'react-redux'

function Profile() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
          <div className='row'>
                <div className="col-md-3">
                    <div className="profile-img">
                    <img src={require('../../../assets/images/profile.png')} />
                    </div>
                    <input className='profile-image-input' type="file" id="img" name="img" accept="image/*" readOnly/>
                </div>

                <div className='col-md-9'>

                    <div className='form-horizontal'>
                      <section className='profile-form-section'>
                          <h2>Personal Information</h2>
                           <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" placeholder={!user.firstName ? 'First Name' : user.firstName} id="fName" name="fName" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder={!user.firstName ? 'Last Name' : user.firstName} id="lName" name="lName" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" placeholder={!user.email ? 'success' : user.email} id="regiNo" name="regiNo" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder={!user.firstName ? 'Department' : user.firstName} id="department" name="department" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" placeholder={!user.firstName ? 'Admission Date' : user.firstName} id="addmissionDate" name="addmissionDate" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder={!user.firstName ? 'Course' : user.firstName} id="course" name="course" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                  <input type="email" className="form-control" placeholder={!user.firstName ? 'Email' : user.firstName} id="email" name="email" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder={!user.firstName ? 'National ID' : user.firstName} id="nid" name="nid" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="mobile" placeholder={!user.firstName ? 'Mobile Number' : user.firstName} name="mobile" readOnly/>
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="birthdate" placeholder={!user.firstName ? 'Date of Birth' : user.firstName} name="birthdate" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="gender" placeholder={!user.firstName ? 'Gender' : user.firstName} name="gender" readOnly/>
                                </div>
                              
                                <div className="col-md-6">
                                <input type="text" className="form-control" id="nationality" placeholder={!user.firstName ? 'Nationality' : user.firstName} name="nationality" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="religion" placeholder={!user.firstName ? 'Religion' : user.firstName} name="religion" readOnly/>
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="bloodgroup" placeholder={!user.firstName ? 'Blood Group' : user.firstName} name="bloodgroup" readOnly/>   
                                </div>
                              </div>
                          </div>

                          
                          <div className="form-group">
                                  <textarea type="text" className="form-control" id="presentAddress" placeholder={!user.firstName ? 'Present Address' : user.firstName} name="presentAddress" readOnly/>
                          </div>

                          <div className="form-group">
                                  <textarea type="text" className="form-control" id="parmanentAddress" placeholder={!user.firstName ? 'Parmanent Address' : user.firstName} name="parmanentAddress" readOnly/>
                          </div>

                      </section>

                      <section className='profile-form-section'>
                          <h2>Gurdian Information</h2>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <input type="text" className="form-control" id="fatherName" placeholder={!user.firstName ? 'Fathers Name' : user.firstName} name="fatherName" readOnly/>   
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="fathersPhone" placeholder={!user.firstName ? 'Mobile' : user.firstName} name="fathersPhone" readOnly/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="motherName" placeholder={!user.firstName ? 'Mother Name' : user.firstName} name="motherName" readOnly/>    
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="mothersPhone" placeholder={!user.firstName ? 'Mobile' : user.firstName} name="mothersPhone" readOnly/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="localGurdianName" placeholder={!user.firstName ? 'Local Gurdian' : user.firstName} name="localGurdianName" readOnly/>    
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="localGurdianPhone" placeholder={!user.firstName ? 'Mobile' : user.firstName} name="localGurdianPhone" readOnly/>   
                                </div>

                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="relationWithLocalGurdian" placeholder={!user.firstName ? 'Relation With local gurdian' : user.firstName} name="relationWithLocalGurdian" readOnly/>    
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="localGurdianAddress" placeholder={!user.firstName ? 'Local gurdian address' : user.firstName} name="localGurdianAddress" readOnly/>   
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

export default Profile