import React, { useState } from 'react';
import Navbar from '../../../navbar/NavbarLink';
import Footer from '../../../Pages/footers/Footer';

const ContactUs = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: '',
      email: '',
      subject: '',
      message: '',
      image: 'https://img.freepik.com/premium-photo/sweet-cute-baby-boy-playing-with-laptop-computer-ai-generated-image_966797-2891.jpg',
    },
  ]);

  const handleChange = (id, field, value) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, [field]: value } : contact
    ));
  };

  const handleSendMessage = () => {
    console.log('Sending messages:', contacts);
  };

  return (
    <>

      <Navbar />
      <div className="min-h-screen flex">
        {contacts.map(contact => (
          <div key={contact.id} className="flex flex-1">
            <div className="flex-1 flex items-center justify-center bg-gray-100">
              <img src={contact.image} alt={contact.name} className="h-full object-cover" />
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center bg-amber-100">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" value={contact.name} onChange={e => handleChange(contact.id, 'name', e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={contact.email} onChange={e => handleChange(contact.id, 'email', e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" value={contact.subject} onChange={e => handleChange(contact.id, 'subject', e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea value={contact.message} onChange={e => handleChange(contact.id, 'message', e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <button
                onClick={handleSendMessage}
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
