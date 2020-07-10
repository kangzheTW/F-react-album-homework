import React, { Component } from 'react';
import './UserInfo.scss';
import { fetchUser } from '../apiUtil';

function UserInfoRow(props) {
  return (
    <div className="user-info-row">
      <label>{props.label}</label>
      <label>{props.content}</label>
    </div>
  );
}

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        company: {},
      },
    };
  }

  componentDidMount() {
    fetchUser().then((data) => {
      console.log(data);
      this.setState({
        user: data,
      });
    });
  }

  render() {
    return (
      <aside className="UserInfo">
        <h2>{this.state.user.name}</h2>
        <h3>Contact Me @</h3>
        <UserInfoRow label="Email" content={this.state.user.email} />
        <UserInfoRow label="Phone" content={this.state.user.phone} />
        <UserInfoRow label="Website" content={this.state.user.website} />
        <UserInfoRow label="Company" content={this.state.user.company.name} />
      </aside>
    );
  }
}

export default UserInfo;
