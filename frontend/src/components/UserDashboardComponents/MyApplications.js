function MyApplications() {
  return (
    <>

        <table  className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Application Type</th>
              <th scope="col">Applied Date</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Transcript</td>
              <td>22/02/2021</td>
              <th scope="col"><button className="btn btn-primary" type="button">Status</button></th>
              <th scope="col"><button className="btn btn-warning" type="button">Edit</button></th>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Transcript</td>
              <td>22/02/2021</td>
              <th scope="col"><button className="btn btn-primary" type="button">Status</button></th>
              <th scope="col"><button className="btn btn-warning" type="button">Edit</button></th>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Transcript</td>
              <td>22/02/2021</td>
              <th scope="col"><button className="btn btn-primary" type="button">Status</button></th>
              <th scope="col"><button className="btn btn-warning" type="button">Edit</button></th>
            </tr>
          </tbody>
        </table>
    
    </>
  )
}

export default MyApplications