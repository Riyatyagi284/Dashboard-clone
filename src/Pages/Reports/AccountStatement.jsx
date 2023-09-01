
import React, { useState } from 'react'
import { FaFileExcel } from "react-icons/fa"
import AccountLoad from '../../SubPages/AccountStatement/AccountLoad'
import AccountReset from '../../SubPages/AccountStatement/AccountReset'
import Loader from "../Loader"
// import { DatePicker } from "antd"
// const { RangePicker } = DatePicker;




const AccountStatement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [value, onChange] = useState(new Date());
  const [currentPage, setCurrentPage] = useState('')
  const [searchInput, setSearchInput] = useState("")
  const [dropdownMessage, setDropdownMessage] = useState("List is empty");
  // const [dates, setDates] = useState([]);


  const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
      setCurrentPage('Load');
    }, 2000)
  };

  const handleResetBtnClick = () => {
    setCurrentPage(null);
    setIsLoaded(false);
    setCurrentPage("Reset")
  }

  function isIncorrectStatement(inputValue) {
    const lowercaseInput = inputValue.toLowerCase();
    const pattern = /(.)\1/i;
    return pattern.test(lowercaseInput);
  }


  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    if (inputValue === "") {
      setDropdownMessage("List is empty");
    }
    else if (isIncorrectStatement(inputValue)) {
      setDropdownMessage('No Element found consider changing the search query');
    }
    else {
      setDropdownMessage("");
    }

  };

  return (
    <>
      <div className="M-login-header">
        <h2>Account Statement</h2>
        <div className="M-login-header-right">
          <a className='anchor M-login-anchor'>Home</a>
          <span className='span'>/User History</span>
        </div>
      </div>

      <div className="container-fluid white-bg bets-bg">
        <div className="tab-content more-tb-content bets-content">

          {isLoading && <Loader />}
          {activeTab === 0 &&
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group Acc-select1">
                    <label htmlFor="d-inline-block Acc-label">Search</label>

                    <input
                      type="text"
                      value={searchInput}
                      onChange={handleInputChange}
                      placeholder="Type a statement..."
                      id="d-inline-block"
                      className='Acc-search-input'
                    />
                    {dropdownMessage && <div className='Acc-dropdown'>{dropdownMessage}</div>}

                  </div>
                </div>

                {/* <div className="col-lg-3 Acc-main">
                 <input type={"date"} onChange={e=> setDate(e.target.value)}  />
              </div> */}

                {/* <div className="col-lg-3">
                  <RangePicker className='Acc-main' onChange={(value) => {
                    setDates(values)
                  }} />
                </div> */}


                <div className="col-lg-3">
                  <label htmlFor="d-inline-block Acc-label2-row1">Type</label>
                  <select className="form-select Acc-select" id='User-Type' aria-label="Default select example">
                    <option selected>Deposite Withdraw Report</option>
                    <option value="1">Game Report</option>
                  </select>
                </div>

              </div>

              <div className="row search-bar">
                <div className="col-md-10 search-form">
                  {/* <div>
                  <Calendar id="History-calender" onChange={onChange} value={value} />
                </div> */}

                  <button className="btn btn-black" onClick={handleLoadClick} type="submit">Load</button>
                  <button className="btn btn-grey" type="submit" onClick={handleResetBtnClick}>Reset</button>

                  <div className="search-form-right ">
                    <div className='party-search'>
                      <button className="btn btn-green-file" type="submit">
                        <FaFileExcel />
                      </button>
                      <button className="btn btn-red-file" type="submit">
                        <FaFileExcel />
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
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

                  <div className="col-md-6 party-search-right">
                    <input type="text" className="form-control" id="fullName" placeholder='search' />
                  </div>
                </div>
              </div>

              {currentPage === 'Load' && <AccountLoad />}
              {currentPage === 'Reset' && <AccountReset />}

              {!currentPage && !isLoaded && (
                <>
                  <div className="table-responsive">
                    <div className="table table-responsive-sm">
                      <table className='table load-table table-bordered reset-table'>
                        <thead>
                          <tr>
                            <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                              <div>Date</div>
                            </th>

                            <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                              <div>Sr. No.</div>
                            </th>

                            <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                              <div>Credit</div>
                            </th>

                            <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                              <div>Debit</div>
                            </th>

                            <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                              <div>pts</div>
                            </th>

                            <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                              <div>Remark</div>
                            </th>

                            <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                              <div>Fromto</div>
                            </th>

                          </tr>
                        </thead>

                        <tbody>

                          <tr >
                            <td colSpan={8} className="reset-td reset-td-right">
                              <div className="text-center">
                                There are no records to show .
                              </div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}

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
          }

        </div>
      </div>
    </>
  )
}

export default AccountStatement


