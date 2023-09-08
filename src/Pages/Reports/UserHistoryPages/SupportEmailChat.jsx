import React,{useState} from 'react'
import { FaFileExcel } from "react-icons/fa"
import HistoryLoad from '../../../SubPages/UserHistory/SupportEmailChatHistoryLoad'
import HistoryReset from '../../../SubPages/UserHistory/HistoryReset'
import Loader from '../../Loader'
import 'react-calendar/dist/Calendar.css'
import Userlist from "../../../../src/pdfFile/Userlist.pdf"


const SupportEmailChat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, onChange] = useState(new Date());
  const [currentPage, setCurrentPage] = useState('')


  const handleSupportEmailChatLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
      setCurrentPage('Load');
    }, 2000)
  };

  const handleSupportEmailChatResetBtnClick = () => {
    setCurrentPage(null);
    setIsLoaded(false);
    setCurrentPage("Reset")
  }


  return (
    <div>
      {isLoading && <Loader />}
      <div className="container-fluid">
              <div className="row search-bar">
                <div className="col-md-10 search-form">
                  <input type="text" class="form-control" id="client_id" placeholder='Search User' />


                  {/* <div>
                    <Calendar id="History-calender" onChange={onChange} value={value} />
                  </div> */}

                  <button className="btn btn-black" onClick={handleSupportEmailChatLoadClick} type="submit">Load</button>
                  <button className="btn btn-grey" type="submit" onClick={handleSupportEmailChatResetBtnClick}>Reset</button>

                  <div className="search-form-right ">
                    <div className='party-search'>

                    <a href={Userlist} download="test">
                      <button className="btn btn-green-file" type="submit">
                        <FaFileExcel />
                      </button>
                      </a>

                      <a href={Userlist} download="test">
                      <button className="btn btn-red-file" type="submit">
                        <FaFileExcel />
                      </button>
                      </a>
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

              {currentPage === 'Load' && <HistoryLoad />}
              {currentPage === 'Reset' && <HistoryReset />}

              {!currentPage && !isLoaded && (
                <>
                  <div className="table-responsive">
                    <div className="table table-responsive-sm">
                      <table className='table table-bordered reset-table'>
                      <thead>
                    <tr>
                      <th role="columnheader"  >
                        <div>All Chats</div>
                      </th>

                      <th role="columnheader"  >
                        <div>All Chats With Revert Message</div>
                      </th>

                      <th role="columnheader"  >
                        <div>Message Revert By</div>
                      </th>

                      <th role="columnheader"  >
                        <div>Message Date</div>
                      </th>

                      <th role="columnheader"  >
                        <div>Message Time</div>
                      </th>
                    </tr>
                  </thead>

                        <tbody>
                          <tr >
                            <td colSpan={8} className="reset-td reset-td-right" style={{textAlign:"center"}}>
                              <span className="text-center">
                                There are no records to show .
                              </span>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
    </div>
  )
}

export default SupportEmailChat
