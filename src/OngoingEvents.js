import React from "react";
import EventBackground1 from './img/img-event1.jpg';
import EventBackground2 from './img/img-event2.jpg';
import EventBackground3 from './img/img-event3.jpg';
class OngoingEvents extends React.Component {
    render() {
        return (
            <div className="ongoingevent-wrap">
            <div className="heading mb-2">
                <h3>Ongoing Events (10)</h3>
                <a href="#" className="show_all float-right">Show All Events</a>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-6 mb-4">
<div className="img-block" style={{"backgroundImage":`url(${EventBackground1})`}}>

                    </div>
                    <div className="block-wrap d-flex flex-column">
                        <div className="content-wrap">
                            <div className="heading d-flex justify-content-between">
                                <h4>Meridian Shopping</h4>
                                <p>31 Jan - 10 Feb 2021</p>
                            </div>
                            <p>Meridian is pleased to announce the opening of the temporary men’s boutique at Level Shoes, Shangool mall space pop up has been conceived as an urban total black container, with black plated walls that delineate the space.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                    <div className="img-block" style={{"backgroundImage":`url(${EventBackground2})`}}>

                    </div>
                    <div className="block-wrap d-flex flex-column">
                        <div className="content-wrap">
                            <div className="heading d-flex justify-content-between">
                                <h4>Meridian Shopping</h4>
                                <p>31 Jan - 10 Feb 2021</p>
                            </div>
                            <p>van Smagghe, Radioactive Man, DJ Paulette, Telford, Scott Fraser, Instra:mental, Alexander Nut, Unai Trotti, Oneman, Chris Farrell, DMX Krew, Mr So...</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                    <div className="img-block" style={{"backgroundImage":`url(${EventBackground3})`}}>

                    </div>
                    <div className="block-wrap d-flex flex-column">
                        <div className="content-wrap">
                            <div className="heading d-flex justify-content-between">
                                <h4>Meridian Shopping</h4>
                                <p>31 Jan - 10 Feb 2021</p>
                            </div>
                            <p>The seasonal sales offer the broadest and deepest price cuts, and they tend to occur during Spring, Summer, Autumn and Winter.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        );
    }
}

export default OngoingEvents;
