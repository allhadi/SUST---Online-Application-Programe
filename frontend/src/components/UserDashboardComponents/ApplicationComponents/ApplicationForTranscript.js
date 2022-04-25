
function TranscriptApplication() {
  return (
    <>
     <div className="container">
      <h1>Application for Transcript</h1>

      <div className="apform">
          <form>
          <div className="form-group">
            <input type="text" 
            className="form-control" 
            id="name" 
            placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <div className="form-section">
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Honours Registration No."
              />
              <input type="text" 
                className="form-control" 
                id="name" 
                placeholder="Session Year"
              />
            </div>
          </div>

          <div className="form-group">
            <input type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <div className="form-section">
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Honours Registration No."
              />
              <input type="text" 
                className="form-control" 
                id="name" 
                placeholder="Session Year"
              />
            </div>
          </div>

          <div className="form-group">
            <input type="text" 
            className="form-control" 
            id="college" 
            placeholder="Discipline/College Name"
            />
          </div>

          <div className="form-group">
            <input type="text" 
            className="form-control" 
            id="School" 
            placeholder="School Name"
            />
          </div>

          <div className="form-group">
            <textarea 
              className="form-control rounded-0" 
              id="address" 
              rows="3"
              placeholder="Delivery Institution Address"
            />
          </div>

          <div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label"  >Need a Photocopy</label>
          </div>
          
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
            <label className="form-check-label"  >Gread Sheet Photocopy</label>
          </div>
           
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck3"/>
            <label className="form-check-label"  >Mark Sheet Photocopy</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck4"/>
            <label className="form-check-label"  >Certificate Photocopy</label>
          </div>
          </div>


          <div className="form-group">
            <input type="text" 
            className="form-control" 
            id="School" 
            placeholder="Student Mobile Number"
            />
          </div>

          <div className="form-group">
            <textarea 
              className="form-control rounded-0" 
              id="address" 
              rows="3"
              placeholder="Student Current Address"
            />
          </div>
          <button type="button" className="btn btn-secondary btn-lg btn-block">Submit Application</button>
          </form>
      </div>
    </div>
    </>
  )
}

export default TranscriptApplication