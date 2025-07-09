import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setuserData] = useState({})

  const submithandler = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password,
    })
    console.log(userData);
    alert('Login Successful');

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt=""
        />

        <form onSubmit={submithandler}>
          <h3 className='text-xl font-semibold mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-md'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-xl font-semibold mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-md'
            type="password"
            placeholder='Password'
          />

          <button
            type="submit"
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-md'>
            Login
          </button>
        </form>

        <p className='text-center'>
          New here?
          <Link to='/signup' className='text-blue-600'>
            {' '}Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-md'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
