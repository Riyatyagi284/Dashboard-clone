import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCheck } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"
import { Link } from 'react-router-dom'


const CreateAccount = () => {
  const navigate = useNavigate();

  const navigateToActiveUser = () => {
    navigate('/account/account-list-for-active-user');
  };

  return (
    <>
      <div className="multi-login-container">
        <div className="M-login-header">
          <h2>MULTI LOGIN ACCOUNT</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>
              <Link to='/account/account-list-for-active-user' onClick={navigateToActiveUser}>/User</Link>/Multi Login Account
              </span>
          </div>
        </div>

        <div className="container white-bg-parent">
          <div className="row">
            <div className="col-md-6 white-bg1">
              <h2 className='Account-heading'>General Information</h2>
              <form className='create-Account-left-form'>
                <div className="form-group">
                  <label className="sr-only" htmlFor="inlineFormInputName2">UserName</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="UserName" />

                  <label className="sr-only" htmlFor="inlineFormInputName2">Full Name</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Full Name" />

                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />

                  <label htmlFor="inputPassword3" className="col-form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" />

                  <label htmlFor="validationDefault03">City</label>
                  <input type="text" className="form-control" id="validationDefault03" placeholder="City" required />

                  <label htmlFor="mobileField">Mobile Number:</label>
                  <input type="tel" id="mobileField" className="form-control" placeholder="Enter your mobile number" />
                </div>
              </form>
            </div>

            <div className="col-md-6 white-bg2">
              <form className='create-Account-right-form'>
                <div className="form-group">
                  <label className="sr-only" htmlFor="Credit-Amount">Credit Amount:</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="Credit-Amount" placeholder="Credit Amount" />

                  <label className="sr-only" htmlFor="User-Type">User Type: *</label>
                  <select className="form-select select" id='User-Type' aria-label="Default select example">
                    <option >select User Type</option>
                    <option value="1">Master</option>
                    <option value="2">Agent</option>
                    <option value="3">User</option>
                  </select>

                  <p className='Account-para'>Partnership Information</p>

                  <label className="sr-only" htmlFor="User-Rate">User Rate:</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="User-Rate" placeholder='User Rate' />

                  <label htmlFor="Remark">Remark:</label>
                  <textarea placeholder="Remark" data-vv-as="Remark" name="remark" className="form-control" aria-required="false" aria-invalid="false" id='Remark'></textarea>

                  <div className="row Acc-bottom">
                    <div className="col-md-9">
                      <input type="text" className="form-control mb-2 mr-sm-2" id="Credit-Amount submit-left" placeholder="Transaction Code" />
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-black" id="create-btn" type="submit">Submit</button>
                    </div>

                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default CreateAccount