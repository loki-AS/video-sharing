import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AiOutlineLogout } from "react-icons/ai"
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/video.png';

import { GoogleLogin, googleLogout  } from '@react-oauth/google';
import { createOrGetUser } from '../utils';
import useAuthStore from "../store/authStore"

const Navbar = () => {

  const [searchValue, setSearchValue] = useState('');

  const { userProfile, addUser, removeUser } = useAuthStore()

  const Router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()

    if(searchValue) {
      Router.push(`/search/${searchValue}`)
    }
  }

  return (
    <div className='w-full flex justify-between items-center shadow-lg border-b-1 border-gray-200 py-2 px-4'>
        <Link href="/home">
        <div className='h-16 w-16 flex'>
            <Image
            className='cursor-pointer'
            src={Logo}
            alt="logo"
            layout='responsive'
            priority={true}
            />
            <h1 className='uppercase mt-5 text-2xl font-poppins tracking-[1px] text-gradient'>Share</h1>
        </div>
        </Link>

        <div className='relative hidden md:block'>
        <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 -left-20 bg-white'
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0'
            placeholder='Search accounts and videos'
          />
          <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>

        <div>
          {
            userProfile ? (
              <div className='flex gap-5 md:gap-10'>
              <Link href="/upload">
                <button className='border-2 px-2 md:px-4 text-md font-semibold rounded-xl mt-1 py-1 flex items-center gap-2 '>
                  <IoMdAdd className='text-xl' /> {` `}
                  <span className='hidden md:block'>upload</span>
                </button>
              </Link>
              {
                userProfile.image && (
                  <Link href={`/profile/${userProfile._id}`}>
                  <div>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={userProfile.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </div>           
                  </Link>
                )
              }
              <button
              type='button'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
              >
                <AiOutlineLogout color={"#33bbcf"} fontSize={25} />
              </button>
              </div>
            ) : (
              <GoogleLogin 
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => console.log('Login Failed')}              
              />
            )
          }
        </div>
    </div>
  )
}

export default Navbar