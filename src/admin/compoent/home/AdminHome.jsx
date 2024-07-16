import React from 'react';
import Admin from '../navbarAdmin/Admin';

function AdminHome() {
  return (
    <>
      <Admin />

      <div className="bg-gray-100 p-4">
        <div className="bg-white  p-4 mb-4 rounded">
          <p>Total numbers of users </p>
          <p>3</p>
          <p></p>
        </div>
        <div className="bg-white p-4 mb-4 rounded">
          Total numbers of users
        </div>
        <div className="bg-white p-4 mb-4 rounded">
          Total numbers of users
        </div>
      </div>
    </>
  );
}

export default AdminHome;
