import React from "react";
import { Link } from 'react-router-dom';
import chart1 from './img/chart1.png';
import levelchart from './img/level-chart.jpg';
import CloseIcon from './img/close.svg';
import plusIcon from './img/plus.svg';
import minusIcon from './img/minus.svg';
import Filter from './img/filter.svg';
class ShopsOccupancyAll extends React.Component {
    render() {
        return (
            <div>
                   <div className="Dashboard-wrap">
                    <div className="heading mb-2">
                        <h3>Dashboard</h3>
                        <h4>Shops Occupancy</h4>
                       
                         <button type="button" className="btn-close float-right">
                             <Link to='/' className="show_all float-right" ><img src={CloseIcon} alt="" /></Link>

                        </button>
                        
                        
                    </div>
                    <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="title-wrap d-flex justify-content-end">
                            <div className="total-wrap text-right">
                                <h5>Total Ad Spaces</h5>
                                <span>600</span>
                            </div>
                        </div>
                        <div className="content-wrap d-flex flex-column mb-3">
                            <div className="round-chart">
                                <img src={chart1} alt="" />
                            </div>
                            <div className="content-block">
                                <ul>
                                    <li className="bg-lightblue">
                                        <p>Occupied Shops</p>
                                    </li>
                                    <li className="bg-blue">
                                        <p>Lease Processing</p>
                                    </li>
                                    <li className="bg-saffron">
                                        <p>Available Shops</p>
                                    </li>
                                    <li className="bg-brown">
                                        <p>Lease Expiring Soon</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="block-wrap d-flex flex-column">

                        <div className="title-wrap d-flex justify-content-between">
                            <div className="form-group">
                                <select className="form-control custom-select" data-role="select-dropdown">
                                    <option value="">Available Spaces</option>
                                    <option value="">Occupied Spaces</option>
                                    <option value="">Proposals</option>
                                    <option value="">In Process (TBD)</option>
                                </select>
                            </div>
                            <div className="total-wrap text-right">
                                <h5>Available Ad Spaces on <span>Level 4</span></h5>
                                <span>120</span>
                            </div>
                        </div>
                        <img src={levelchart} alt="" />
                        <div className="btn-zoom-block">
                            <button type="button" className="btn-zoom"><img src={minusIcon} alt="" /></button>
                            <button type="button" className="btn-zoom btn-plus"><img src={plusIcon} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

                    
                </div>
            
	  <div className="clicks-wrap">
            <div className="heading">
                <h4>Advertisement Spaces</h4>
            </div>
            <div className="clicks-table-wrap">
                <table id="advertiseTable" className="table" style={{'width':'100%'}}>
                    <thead>
                        <tr>
                            <th>Area/Store</th>
                            <th>Total Ad Spaces</th>
                            <th>Available Ad Spaces</th>
                            <th>Occupied Ad Spaces</th>
                            <th>Contact Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Main Lobby</b></td>
                            <td>500</td>
                            <td>345</td>
                            <td>155</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><b>Nike, Inc.</b></td>
                            <td>23</td>
                            <td>3</td>
                            <td>20</td>
                            <td>Yadira Redmond</td>
                        </tr>
                        <tr>
                            <td><b>Adidas</b></td>
                            <td>28</td>
                            <td>15</td>
                            <td>13 </td>
                            <td>Novalee Spicer</td>
                        </tr>
                        <tr>
                            <td><b>BVLGARI</b></td>
                            <td>30</td>
                            <td>20</td>
                            <td>10</td>
                            <td>Cedric Xiong</td>
                        </tr>

                        <tr>
                            <td><b>SWAROVSKI</b></td>
                            <td>23</td>
                            <td>0</td>
                            <td>23</td>
                            <td>Victor Hansen</td>
                        </tr>
                        <tr>
                            <td><b>HERMES PARIS</b></td>
                            <td>5</td>
                            <td>5</td>
                            <td>0</td>
                            <td>Avalon Carey</td>
                        </tr>
                        <tr>
                            <td><b>LOIS VUITTON</b></td>
                            <td>12</td>
                            <td>1</td>
                            <td>11</td>
                            <td>Ismael Mendez</td>
                        </tr>
                        <tr>
                            <td><b>GUCCI</b></td>
                            <td>20</td>
                            <td>10</td>
                            <td>10</td>
                            <td>Milagros Betts</td>
                        </tr>
                        <tr>
                            <td><b>ZARA</b></td>
                            <td>100</td>
                            <td>8</td>
                            <td>92</td>
                            <td>Becky George</td>
                        </tr>
                        <tr>
                            <td><b>Level 4 - Entrance</b></td>
                            <td>2,345</td>
                            <td>345</td>
                            <td>2000</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
</div>
        );
    }
}

export default ShopsOccupancyAll;
