import { Component } from "react";
import WorkInput from "./WorkInput";

class WorkFieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        { employer: "", pos: "", dateStarted: "", dateEnded: "", role: "" },
        { employer: "", pos: "", dateStarted: "", dateEnded: "", role: "" },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    let newJob = {
      employer: "",
      pos: "",
      dateStarted: "",
      dateEnded: "",
      role: "",
    };
    this.setState({
      jobs: this.state.jobs.concat(newJob),
    });
  }

  render() {
    return (
      <fieldset className="work">
        <legend>Work History</legend>

        {this.state.jobs.map(function (job, index) {
          if (index % 2 === 0) {
            return <WorkInput key={index} propID={index} />;
          } else {
            return <WorkInput key={index} propID={index} class="grey" />;
          }
        })}

        <div className="add-more-work-btn form-row">
          <div className="form-control">
            <button id="addMoreWorkBtn" onClick={this.onClick}>
              Add more
            </button>
          </div>
        </div>
      </fieldset>
    );
  }
}

export { WorkFieldset };
