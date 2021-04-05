import React from "react";
import Brand1 from './img/img-brand1.png';
import Brand2 from './img/img-brand2.svg';
import Brand3 from './img/img-brand3.png';
import Brand4 from './img/img-brand4.svg';
import Brand5 from './img/img-brand5.svg';
import Brand6 from './img/img-brand6.svg';
import Brand7 from './img/img-brand7.svg';
import Brand8 from './img/img-brand8.svg';
import UpArrow from './img/up.svg';
class TrendingStores extends React.Component {
    render() {
        return (
            <div className="trending_store-wrap">
                <div className="heading mb-2">
                    <h3>Trending Stores (20)</h3>
                    <a href="#" className="show_all float-right">Show All Trending Brands</a>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>3,500</span> Clicks | <span>30</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>2,100</span> Clicks | <span>300</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>1,500</span> Clicks | <span>200</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4  ">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>3,500</span> Clicks | <span>30</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>3,500</span> Clicks | <span>30</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>3,500</span> Clicks | <span>30</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4  ">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>3,500</span> Clicks | <span>30</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand7} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="block-wrap d-flex flex-column position-relative align-items-center justify-content-center">
                            <div className="click-wrap d-flex align-items-center">
                                <img src={UpArrow} alt="up" className="mr-2" />
                                <p><span>3,500</span> Clicks | <span>30</span> 3D Trials</p>
                            </div>
                            <div className="brand-img">
                                <img src={Brand8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default TrendingStores;
