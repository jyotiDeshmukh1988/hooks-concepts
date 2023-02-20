import React from 'react'
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const notify = () => toast.success('Signin success!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  return (
    <div className='main-div'>
        <h2>Welcome to signin page</h2>
        <button className='btn btn-primary' onClick={notify}>Sign in!</button>
        <ToastContainer/>
    </div>
  )
}

export default Login