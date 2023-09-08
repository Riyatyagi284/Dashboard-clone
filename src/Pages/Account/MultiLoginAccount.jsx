import React from 'react'
import { AiOutlineCheck } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"

const MultiLoginAccount = () => {
  return (
    <>
      <div className="multi-login-container">
        <div className="M-login-header">
          <h2>MULTI LOGIN ACCOUNT</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Multi Login Account</span>
          </div>
        </div>

        <div className="container white-bg">
          <div className="form-parent">
            <p>Personal Information</p>
            <div className="container">
              <form>
                <div className="form-row">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <label htmlFor="client_id">Client Id</label>
                        <input type="text" className="form-control multi-Acc-form" id="client_id" />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" className="form-control multi-Acc-form" id="fullName" />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control multi-Acc-form" id="inputPassword4" />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputPassword">Confirm Password</label>
                        <input type="text" className="form-control multi-Acc-form" id="inputPassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="container">
              <div className="row priviledge-box">
                <div className="col-md-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      All
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Bank
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      General Lock
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Market Search Analysis
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      User Info
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      CouponReport
                    </label>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Dashboard
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Account Statement
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Casino Result
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Login User Creation
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      User Password Change
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      active user
                    </label>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Market Analysis
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Party win loss
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Live casino result
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Withdraw
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      User Lock
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      fraud report
                    </label>
                  </div>
                </div>


                <div className="col-md-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      User List
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Current Bets
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Our Casino
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Deposit
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Bet Lock
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Currency Permission
                    </label>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Insert User
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      User History
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Events
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Credit Reference
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      TurnOver
                    </label>
                  </div>
                </div>

              </div>
            </div>

            <div className="btn-groups">
              <button className="btn" type="submit">Transection Code</button>
              <button className="btn btn-green" type="submit">Submit</button>
              <button className="btn btn-grey" type="submit">Reset</button>
            </div>
          </div>

            <div className="table-section">
              <table className='table table-bordered'>
                {/* <div className="table table-bordered"> */}
                  <tbody>
                    <tr className='table-row'>
                      <th className='fixed-col-1 '>Action</th>
                      <th className='fixed-col-2'>Username</th>
                      <th className='fixed-col-3'>Full Name</th>
                    </tr>

                    <tr className='flex'>
                      <td className='fixed-col-1' id="fixed-col-1">
                        <a className='text-white btn1'>U</a>
                        <a className='text-white btn2'>S</a>
                        <a className='text-white btn3'>P</a>
                      </td>
                      <td className='fixed-col-2 flex' id="fixed-col-2">
                        <p>wwwwwwweeeu1</p>
                        <AiOutlineCheck />
                      </td>
                      <td className='fixed-col-3' id="fixed-col-3">
                        mlllllll
                      </td>

                    </tr>
                  </tbody>
                {/* </div> */}
              </table>

              <div className=" overflow-x-scroll">
                <table className='table table-bordered'>
                  <tbody>
                    <tr>
                      <th id="dash">Dashboard</th>
                      <th>Market Analysis</th>
                      <th>User List</th>
                      <th>Insert User</th>
                      <th>Bank</th>
                      <th>Account Statement</th>
                      <th>Party Win Loss</th>
                      <th>Current Bets</th>
                      <th>User History</th>
                      <th>General Lock</th>
                      <th>Casino Result</th>
                      <th>Live Casino Result</th>
                      <th>Our casino</th>
                      <th>Events</th>
                      <th>Market Search Analysis</th>
                      <th>Login User Creation </th>
                      <th>Withdraw</th>
                      <th>Deposit</th>
                      <th>Credit Reference</th>
                      <th>User Info</th>
                      <th>User Password Change</th>
                      <th>User Lock</th>
                      <th>Bet Lock</th>
                      <th>TurnOver</th>
                      <th>CouponReport</th>
                      <th>activeUser</th>
                      <th>fraud Report</th>
                      <th>Currency Permission</th>
                    </tr>

                    <tr>
                      <td className='text-center' id="dash">
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td><td className='text-center'>
                        <BsCircle />
                      </td>
                      <td className='text-center'>
                        <BsCircle />
                      </td>

                    </tr>
                  </tbody>
                </table>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default MultiLoginAccount