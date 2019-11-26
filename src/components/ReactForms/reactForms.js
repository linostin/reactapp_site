import React from "react";

class ReactForms extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />

        <br />

        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />

        <br />

        <textarea value={"Some default value"} onChange={this.handleChange} />

        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          is Friendly?
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>

        <br />

        <label>Favorite Color is:</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default ReactForms;
