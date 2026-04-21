import React from 'react'
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <>
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
      Welcome Back
    </h2>
    <p className="text-center text-gray-500 mb-6">
      Sign in to your account
    </p>


    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
     <div>
      <label className="block text-sm font-medium text-gray-700">
        Email
      </label>

      <input
        type="email"
        {...register('email', {
          required: "This field is required."
        })}
        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {errors.email && (
        <p className='invalid-feedback'>
          {errors.email.message}
        </p>
      )}
    </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <button type = 'submit' className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
        Sign in
      </button>
    </form>

    <p className="text-center text-sm text-gray-500 mt-6">
      Don't have an account?
      <a href="#" className="text-indigo-600 hover:underline ml-1">
        Sign up
      </a>
    </p>
  </div>
</div>

    </>
  )
}

export default Login