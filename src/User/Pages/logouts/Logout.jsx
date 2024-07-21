// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ConfirmModal from './ConfirmModal';

// const Logout = () => {
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/');
//   };

//   const handleConfirmLogout = () => {
//     setShowModal(false , alert("successfull"));
//     handleLogout();
//   };

//   const handleCancelLogout = () => {
//     setShowModal(false);
//   };

//   const handleLogoutClick = () => {
//     setShowModal(true);
//   };

//   return (
//     <div>
//       <button onClick={handleLogoutClick} className="bg-red-500 text-white px-4 py-2 rounded-md">
//         Logout
//       </button>
//       {showModal && (
//         <ConfirmModal 
//           // message="logging out?" 
//           onConfirm={handleConfirmLogout} 
//           onCancel={handleCancelLogout} 
//         />
//       )}
//     </div>
//   );
// };

// export default Logout;
