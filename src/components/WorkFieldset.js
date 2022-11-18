import { Component } from "react";
import WorkInput from "./WorkInput";
import Button from "./Button";

class WorkFieldset extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.makeList = this.makeList.bind(this);

    this.state = {
      jobs: [
        { employer: "", pos: "", dateStarted: "", dateEnded: "", role: "" },
      ],
      list: this.list,
    };
    this.list = this.makeList();
  }

  makeList() {
    let list = [];
    this.state.jobs.map(function (job, index) {
      if (index % 2 === 0) {
        list.push(<WorkInput key={index} propID={index} />);
      } else {
        list.push(<WorkInput key={index} propID={index} class="grey" />);
      }
    });
    return list;
  }

  onClick() {
    let newJob = {
      employer: "",
      pos: "",
      dateStarted: "",
      dateEnded: "",
      role: "",
    };
    let newList = this.makeList();
    this.setState({
      jobs: this.state.jobs.concat(newJob),
      list: newList,
    });
  }

  render() {
    return (
      <div className="work-container">
        {this.list}
        <div className="add-more-work-btn form-row">
          <div className="form-control">
            <Button type="button" value="Add" clickEvent={this.props.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export { WorkFieldset };
