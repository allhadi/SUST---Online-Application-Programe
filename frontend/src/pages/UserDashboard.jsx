import { useState } from 'react'
import SubmitNewApplications from "../components/UserDashboardComponents/SubmitNewApplications"
import MyApplications from "../components/UserDashboardComponents/MyApplications";
import Profile from "../components/UserDashboardComponents/Profile";

function UserDashboard() {

  const [show, setshow] = useState("submitNewApplications");

  return (
   <>
    <div className="userDashboard">
      <div className="left-nav item2">
          <div className="dash-title">User Dashboard</div>
            <ul className="left-nav-items">
              <li onClick={() => setshow("profile")} >Profile <span>+</span></li>
              <li onClick={() => setshow("submitNewApplications")} >Submit New Application<span>+</span></li>
              <li onClick={() => setshow("myApplications")} >My Applications<span>+</span></li>
            </ul>
        </div>

        <div className="dashboard-body item3">
            {show === "submitNewApplications" && <SubmitNewApplications/>}
            {show === "profile" && <Profile/>}
            {show === "myApplications" && <MyApplications/>}
        </div>
    </div>
   </>
  )
}

export default UserDashboard