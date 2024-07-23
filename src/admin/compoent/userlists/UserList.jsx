import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserModal from '../componants/modal/UserModal';
import Admin from '../navbarAdmin/Admin';

const Userlist = () => {
  const [list, setList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then(res => setList(res.data))
      .catch(error => console.log(error));
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // const handleDelete = (userId) => {
  //   axios.delete(`http://localhost:8000/users/${userId}`)
  //     .then(response => {
  //       setList(list.filter(user => user.id !== userId));
  //     })
  //     .catch(error => console.log(error));
  // };
  
  return (
    <>
      <Admin />
      <div className="p-4 w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300 bg-gray-100">
              <th className="py-3 px-6 text-left text-gray-700 uppercase">ID</th>
              <th className="py-3 px-6 text-left text-gray-700 uppercase">Name</th>
              <th className="py-3 px-6 text-left text-gray-700 uppercase">Email</th>
              <th className="py-3 px-9 ml-9 text-left text-gray-700 uppercase">Orders</th>
              <th className="py-3 px-6 text-left text-gray-700 uppercase">Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr 
                key={item.id} 
                className="border-b border-gray-300 hover:bg-gray-50 text-center"
              >
                <td ><img src="src/assets/download.jpeg" alt="" className="py-4 px-6 text-gray-800 h-20 w-25 rounded-full"/></td>
                <td className="py-4 px-6 text-gray-800">{item.fname}</td>
                <td className="py-4 px-6 text-gray-800">{item.email}</td>
                <td className="py-4 px-6">
                  
                </td>
                <td className="py-4 px-6">
                  <button 
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600" 
                    onClick={() => handleRowClick(item)}
                  >
                    
                    View Order
                  </button>
                </td>
                <td className="py-4 px-6">
                  <button 
                    className="bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600" 
                    // onClick={() => handleDelete(item.id)}
                  >
                    Block
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedUser && (
          <UserModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            user={selectedUser} 
          />
        )}
      </div>
    </>
  );
};

export default Userlist;