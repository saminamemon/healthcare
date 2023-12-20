"use client"


import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from 'lucide-react'
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { SignInButton, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const { isSignedIn } = useAuth()

  const [nav, setHeader] = useState(false)
  const handleHeader = () => {
    setHeader(!nav)
  }
  return (

    <>
      <div className="bg-indigo-100">
        <div className='flex flex-wrap justify-items-start st p-3 '>

          <button
            className='flex p-3 hover:bg-white rounded lg:hidden text-gray-400 ml-auto hover:text-gray-400 outline-none'
            onClick={handleHeader}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >90 0io-
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>

          <div
            className={`${nav ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="">
              <Image src='/logo.png' alt='' width={200} height={200} className="w-30 h-20 " />

            </div>

            <div className='lg:inline-flex  lg:flex-row lg:ml-auto lg:w-auto justify-items-start w-full lg:items-center items-start  flex flex-col lg:h-auto'>

              <h1 className="px-5 py-6 text-3xl text-indigo-900  ">Doctors Online</h1>
              &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp; &nbsp;   &nbsp;   &nbsp;   &nbsp;
              <Link legacyBehavior href='/Home'>
                <a id="link" className='lg:inline-flex text-2xl lg:w-auto w-full px-3 py-2 rounded text-gray-500 font-bold items-center justify-center hover:bg-white hover:text-indigo-800 '>
                  Home
                </a>
              </Link>
              &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;
              <Link legacyBehavior href='/About'>
                <a id="link" className='lg:inline-flex lg:w-auto w-full text-2xl px-3 py-2 rounded text-gray-500 font-bold items-center justify-center  hover:bg-white hover:text-indigo-800'>
                  About
                </a>
              </Link>
              &nbsp;   &nbsp;   &nbsp;   &nbsp; &nbsp;   &nbsp;   &nbsp;   &nbsp;
              <Link legacyBehavior href='/refills'>
                <a id="link" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-2xl text-gray-500  font-bold items-center justify-center  hover:bg-white hover:text-indigo-800'>
                  prescription refills
                </a>
              </Link>
              &nbsp;   &nbsp;   &nbsp;   &nbsp; &nbsp;   &nbsp;   &nbsp;   &nbsp;
              <Link legacyBehavior href='/OurTeam'>
                <a id="link" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-2xl text-gray-500  font-bold items-center justify-center  hover:bg-white hover:text-indigo-800'>
                  Our Team
                </a>
              </Link>
              &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;


              &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 text-2xl rounded  text-gray-500  font-bold items-center justify-center  hover:bg-white hover:text-indigo-800'>
                {!isSignedIn && (
                  <SignInButton mode="modal">
                    <button>
                      Signin

                    </button>

                  </SignInButton>
                )}

                <UserButton afterSignOutUrl="/" />
              </div>

              &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;
              <div className="flex justify-start items-center">
                <ShoppingCart
                  className="h-12 w-12"
                  style={{ color: "indigo-100" }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function useAppSelector(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}
