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

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:8000/users/${userId}`)
      .then(response => {
        setList(list.filter(user => user.id !== userId));
      })
      .catch(error => console.log(error));
  };
  
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
              <th className="py-3 px-6 text-left text-gray-700 uppercase">Orders</th>
              <th className="py-3 px-6 text-left text-gray-700 uppercase">Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr 
                key={item.id} 
                className="border-b border-gray-300 hover:bg-gray-50 text-center"
              >
                <td ><img src="data:image/jpeg;base64,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" alt="" className="py-4 px-6 text-gray-800 h-20 w-25 rounded-full"/></td>
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
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
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
