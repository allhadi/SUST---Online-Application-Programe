import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function AdminDashboard() {
  const { user } = useSelector((state) => state.auth)

  const [show, setshow] = useState("submitNewApplications");

  return (
   <>
    <div className="userDashboard">
      <div className="left-nav item2">
          <div className="dash-title">{user && user.userType}</div>
            <ul className="left-nav-items">
              <li onClick={() => setshow("profile")} >Profile <span>+</span></li>
              <li onClick={() => setshow("submitNewApplications")} >Submit New Application<span>+</span></li>
              <li onClick={() => setshow("myApplications")} >My Applications<span>+</span></li>
            </ul>
        </div>

        <div className="dashboard-body item3">
            
        </div>
    </div>
   </>
  )
}

export default AdminDashboard