import React from 'react'
import { useState } from 'react'
import { FaFileExcel } from "react-icons/fa"
import { AiOutlineArrowRight } from "react-icons/ai"
import {Navigate, useNavigate} from "react-router-dom"
import Loader from './Loader'

const Bank = () => {
  const navigate = useNavigate()
  const [showDeposite,setShowDeposite] = useState(false);
  const [showWithdraw,setShowWithdraw] = useState(false);
  const [showMore,setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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

  const navigateToCreateAccount  = () => {
    navigate('/create-account')
  }

  return (
    <>
      <div className="multi-login-container">
        <div className="M-login-header">
          <h2>Bank</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Bank</span>
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
                <button className="btn btn-green-file" type="submit">
                  <FaFileExcel />
                </button>
                <button className="btn btn-red-file" type="submit">
                  <FaFileExcel />
                </button>
              </div>
              <button className="btn btn-green create-acc" type="submit" onClick={navigateToCreateAccount}>
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
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>CR</div>
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>pts</div>
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Cient(P/L)</div>
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Exposure</div>
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Available pts</div>
                    </th>
                    
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Account Type</div>
                    </th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Action</div>
                    </th>

                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                      <div>Status</div>
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
                    <td>User</td>

                    <td className='bank-td'>
                      <a className='bank-anchor'>
                        All <AiOutlineArrowRight fontSize={14}/>
                      </a>
                      <input type="number" name="amount" placeholder="0" className="form-control form-control-sm bank-input"/>
                      <button className='btn btn-green btn-blue bn-green '>Submit</button>
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
                    <td>Agent</td>

                    <td className='bank-td'>
                      <a className='bank-anchor'>
                        All <AiOutlineArrowRight fontSize={14}/>
                      </a>
                      <input type="number" name="amount" placeholder="0" className="form-control form-control-sm bank-input"/>
                      <button className='btn btn-green btn-blue bn-green '>Submit</button>
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
                    <td>Master</td>

                    <td className='bank-td'>
                      <a className='bank-anchor'>
                        All <AiOutlineArrowRight fontSize={14}/>
                      </a>
                      <input type="number" name="amount" placeholder="0" className="form-control form-control-sm bank-input"/>
                      <button className='btn btn-green btn-blue bn-green '>Submit</button>
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
                    <td>User</td>

                    <td className='bank-td'>
                      <a className='bank-anchor'>
                        All <AiOutlineArrowRight fontSize={14}/>
                      </a>
                      <input type="number" name="amount" placeholder="0" className="form-control form-control-sm bank-input"/>
                      <button className='btn btn-green btn-blue bn-green '>Submit</button>
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

export default Bank