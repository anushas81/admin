import React from "react";
import Plot from 'react-plotly.js';
class PieChart2 extends React.Component {

  render() {
    return (
      <div>

        <Plot
          data={[{
            values: [19, 26, 55],
            labels: ['Occupied Spaces', 'Avilable Spaces', 'Proposals', 'In Process(TBD)'],
            type: 'pie',
          }]}
          layout={{ width: 350, height: 300,paper_bgcolor:'rgba(0,0,0,0)' }}
        />
      </div>
    );

  }
}
export default PieChart2;