import React, { Component } from 'react';

import './form.styles.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      amount: '',
      day: '',
      time: '',
      comments: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(
      `FirstName: ${this.state.firstname} LastName: ${this.state.lastname} Email: ${this.state.email} Amount: ${this.state.amount} Time: ${this.state.time} Day: ${this.state.day} Comments: ${this.state.comments}`
    );
    this.setState({ firstname: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Book a table</h1>

        <input
          placeholder="First Name"
          type="text"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
        />

        <input
          placeholder="Last Name"
          type="lastname"
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <select
          name="amount"
          value={this.state.amount}
          onChange={this.handleChange}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
          <option value="7">Seven</option>
          <option value="8">Eight or More (Please Call Us)</option>
        </select>


        <select
          name="day"
          placeholder="day"
          value={this.state.day}
          onChange={this.handleChange}
        >
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <select
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        >
          <option value="10:00am">10:00am</option>
          <option value="10:30am">10:30am</option>
          <option value="11:00am">11:00am</option>
          <option value="11:30am">11:30am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="13:00pm">13:00pm</option>
          <option value="13:30pm">13:30pm</option>
          <option value="14:00pm">14:00pm</option>
          <option value="14:30pm">14:30pm</option>
          <option value="15:00pm">15:00pm</option>
          <option value="15:30pm">15:30pm</option>
          <option value="16:00pm">16:00pm</option>
          <option value="16:30pm">16:30pm</option>
        </select>

        <input
          type="comments"
          name="comments"
          placeholder="Enter Additional Comments Here"
          value={this.state.comments}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
