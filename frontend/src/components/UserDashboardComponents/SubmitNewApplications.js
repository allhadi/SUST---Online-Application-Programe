import { useState } from 'react'
import TranscriptApplication from './ApplicationComponents/TranscriptApplication';
function SubmitNewApplications() {

  const [show, setshow] = useState("Select Application Type");

  return (
    <>
      <div className='application-form-page'>
        <div className="application-selection">
            <button className="application-selection-drop">{show}</button>
            <div className="application-selection-drop-content">
              <a onClick={() => setshow("Transcript Application")}>Application for Transcript</a>
              <a onClick={() => setshow("Application for Certificate")}>Application for Certificate</a>
              <a onClick={() => setshow("Application for Clearence")}>Application for Clearence</a>
            </div>
          </div>
          <div>
            {show === "Transcript Application" && <TranscriptApplication/>}
          </div>
    </div>
    </>

  )
}

export default SubmitNewApplications