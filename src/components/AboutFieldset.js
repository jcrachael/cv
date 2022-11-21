import { Component } from "react";

// This is the About Fieldset component
// Props:
// this.props.handleChange is the input change event handler from Main
// this.props.user is the user Object from Main's state

class AboutFieldset extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="firstName">First name*</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              value={this.props.user.firstName}
              required
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last name*</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Citizen"
              value={this.props.user.lastName}
              onChange={this.props.handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@google.com"
              value={this.props.user.email}
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone number*</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0412 345 678"
              value={this.props.user.phone}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="123 Example Street, Sampletown AU 3123"
              value={this.props.user.address}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { AboutFieldset };
