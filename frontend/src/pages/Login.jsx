import { useState } from 'react'
import AdminForm from "../components/AdminForm";
import StudentForm from "../components/StudentForm";

function Login() {
 
  const [show, setshow] = useState("studentForm");

  return (
    <div className="loginform">
      <ul className="tab-group">
        <li className="tab std"><a onClick={() => setshow("studentForm")}>Student Login</a></li>
        <li className="tab adm"><a onClick={() => setshow("adminForm")} >Admin Login</a></li>
      </ul>
      <div className="tab-content">
      {show === "studentForm" && <StudentForm/>}
      {show === "adminForm" && <AdminForm/>}
      </div>
   </div>
  )
}

export default Login