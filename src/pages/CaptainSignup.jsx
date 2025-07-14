import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
   const [name, setname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setuserData] = useState({});
  
    const submithandler = (e) => {
      e.preventDefault();
  
      const newUserData = {
        username: {
          firstname: name,
          lastname: lastname,
        },
        email: email,
        password: password,
      };
  
      setuserData(newUserData);
      console.log(newUserData);
  
  
      setname('');
      setlastname('');
      setEmail('');
      setPassword('');
  
      alert('User Created Successfully');
    };


  return (
    <div><div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
              className='w-18 mb-3'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
              alt=""
            />

        <form onSubmit={submithandler}>
          <h3 className='text-xl font-semibold mb-2'>What's our Captain's name</h3>
          <div className='flex gap-2.5 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
              type="text"
              placeholder='First name'
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
              type="text"
              placeholder='Last name'
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>

          <h3 className='text-xl font-semibold mb-2'>What's our Captain's email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-xl font-semibold mb-2'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-md'>
            Sign Up
          </button>
        </form>

        <p className='text-center'>
          Already have an account?
          <Link to='/captain-login' className='text-blue-600'>
            {' '}login here
          </Link>
        </p>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div></div>
  )
}

export default CaptainSignup