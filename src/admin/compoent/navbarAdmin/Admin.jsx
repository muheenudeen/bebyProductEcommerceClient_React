import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../User/AuthContext/AuthContext';


function Admin() {
  const { isLoggedIn, logout} = useContext(AuthContext);

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
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 "
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
                to="/adminproduct"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
              >
                Product
              </Link>
            </li>
            <li>
            {isLoggedIn ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQNJtFsdtSeo-E-UPrgxU8qkQGISaSjCjXg&s"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={logout}
            />
          ) : (
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQNJtFsdtSeo-E-UPrgxU8qkQGISaSjCjXg&s"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Link>
          )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Admin;
