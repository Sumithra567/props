
import React from 'react';

const Profile = ({ name, age, location }) => (
  <div style={{ border: '1px solid #ddd', padding: 10, borderRadius: 8, marginBottom: 10 }}>
    <h3>{name}</h3>
    <p>Age: {age}</p>
    <p>Location: {location}</p>
  </div>
);

export default Profile;
