function AdminForm() {
  return (
    <>
        <form id="adm-login">
        <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email" required autocomplete="off" />
          </div>

          <div className="field-wrap">
            <label>
              Password<span className="req">*</span>
            </label>
            <input type="password" required autocomplete="off" />
          </div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          <button className="button-admin-login button-bloc">Login</button>
        </form>
    </>
  )
}

export default AdminForm