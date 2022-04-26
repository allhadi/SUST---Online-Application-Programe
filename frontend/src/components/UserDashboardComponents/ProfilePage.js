import { useState } from 'react'
import Profile from './ApplicationComponents/Profile';
import ProfileUpdate from './ApplicationComponents/ProfileUpdate';

function ProfilePage() {

  const [show, setshow] = useState("Profile");
  const [profileComponent, setprofileComponent] = useState("componentActive");
  const [updateProfileComponent, setupdateProfileComponent] = useState("componentDeActive");

  const profileOnClick = ()  => {
    setshow("Profile");
    setprofileComponent("componentActive");
    setupdateProfileComponent("componentDeActive");
  };

  const editProfileOnClick = () => {
    setshow("Edit Profile");
    setprofileComponent("componentDeActive");
    setupdateProfileComponent("componentActive");
  };

  return (
    <>
      <div className='container'>
        <div className='page-title-div'>
            <h1 className="page-title">{show}</h1>
            <div className={updateProfileComponent}>
                 <button onClick={profileOnClick} className="btn btn-primary">Save Edit</button>
            </div>

            <div className={profileComponent}>
                  <button onClick={editProfileOnClick} className="btn btn-primary">Edit Profile</button>
            </div>
            
        </div>

           {show === "Profile" && <Profile/>}
           {show === "Edit Profile" && <ProfileUpdate/>}
      </div>
    </> 
  )
}

export default ProfilePage