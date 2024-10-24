import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Mcross Staff Management</h2>
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Email address" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className='inline-flex items-center' htmlFor="">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot Password?</a>
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
  )
}

export default Login
