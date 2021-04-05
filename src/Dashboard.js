import React from "react";
import StoreStatistics from "./StoreStatistics";
import NewLeads from './NewLeads'
import Messages from './Messages';
import OngoingEvents from './OngoingEvents';
import TrendingStores from './TrendingStores';
import Filter from './img/filter.svg';
class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="Dashboard-wrap">
                    <div className="heading mb-2">
                        <h3>Dashboard</h3>
                        <button type="button" className="btn-filter float-right">
                            <img src={Filter} alt="" /></button>
                    </div>

                    <StoreStatistics />
                </div>

                <NewLeads />

                <Messages />

                <OngoingEvents />
                <TrendingStores />

                </div>

        );
    }
}

export default Dashboard;
