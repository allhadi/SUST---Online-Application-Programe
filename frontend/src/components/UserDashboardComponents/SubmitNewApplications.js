import { useState } from 'react'
import ApplicationForTranscript from './ApplicationComponents/ApplicationForTranscript';
import ApplicationForCertificate from './ApplicationComponents/ApplicationForCertificate';
import ApplicationForClearence from './ApplicationComponents/ApplicationForClearence';
import ApplicationForGradeSheet from './ApplicationComponents/ApplicationForGradeSheet';
function SubmitNewApplications() {

  const [show, setshow] = useState("Select Application Type");

  return (
    <>
      <div className='application-form-page'>
        <div className="application-selection">
            <button className="application-selection-drop">{show}</button>
            <div className="application-selection-drop-content">
              <a onClick={() => setshow("Application for Transcript")}>Application for Transcript</a>
              <a onClick={() => setshow("Application for Certificate")}>Application for Certificate</a>
              <a onClick={() => setshow("Application for Clearence")}>Application for Clearence</a>
              <a onClick={() => setshow("Application for Greadsheet")}>Application for Greadsheet</a>
            </div>
          </div>
          <div>
            {show === "Application for Transcript" && <ApplicationForTranscript/>}
            {show === "Application for Certificate" && <ApplicationForCertificate/>}
            {show === "Application for Clearence" && <ApplicationForClearence/>}
            {show === "Application for Greadsheet" && <ApplicationForGradeSheet/>}
          </div>
    </div>
    </>

  )
}

export default SubmitNewApplications