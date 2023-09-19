import React from 'react'


const Dashboard = () => {
    return (
        <>
            <div className="container-fluid stat-parent">
                <div className="row">
                    <div className="col-md-2 stat">
                        <p>Balance</p>
                        <h2>0.00</h2>
                    </div>
                    <div className="col-md-2 stat">
                        <p>Exposure</p>
                        <h2>0.00</h2>
                    </div>
                    <div className="col-md-2 stat">
                        <p>Credit pts</p>
                        <h2>0</h2>
                    </div>
                    <div className="col-md-2 stat">
                        <p>All pts</p>
                        <h2>0</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 stat">
                        <p>Sattlement pts</p>
                        <h2>0</h2>
                    </div>
                    <div className="col-md-2 stat">
                        <p>Upper pts</p>
                        <h2>0</h2>
                    </div>
                    <div className="col-md-2 stat">
                        <p>Down pts</p>
                        <h2>0</h2>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard