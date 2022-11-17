import { Component } from "react";

class AboutFieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      address: "",
    };
  }

  render() {
    return (
      <fieldset className="about">
        <legend>About you</legend>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="firstName">First name*</label>
            <input id="firstName" type="text" placeholder="John" required />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last name*</label>
            <input id="lastName" type="text" placeholder="Citizen" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              placeholder="john@google.com"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone number*</label>
            <input id="phone" type="tel" placeholder="0412 345 678" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              placeholder="123 Example Street, Sampletown AU 3123"
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

export { AboutFieldset };