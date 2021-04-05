import React from "react";
import Plot from 'react-plotly.js';
import "./css/style.css";
class PieChart1 extends React.Component {

  render() {
    return (
      <div className="PieChart1">

        <Plot
          data={[{
            values: [30, 50, 80, 25],
            labels: ['Occupied Shops', 'Lease Processing', 'Avilable Shops', 'Lease Expiring Soon'],
            type: 'pie',
          }]}
          
          layout={{ width: 350, height: 300,paper_bgcolor:'rgba(0,0,0,0)'}}
        />
      </div>
    );

  }
}
export default PieChart1;