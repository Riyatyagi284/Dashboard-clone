import React from 'react'
import {AiFillEye} from "react-icons/ai";

const HistoryLoad = () => {
  return (
    <>
      <div className="table-responsive">
        <div className="table table-responsive-sm">
          <table className='table load-table'>
            <thead>
              <tr>
                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>User Name</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Date</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>IP</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Detail</div>
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <span>Rakesh2</span>
                </td>
                <td>29/07/2023 00:58:50</td>
                <td>103.211.52.118</td>
                <td><AiFillEye/></td>
              </tr>

              <tr>
                <td>
                  <span>Rakesh2</span>
                </td>
                <td>29/07/2023 00:58:50</td>
                <td>103.211.52.118</td>
                <td><AiFillEye/></td>
              </tr>

              <tr>
                <td>
                  <span>Rakesh2</span>
                </td>
                <td>29/07/2023 00:58:50</td>
                <td>103.211.52.118</td>
                <td><AiFillEye/></td>
              </tr>

              <tr>
                <td>
                  <span>Rakesh2</span>
                </td>
                <td>29/07/2023 00:58:50</td>
                <td>103.211.52.118</td>
                <td><AiFillEye/></td>
              </tr>

              <tr>
                <td>
                  <span>Rakesh2</span>
                </td>
                <td>29/07/2023 00:58:50</td>
                <td>103.211.52.118</td>
                <td><AiFillEye/></td>
              </tr>

              <tr>
                <td>
                  <span>Rakesh2</span>
                </td>
                <td>29/07/2023 00:58:50</td>
                <td>103.211.52.118</td>
                <td><AiFillEye/></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default HistoryLoad
