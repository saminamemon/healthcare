
"use client"

import Image from "next/image"




export default function Section() {

  return (

    <>
      <div className="bg-gradient-to-r from-indigo-100 to-white-500">
        <div className="mx-auto max-w-9xl max-h-9xl px-0 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl  py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-center font-bold text-5xl leading-8 text-indigo-900">Collections</h2>

            <div className="mt-8 space-y-10 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:space-y-0">
              <div className="group relative">
                <div className=" h-180 w-180 contrast-125 scale-100 overflow-hidden rounded-lg bg-white">
                  <Image src="/medicane.jpg" alt="" width={400} height={400} className="h-full w-full object-center" />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>

                  </a>
                </h3>
                <p className="text-2xl font-semibold  text-justify text-indigo-800">Visit our website to conveniently purchase your prescribed medications, ensuring a seamless and secure online pharmacy experience. Trust in our reliable platform for easy access to a wide range of medicines, delivered right to your doorstep.</p>
              </div>


              <div className="group relative">
                <div className="relative h-200 w-full contrast-125 scale-100 overflow-hidden rounded-lg bg-white">
                  <Image src="/feature.avif" alt="" width={600} height={600} className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>

                  </a>
                </h3>
                <p className="text-2xl font-semibold  text-justify text-indigo-800">Our doctors work collaboratively, fostering a team-oriented approach to healthcare They prioritize open communication and involve patients in decision-making, creating a supportive healthcare experience.</p>
              </div>
              <div className="group relative">
                <div className="relative h-180 contrast-125 scale-100 w-full overflow-hidden rounded-lg bg-white">
                  <Image src='/slidernew.jpg' alt='images' width={400} height={400} className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="/ourteam">
                    <span className="absolute inset-0"></span>

                  </a>
                </h3>
                <p className="text-2xl font-semibold text-justify text-indigo-800">Our doctor team consists of highly skilled professionals with diverse specialties, ensuring a comprehensive range of medical knowledge to address various health concerns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


