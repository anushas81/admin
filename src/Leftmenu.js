import React from "react";
import { Link } from 'react-router-dom';
import Icon1 from "./img/active-dashboard.svg";
import Icon2 from "./img/shop.svg";
import Icon3 from "./img/event.svg";
import Icon4 from "./img/message.svg";
import Icon5 from "./img/settings.svg";

const Leftmenu = () => {
  return (
      <div >
       <section className="sidebar bg-black">
        <ul>
            <li className="text-center mb-4">
            <Link to='/' className="menu-link d-flex flex-column align-items-center" ><img src={Icon1} alt=""/> DASHBOARD</Link>

            </li>
            <li className="text-center mb-4">
                <a href="#" className="menu-link d-flex flex-column align-items-center ">
                    <img src={Icon2} alt="" /> SHOPS
                </a>
            </li>
            <li className="text-center mb-4">
                <a href="#" className="menu-link d-flex flex-column align-items-center ">
                    <img src={Icon3} alt="" /> EVENTS
                </a>
            </li>
            <li className="text-center mb-4">
                <a href="#" className="menu-link d-flex flex-column align-items-center ">
                    <img src={Icon4} alt="" /> MESSAGES
                </a>
            </li>
            <li className="text-center mb-4">
                <a href="#" className="menu-link d-flex flex-column align-items-center ">
                    <img src={Icon5} alt="" /> SETTINGS
                </a>
            </li>
        </ul>
    </section>
      </div>
  );
};
export default Leftmenu;
