import React from 'react'

export const Dashboard = () => {
  return <>
<div>
  <div className="row">
    <div className="col-lg-4 col-6">
      <div className="small-box bg-primary">
        <div className="inner">
          <h3>5</h3>
          <p>Total Orders</p>
        </div>
        <div className="icon">
          <i className="fas fa-ship" />
        </div>
        <a href className="small-box-footer">
          More info <i className="fas fa-arrow-circle-right" /></a>
      </div>
    </div>
    <div className="col-lg-4 col-6">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>3</h3>
          <p>Pending Orders</p>
        </div>
        <div className="icon">
          <i className="fas fa-ship" />
        </div>
        <a href className="small-box-footer">
          More info <i className="fas fa-arrow-circle-right" /></a>
      </div>
    </div>
    <div className="col-lg-4 col-6">
      <div className="small-box bg-danger">
        <div className="inner">
          <h3>4</h3>
          <p>Complete Orders</p>
        </div>
        <div className="icon">
          <i className="fas fa-chart-pie" />
        </div>
        <a href className="small-box-footer">
          More info <i className="fas fa-arrow-circle-right" /></a>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header">
      <div className="row">
        <div className="col-md-6">
          <h4>Admin Heading</h4>
        </div>
      </div>
    </div>
    <div className="card-body">
      <div id>
      </div> 
    </div>
  </div>
</div>

        </>
}
