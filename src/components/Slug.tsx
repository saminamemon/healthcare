"use client"


// import FetchData from "../../sanity/FetchData";
// import { urlForImage} from "../../sanity/lib/image"
// import Link from "next/link";
// import Image from "next/image";






// export default async function Slug() {
//   const data = await FetchData();

//   return (
//     <>

//     <div className="bg-indigo-100">
//     <h2 className='text-center text-5xl mt-9 px-8 py-8 font-semibold leading-8 text-indigo-900'>Buy Now</h2><br />

//      <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 bg-indigo-100 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-5"> 

//       {data.map((product: any, index: number) => (

//         <Link
//           href={`/product/${product.slug.current}`}

//           key={index}
//         >

//           <Image

//             src={urlForImage(product.image).url()}
//             alt=""
//             width={200} height={200}
//              className="col-span-3 max-h-55 drop-shadow-2xl contrast-100 w-full object-contain lg:col-span-3"


//           />


//         </Link>

//       ))}
//         </div></div>

//         </>

//   );
// }
import FetchData from "../../sanity/FetchData";
import { urlForImage } from "../../sanity/lib/image"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
interface Product {
  slug: {
    current: string;
  };
};
export default function Slug() {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchData();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="bg-indigo-100">
        <h2 className='text-center text-5xl mt-9 px-8 py-8 font-semibold leading-8 text-indigo-900'>Buy Now</h2><br />
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 bg-indigo-100 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {data.map((product: any, index: number) => (
            <Link
              href={`/product/${product.slug.current}`}
              key={index}
            >
              <Image
                src={urlForImage(product.image).url()}
                alt=""
                width={200} height={200}
                className="col-span-3 max-h-55 drop-shadow-2xl contrast-100 w-full object-contain lg:col-span-3"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
