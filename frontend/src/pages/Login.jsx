import { useState } from 'react';
import axios from "axios"
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('')
  const {login} = useAuth()
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you could add login logic, such as sending email and password to the backend
    try{
      const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });
      console.log(res);
      if(res.data.success){
        setError('')
        console.log(res.data.user);
        login(res.data.user)
        console.log(res.data.token);
        localStorage.setItem("token",res.data.token)
        if(res.data.user.role === "admin"){
          navigate("/admin-dashboard")
        }
        else{
          navigate("/staff-dashboard")
        }
      }
    }
    catch(err){
      console.log(err.response.data.error);
      if (err.response.data.error === "Wrong password"){
        setError(err.response.data.error)
      }
      else if (err.response.data.error === "User not found"){
        setError(err.response.data.error)
      }
      else{
        setError("Server Error")
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Mcross Staff Management</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Email address" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <label className='inline-flex items-center'>
              <input type="checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-indigo-600 text-sm hover:underline">Forgot Password?</a>
          </div>
          
          <button 
            type="submit" 
            className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;