import React from 'react'

const Register = () => {
  return (
    <>

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
      Create Account
    </h2>
    <p className="text-center text-gray-500 mb-6">
      Sign up to get started
    </p>

    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
        Sign up
      </button>
    </form>

    <p className="text-center text-sm text-gray-500 mt-6">
      Already have an account?
      <a href="#" className="text-indigo-600 hover:underline ml-1">
        Sign in
      </a>
    </p>
  </div>
</div>
    </>
  )
}

export default Register