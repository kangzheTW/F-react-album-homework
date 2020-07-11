import React from 'react';
import './UserInfo.scss';

function UserInfoRow(props) {
  return (
    <div className="user-info-row">
      <label className="info-title">{props.label}</label>
      <label className="info-content">{props.content}</label>
    </div>
  );
}

function UserInfo(props) {
  const { user } = props;
  return (
    <aside className="UserInfo">
      {user.name && (
        <>
          <h2>{user.name}</h2>
          <h3>Contact Me @</h3>
          <UserInfoRow label="Email" content={user.email} />
          <UserInfoRow label="Phone" content={user.phone} />
          <UserInfoRow label="Website" content={user.website} />
          <UserInfoRow label="Company" content={user.company.name} />
        </>
      )}
    </aside>
  );
}

export default UserInfo;
