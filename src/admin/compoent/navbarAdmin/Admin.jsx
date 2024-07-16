import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="p-4 flex items-center justify-between">
        <img
          width="106"
          height="34"
          src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
          alt="Logo"
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/adminhome"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 bg-amber-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/userlist"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
              >
                User List
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Admin;
