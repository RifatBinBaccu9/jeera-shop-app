"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaApple, FaArrowRight } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation'; 

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);
  console.log(rememberMe);
  
  const router = useRouter(); 

  useEffect(() => {
        validateForm();
    }, [email, password]);

     // Validate form
     const validateForm = () => {
      let errors = {};

      if (!email) {
          errors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email is invalid.';
      }

      if (!password) {
          errors.password = 'Password is required.';
      } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters.';
      }

      setErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
  };

  
  // Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      setRememberMe(true);
      console.log("Login successful!");
      document.cookie = "authToken=valid_user; path=/; max-age=3600"; // Cookie valid for 1 hour
      router.push("/dashboard"); 
    } else {
      setRememberMe(false);
      console.log("Login failed!");
    }
  };

  const [validateEmail, setValidateEmail] = useState(false);
  const heandleValidateEmail = () => {
    setValidateEmail(true);
  }
  const [validatePassword, setValidatePassword] = useState(false);
  const heandleValidatePassword = () => {
    setValidatePassword(true);
  }
  return (
    <div className='px-[32px] py-6'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className='text-sm font-normal cursor-pointer'>Email Address</label>
        <input type="text" onFocus={heandleValidateEmail} id='email' onChange={(e) => setEmail(e.target.value)} className='w-full  h-[44px] outline-none text-sm font-normal bg-white border border-[#FA8232] rounded-[2px] px-3 mb-4' />
        {
          validateEmail && (errors.email && <p className='text-[#FA8232] text-sm font-normal'>{errors.email}</p>)
        }

        <div className='flex flex-col'>
          <div className='flex flex-row justify-between items-center mb-2'>
            <label htmlFor="password" className='text-sm font-normal  cursor-pointer'>Password</label>
            <div className='text-sm font-medium cursor-pointer text-[#FA8232]'>
              <Link href={"#"} >Forget Password</Link>
            </div>
          </div>
          <div className="relative flex items-center border border-[#FA8232] rounded-[2px] w-full h-[44px] bg-white px-3">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onFocus={heandleValidatePassword}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-none flex-1 text-sm font-normal"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3"
            >
              {showPassword ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
        </div>
        {validatePassword && (errors.password && <p className='text-[#FA8232] text-sm font-normal'>{errors.password}</p>)}

        <button type='submit' className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[44px] uppercase mt-5'>
          <span className='text-white'>Sign in</span> <FaArrowRight className='text-white' />
        </button>

        <div className='relative flex items-center justify-center text-sm font-normal text-[#77878F] border border-[#77878F] mt-6 mb-3'>
          <p className='absolute -top-4 bg-[#FAF3E0] rounded-full px-2 py-1'>Or</p>
        </div>

        <button className='text-sm font-bold border border-[#E4E7E9] rounded-[2px] w-full h-[44px] flex flex-row items-center justify-stretch px-4 mb-3'>
          <FcGoogle className='text-xl' /><span className='text-[#475156]'>Login with Google</span>
        </button>

        <button className='text-sm font-bold border border-[#E4E7E9] rounded-[2px] w-full h-[44px] flex flex-row items-center justify-stretch px-4'>
          <FaApple className='text-xl' /><span className='text-[#475156]'>Login with Apple</span>
        </button>
      </form>
    </div>
  );
};

export default SignIn;
