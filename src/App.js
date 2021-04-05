import "./css/style.css";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Leftmenu from "./Leftmenu";
import Footer from "./Footer";
import ShowAllLeads from "./ShowAllLeads";
import ShowAllCommunications from "./ShowAllCommunications";
import ShopsOccupancyAll from "./ShopsOccupancyAll";

function App() {
  return (
    <div>
      <Header />
      <Leftmenu />
      <section className="main-wrapper">
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/admin" component={Dashboard}></Route>
        <Route exact path="/ShowAllLeads" component={ShowAllLeads}></Route>
        <Route exact path="/ShowAllCommunications" component={ShowAllCommunications}></Route>
        <Route exact path="/ShopsOccupancyAll" component={ShopsOccupancyAll}></Route>
      </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default App;
