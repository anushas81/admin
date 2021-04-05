import React from "react";
import { Link } from 'react-router-dom';
import user1 from './img/user1.png';
import user2 from './img/user2.png';
import user3 from './img/user3.png';
import user4 from './img/user4.png';
class Messages extends React.Component {
    render() {
        return (
            <div className="message-wrap">
            <div className="heading mb-2">
                <h3>Messages (35) </h3>
                <Link to='/ShowAllCommunications' className="show_all float-right" >Show All Communications</Link>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="profile-wrapper position-relative mb-3 d-flex align-items-center">
                            <div className="profile">
                                <img src={user1} alt="" />
                            </div>
                            <div className="name">
                                <h5>Robert Fox</h5>
                                <span>Advertiser</span>
                            </div>
                            <p className="time">Today at 07:30 PM</p>
                        </div>
                        <div className="content-wrap">
                            <h4>Request to publish advertisement</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-fill bg-white">View Details</button>
                            <button type="button" className="btn-fill bg-black">Reply</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="profile-wrapper position-relative mb-3 d-flex align-items-center">
                            <div className="profile">
                                <img src={user2} alt="" />
                            </div>
                            <div className="name">
                                <h5>Bessie Cooper</h5>
                                <span>Advertiser</span>
                            </div>
                            <p className="time">Today at 07:30 PM</p>
                        </div>
                        <div className="content-wrap">
                            <h4>Request to publish advertisement</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-fill bg-white">View Details</button>
                            <button type="button" className="btn-fill bg-black">Reply</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="profile-wrapper position-relative mb-3 d-flex align-items-center">
                            <div className="profile">
                                <img src={user3} alt="" />
                            </div>
                            <div className="name">
                                <h5>Wade Warren</h5>
                                <span>Business Man</span>
                            </div>
                            <p className="time">Today at 07:30 PM</p>
                        </div>
                        <div className="content-wrap">
                            <h4>Shop Required for Lease</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-fill bg-white">View Details</button>
                            <button type="button" className="btn-fill bg-black">Reply</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="block-wrap d-flex flex-column">
                        <div className="profile-wrapper position-relative mb-3 d-flex align-items-center">
                            <div className="profile">
                                <img src={user4} alt="" />
                            </div>
                            <div className="name">
                                <h5>Courtney Henry</h5>
                                <span>Retailer</span>
                            </div>
                            <p className="time">Today at 07:30 PM</p>
                        </div>
                        <div className="content-wrap">
                            <h4>Shop Required for Lease</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-fill bg-white">View Details</button>
                            <button type="button" className="btn-fill bg-black">Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		

        );
    }
}

export default Messages;
