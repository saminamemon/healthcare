
// import React from "react";

// import { urlForImage } from "../../../sanity/lib/image"

// import Image from "next/image";
// import FetchDataDoctor from "../../../sanity/FetchDataDoctor";

// import Link from "next/link";




// export default async function Feature() {
//   const data = await FetchDataDoctor();

//   return (
//     <>
//       <div className="bg-indigo-100">
//         <h2 className='text-center text-5xl border-double border-4 hover:border-indigo-300 mt-9 px-8 py-8 font-semibold leading-8 text-indigo-800'>Book An Appointment</h2><br />

//         <div className="grid grid-cols-[auto,auto,auto] s justify-center gap-x-10">


//           {data.map((product: any, index: number) => (


//             <div>

//               <Image
//                 key={index}
//                 src={urlForImage(product.image).url()}
//                 alt=""
//                 width={500} height={300}
//                 className="max-h [200px] object-cover object-top"

//               />
//               <h2 className="w-full rounded-lg text-center text-indigo-800 bg-indigo-100 border border-indigo-800  hover:text-indigo-900 hover:bg-white py-3 text-4xl font-bold mt-3">{product.name}</h2>
//               <h3 className="w-full rounded-lg text-center text-indigo-800 bg-indigo-100 border border-indigo-800  hover:text-indigo-900 hover:bg-white py-3 text-4xl font-bold mt-3">{product.description}</h3>




//             </div>


//           ))}






//         </div></div>

//       <div className="bg-indigo-100">
//         <button className="w-full rounded-lg text-center text-indigo-800 bg-indigo-100 border border-indigo-800  hover:text-indigo-900 hover:bg-white py-3 text-4xl font-bold mt-3">
//           <Link href="https://calendly.com/saminamohammadrasheed" target="_blank">
//             Click For Book An Appointment Now
//           </Link></button>
//       </div>
//     </>
//   );
// }
import Feature from "@/Components/Feature";





export default async function OurTeam() {


  return (
    <div>
      <Feature />
    </div>
  );
}