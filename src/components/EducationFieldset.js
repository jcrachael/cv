import { Component } from "react";
import Button from "./Button";
import EducationInput from "./EducationInput";

class EducationFieldset extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.makeList = this.makeList.bind(this);

    this.state = {
      edus: [{ school: "", qual: "", date: "" }],
      list: this.list,
    };
    this.list = this.makeList();
  }

  onClick() {
    let newEdu = { school: "", qual: "", date: "" };
    let newList = this.makeList();
    this.setState({
      edus: this.state.edus.concat(newEdu),
      list: newList,
    });
    console.log("Add Education button clicked");
  }

  makeList() {
    let list = [];
    this.state.edus.map(function (entry, index) {
      if (index % 2 === 0) {
        list.push(<EducationInput key={index} propID={index} entry={entry} />);
      } else {
        list.push(
          <EducationInput
            key={index}
            propID={index}
            entry={entry}
            class="grey"
          />
        );
      }
    });
    return list;
  }

  render() {
    return (
      <div className="education-container">
        {this.list}
        <div className="add-more-edu-btn form-row">
          <div className="form-control">
            <Button type="button" value="Add" clickEvent={this.props.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export { EducationFieldset };
