import React from "react";
import ReactDOM from "react-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { format, subDays } from "date-fns";
import "./combinestyles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null,
      donutData: null,
      currentDateIndex: -1,
    };
  }
  generateDonutData(index) {
    this.setState((state) => {
      return {
        donutData: {
          labels: state.chartData.datasets.map((bruger) => bruger.label),
          datasets: [
            {
              data: state.chartData.datasets.map(
                (bruger) => bruger.data[index]
              ),
              backgroundColor: state.chartData.datasets.map(
                (bruger) => bruger.backgroundColor
              ),
            },
          ],
        },
      };
    });
  }
  generateData() {
    let newArray = [];
    let newArray2 = [];
    let newArray3 = [];
    let newArray4 = [];
    let dateLabels = [5, 4, 3, 2, 1].map((day) => {
      return format(subDays(new Date(), day - 196), "dd. MMM");
    });
    for (let i = 0; i < 5; i++) {
      let randomValue = Math.floor(50 + Math.random() * 50);
      newArray.push(randomValue);
      let randomValue2 = Math.floor(30 + Math.random() * 90);
      newArray2.push(randomValue2);
      let randomValue3 = Math.floor(40 + Math.random() * 70);
      newArray3.push(randomValue3);
      let randomValue4 = Math.floor(60 + Math.random() * 20);
      newArray4.push(randomValue4);
    }
    this.setState(() => {
      return {
        currentDateIndex: 4,
        chartData: {
          labels: dateLabels,
          datasets: [
            {
              label: "English",
              backgroundColor: "rgba(248, 121, 121, 0.5",
              data: newArray,
            },
            {
              label: "Maths",
              backgroundColor: "rgba(121, 121, 248, 0.5)",
              data: newArray2,
            },
            {
              label: "Science",
              backgroundColor: "rgba(121, 248, 121, 0.5)",
              data: newArray3,
            },
            {
              label: "Social Science",
              backgroundColor: "rgba(248, 248, 121, 0.5)",
              data: newArray4,
            },
          ],
        },
      };
    });

    this.generateDonutData(4);
  }
  componentDidMount() {
    this.generateData();
  }
  dateButtonClick(i) {
    this.setState({ currentDateIndex: i });
    this.generateDonutData(i);
  }
  renderDateButton(label, index) {
    let classname = "";
    if (index === this.state.currentDateIndex) classname = "selected-button";
    return (
      <button
        className={classname}
        key={index}
        onClick={this.dateButtonClick.bind(this, index)}
      >
        {label}
      </button>
    );
  }
  renderLine() {
    if (this.state.chartData) {
      return (
        <div
          className="chart-container"
          style={{ height: "40vh", width: "80vw" }}
        >
          <Line data={this.state.chartData} />
        </div>
      );
    } else return null;
  }
  renderDonut() {
    if (this.state.donutData) {
      return (
        <div>
          <div>
            <Doughnut
              height={200}
              options={{
                maintainAspectRatio: false,
              }}
              data={this.state.donutData}
            />
          </div>
          <div
            style={{
              marginTop: "10%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {this.state.chartData.labels.map((label, index) => {
              return this.renderDateButton(label, index);
            })}
          </div>
        </div>
      );
    } else return null;
  }
  render() {
    return (
      <div className="App">
        <h1>Student Dashboard</h1>
        <div>
          <h3>Student Subjectwise Progress</h3>
          {this.renderLine()}
        </div>
        {/* <div>
          <h3>Subjectwise Marks</h3>
          {this.renderDonut()}
        </div> */}
      </div>
    );
  }
}
