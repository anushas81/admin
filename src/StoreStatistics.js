import React from "react";
import { Link } from 'react-router-dom';
import PieChart1 from "./PieChart1";
import PieChart2 from "./PieChart2";
import BarChart from "./BarChart";
import UpArrow from './img/up.svg';
import DownArrow from './img/down.svg';
class StoreStatistics extends React.Component {
  render() {
    return (
   <div>

<div className="row">
                <div className="col-md-6 col-xl-4 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="title-wrap d-flex justify-content-between">
                            <h4>Shops Occupancy</h4>
                            <div className="total-wrap text-right">
                                <h5>Total Shops</h5>
                                <span>120</span>
                            </div>
                        </div>
                        <div className="content-wrap d-flex">
                        <PieChart1 />
                        </div>
                        <Link to='/ShopsOccupancyAll' className="show_all float-right" >Show All</Link>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="title-wrap d-flex justify-content-between">
                            <h4>Advertisement Spaces</h4>
                            <div className="total-wrap text-right">
                                <h5>Total Ad Spaces</h5>
                                <span>600</span>
                            </div>
                        </div>
                        <div className="content-wrap d-flex">
                            <PieChart2 />
                        </div>
                        <a href="#" className="show_all">Show All</a>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="title-wrap d-flex justify-content-between">
                            <h4>Shopper Traffic</h4>
                            <div className="total-wrap text-right">
                                <h5>Total Clicks</h5>
                                <span>300,000</span>
                            </div>
                        </div>
                        <div className="content-wrap d-flex">
                            <BarChart />

                        </div>
                        <a href="#" className="show_all">Show All</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="indicater mb-3 d-flex justify-content-end">
                            <img src={UpArrow} alt="" />
                        </div>
                        <div className="total-wrap d-flex justify-content-between align-items-center">
                            <p>Mall Visitors</p>
                            <span>32,634</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="indicater mb-3 d-flex justify-content-end">
                            <img src={DownArrow} alt="" />
                        </div>
                        <div className="total-wrap d-flex justify-content-between align-items-center">
                            <p>3D Trials</p>
                            <span>120,000</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="indicater mb-3 d-flex justify-content-end">
                            <img src={UpArrow} alt="" />
                        </div>
                        <div className="total-wrap d-flex justify-content-between align-items-center">
                            <p>Checkouts</p>
                            <span>90,000</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="indicater mb-3 d-flex justify-content-end">
                            <img src={UpArrow} alt="" />
                        </div>
                        <div className="total-wrap d-flex justify-content-between align-items-center">
                            <p>Feedback</p>
                            <span>5,560</span>
                        </div>
                    </div>
                </div>
            </div>
       
       
   </div>
    );
  }
}

export default StoreStatistics;
