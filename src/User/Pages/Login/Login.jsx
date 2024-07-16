import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.get('http://localhost:8000/users', values);
      // if (response.status === 200) {
      //   alert('Login successful');
      //   localStorage.setItem('id',)
      //   setTimeout(() => {
      //     navigate('/home'); 
      //   }, 2000); 
      // }
      console.log(response.data);
      let findedata=response.data.find(item=>{
        return item.email===values.email && item.password===values.password
      })
      let findemail=response.data.find(item=>{
        return item.email===values.email && item.password!==values.password
      })
      if(findedata)
      {
        localStorage.setItem("id",findedata.id)
        alert('success full');
        
        navigate('/home');
      }
      else if(findemail)
      {
        alert('enter password correctly')
      }
      else{
        alert(' you dont have an account');
        navigate('/signup');
      }
    }
     catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl mb-4">Login Page</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik  => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <Field type="email" id="email" className="mt-1 p-2 w-full border rounded" name="email" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <Field type={showPassword ? 'text' : 'password'} id="password" className="mt-1 p-2 w-full border rounded" name="password" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox" id="showPassword" checked={showPassword}
                  onChange={() => setShowPassword(prev => !prev)} className="mr-2" />
                <label htmlFor="showPassword" className="text-gray-700">Show Password</label>
              </div>
              
              <button type="submit" disabled={!formik.isValid} className="w-full bg-blue-500 text-white p-2 rounded" >Log in</button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="mt-4 text-center">
          <button onClick={() => window.location.href = '/signup'} className="text-blue-500 hover:underline" > Go to Signup </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
