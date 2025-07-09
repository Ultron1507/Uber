import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
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

               <h3 className='text-xl font-semibold mb-2'>What's your name</h3>
               <div className='flex gap-2.5 mb-5'>
                <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="text"
                placeholder='First name'
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="text"
                placeholder='Last name'
              />
               </div>


              <h3 className='text-xl font-semibold mb-2'>What's your email</h3>
              <input
                required
                className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="email"
                placeholder='email@example.com'
              />
    
              <h3 className='text-xl font-semibold mb-2'>Enter Password</h3>
              <input
                required
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
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
              Already have an account?
              <Link to='/login' className='text-blue-600'>
                {' '}login here
              </Link>
            </p>
          </div>
    
          <div>
           <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
        </div>
  )
}

export default UserSignup