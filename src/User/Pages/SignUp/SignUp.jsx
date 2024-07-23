import React, { useState } from 'react';
import { useFormik } from 'formik';
import 'tailwindcss/tailwind.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [notification, setNotification] = useState('');
  const navigate = useNavigate(); 
  const formik = useFormik({
    initialValues: {
      fname: "",
      sname: "",
      email: "",
      password: "",
      confirmPassword: "",
      cart:[],
      order:[]
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('http://localhost:8000/users', values);
        if (response.status === 201) {
          setNotification('Signup successful!');
          resetForm();
          setTimeout(() => {
            navigate('/login'); 
          }, 2000); 
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
    },
    validate: values => {
      let errors = {};

      if (!values.fname) {
        errors.fname = 'Required';
      }
      if (!values.sname) {
        errors.sname = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
        errors.password = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a digit, and a special character';
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must match';
      }

      return errors;
    }


  });

  return (
    <div className="bg-yellow-100 p-8 rounded-lg max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Signup Page</h1>
      {notification && <div className="mb-4 p-2 bg-green-500 text-white text-center">{notification}</div>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fname" className="block text-gray-700">First Name</label>
          <input type="text" id="fname" name="fname" className="mt-1 p-2 w-full border rounded" placeholder="Enter your first name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} />
          {formik.touched.fname && formik.errors.fname ? <div className="text-red-500">{formik.errors.fname}</div> : null}
        </div>

        <div>
          <label htmlFor="sname" className="block text-gray-700">Second Name</label>
          <input type="text" id="sname" name="sname" className="mt-1 p-2 w-full border rounded" placeholder="Enter your second name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.sname} />
          {formik.touched.sname && formik.errors.sname ? <div className="text-red-500">{formik.errors.sname}</div> : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded" placeholder="Enter your email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded" placeholder="Enter your password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 p-2 w-full border rounded" placeholder="Confirm your password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-500">{formik.errors.confirmPassword}</div> : null}
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/" className="text-blue-500 hover:underline">Go to Home</Link>
      </div>
    </div>
  );
}

export default SignUp;
