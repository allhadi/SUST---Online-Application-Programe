
function Profile() {
  return (
    <>
    <div className="container">
      <h1>Profile</h1>
      <div className="row">
          <div className="col-md-3">
              <div className="profile-img">
                <img src={require('../../assets/images/profile.png')} />
              </div>
          </div>
          <div className="col-md-9">
                  main
          </div>
      </div>
    </div>
    </>
  )
}

export default Profile