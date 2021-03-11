import React, { Component } from "react";
import DailyStudyChart from "./DailyStudyChart";
import CombinedChart from "./CombinedCharts";

class HomeFrag extends Component {
  render() {
    return (
      <>
        {/* <div>Dashboard of the Student Progress Analysis</div> */}
        {/* <DailyStudyChart /> */}
        <CombinedChart />
      </>
    );
  }
}

export default HomeFrag;
