
"use client"

import Image from "next/image"


export default function Footer(){
    return(

    <>
      

    
    
      <div className=" w-full h-64 static bottom-0  bg-gradient-to-r from-white-200 to-indigo-200 text-center dark:bg-neutral-600 lg:text-left">
        <div className="container p-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
            <div className="mb-6">
              <h5 className="mb-2.5 m-7 font-bold uppercase text-indigo-900">
                <Image width={200} height={200} src={'/Logo.png'} alt="Logo" />
              </h5>

            </div>

            <div className="mb-6 m-8 ">
              <h5 className="mb-2.5 font-bold uppercase text-indigo-900">
                Company
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    How it Works
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 m-8">
              <h5 className="mb-2.5 font-bold uppercase text-indigo-900 ">
                Support
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    Support Carrer
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    24h Service
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    Quick Chat
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 m-8">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Contact
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-indigo-900 hover:bg-white hover:text-indigo-800"
                  >
                    Support 24h
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 text-center text-indigo-900">
          Copyright © 2023 Health Care <br/>
       
          
          Powered By:Softic Solutions
          
        </div>
      </div>
    </>
    )
}