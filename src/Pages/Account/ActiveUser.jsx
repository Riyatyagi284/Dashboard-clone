import React from 'react'
import { useState } from 'react'
import { FaFileExcel } from "react-icons/fa"
import DepositeForm from "./AccountFunctionalities/DepositeForm"
import WithdrawForm from './AccountFunctionalities/WithdrawForm'
import { useNavigate} from "react-router-dom"
import MoreForm from './AccountFunctionalities/MoreForm'
import Loader from '../Loader'
 
const ActiveUser = () => {
  const navigate = useNavigate()
   const [showDeposite,setShowDeposite] = useState(false);
   const [showWithdraw,setShowWithdraw] = useState(false);
   const [showMore,setShowMore] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
 
   const navigateToCreateUser = () => {
    navigate('/account/create-account');
  };
  

   const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleDownloadClick = () => {
    // const pdfURL = "file:///C:/Users/Administrator/Desktop/Company-Work/Admin-Panel-Project/admin-panel/assets/files/userlist%20(1).pdf"; 
    const data = 'This is the content of the file.\nYou can replace it with your data.';
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = pdfURL;
    a.download = 'example.txt'; // Set the filename for the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the temporary URL
  };


   const handleDepositeToggle = () => {
    setShowDeposite(!showDeposite);
   };

   const handlewithdrawToggle = () => {
    setShowWithdraw(!showWithdraw);
   }
   const handleMoreToggle = () => {
    setShowMore(!showMore);
   }

  return (
    <>
      <div className="multi-login-container">
        <div className="M-login-header">
          <h2>ACCOUNT LIST FOR ACTIVE USERS</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Active Users</span>
          </div>
        </div>

        <div className="container-fluid white-bg">
          <div className="row search-bar">
            <div className="col-md-6 search-form">
              <input type="text" class="form-control" id="client_id" placeholder='Search User' />
              <button className="btn btn-black" type="submit" onClick={handleLoadClick}>Load</button>
              {isLoading && <Loader />}
              <button className="btn btn-grey" type="submit" onClick={handleLoadClick}>Reset</button>
            </div>

            <div className="col-md-6 search-form-right">
              <div>
                <button className="btn btn-green-file" type="submit"onClick={handleDownloadClick}>
                  <FaFileExcel />
                </button>
                <button className="btn btn-red-file" type="submit"onClick={handleDownloadClick}>
                  <FaFileExcel />
                </button>
              </div>
              <button className="btn btn-green create-acc" type="submit" onClick={navigateToCreateUser}>
                + Create Account
                </button>

            </div>

            {showDeposite && <DepositeForm onClose = {handleDepositeToggle}/>}
            {showWithdraw && <WithdrawForm onClose = {handlewithdrawToggle}/>}
            {showMore && <MoreForm onClose = {handleMoreToggle}/>}
           
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="datatable_length">
              <label>
                Show&nbsp;
                <select>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="250">250</option>
                  <option value="500">500</option>
                  <option value="750">750</option>
                  <option value="1000">1000</option>
                </select>
                &nbsp;entries
              </label>
            </div>
          </div>

          <div className="table-responsive">
            <div className="table table-responsive-sm">
              <table className='table b-table'>
                <thead>
                  <tr>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>User Name</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>CR</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>pts</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Cient(P/L)</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Exposure</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Available pts</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>B st</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>U st</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>PName</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Account Type</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Action</div>
                      {/* <span class="sr-only"> (Click to sort ascending)</span> */}
                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <span title="uuuuuuu">wwwwwwweeeu</span>
                    </td>

                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file" onClick={handleDepositeToggle}>D</button>
                        <button type="button" className="btn btn-red-file"onClick={handlewithdrawToggle}>W</button>
                        <button type="button" className="btn btn-blue-file" onClick={handleMoreToggle}>More</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span title="eeeee">wwwwwwweee</span>
                    </td>

                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file" onClick={handleDepositeToggle}>D</button>
                        <button type="button" className="btn btn-red-file"onClick={handlewithdrawToggle}>W</button>
                        <button type="button" className="btn btn-blue-file" onClick={handleMoreToggle}>More</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span title="wwwwwww">wwwwwww</span>
                    </td>

                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file" onClick={handleDepositeToggle}>D</button>
                        <button type="button" className="btn btn-red-file" onClick={handlewithdrawToggle}>W</button>
                        <button type="button" className="btn btn-blue-file" onClick={handleMoreToggle}>More</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span title="abcde">abcdefss</span>
                    </td>

                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file" onClick={handleDepositeToggle}>D</button>
                        <button type="button" className="btn btn-red-file"onClick={handlewithdrawToggle}>W</button>
                        <button type="button" className="btn btn-blue-file"onClick={handleMoreToggle}>More</button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          <nav aria-label="Page navigation example text-right">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  {/* <span class="sr-only">Previous</span> */}
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  {/* <span class="sr-only">Next</span> */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default ActiveUser
