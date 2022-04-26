function Profile() {
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
                                  <input type="text" className="form-control" placeholder='First Name' id="fName" name="fName" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder="Last Name" id="lName" name="lName" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" placeholder='Registration No' id="regiNo" name="regiNo" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder="Department" id="department" name="department" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" placeholder='Admission Date' id="addmissionDate" name="addmissionDate" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder="Course" id="course" name="course" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                          <div className="row">
                                <div className='col-md-6'>
                                  <input type="email" className="form-control" placeholder='Email' id="email" name="email" readOnly/>
                                </div>

                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder="National ID" id="nid" name="nid" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="mobile" placeholder="Mobile Number" name="mobile" readOnly/>
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="birthdate" placeholder="Birth Date" name="birthdate" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="gender" placeholder="Gender" name="gender" readOnly/>
                                </div>
                              
                                <div className="col-md-6">
                                <input type="text" className="form-control" id="nationality" placeholder="Nationality" name="nationality" readOnly/>
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="religion" placeholder="Religion" name="religion" readOnly/>
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="bloodgroup" placeholder="Blood Group" name="bloodgroup" readOnly/>   
                                </div>
                              </div>
                          </div>

                          
                          <div className="form-group">
                                  <textarea type="text" className="form-control" id="presentAddress" placeholder="Present Address" name="presentAddress" readOnly/>
                          </div>

                          <div className="form-group">
                                  <textarea type="text" className="form-control" id="parmanentAddress" placeholder="Parmanent Address" name="parmanentAddress" readOnly/>
                          </div>

                      </section>

                      <section className='profile-form-section'>
                          <h2>Gurdian Information</h2>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                <input type="text" className="form-control" id="fatherName" placeholder="Father's Name" name="fatherName" readOnly/>   
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="fathersPhone" placeholder="Mobile" name="fathersPhone" readOnly/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="motherName" placeholder="Mother's Name" name="motherName" readOnly/>    
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="mothersPhone" placeholder="Mobile" name="mothersPhone" readOnly/>   
                                </div>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="row">
                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="localGurdianName" placeholder="Local Gurdian" name="localGurdianName" readOnly/>    
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="localGurdianPhone" placeholder="Mobile" name="localGurdianPhone" readOnly/>   
                                </div>

                                <div className='col-md-6'>
                                  <input type="text" className="form-control" id="relationWithLocalGurdian" placeholder="Relation With Local Gurdian" name="relationWithLocalGurdian" readOnly/>    
                                </div>
                              
                                <div className="col-md-6">
                                  <input type="text" className="form-control" id="localGurdianAddress" placeholder="Local Gurdian Address" name="localGurdianAddress" readOnly/>   
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