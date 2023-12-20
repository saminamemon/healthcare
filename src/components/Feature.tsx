"use client"

import FetchDataDoctor from "../../sanity/FetchDataDoctor";
import { urlForImage } from "../../sanity/lib/image"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
interface Product {
  slug: {
    current: string;
  };
}
export default function Feature() {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchDataDoctor();
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
        <h2 className='text-center text-5xl mt-9 px-8 py-8 font-semibold leading-8 text-indigo-900'>0ur Team</h2><br />
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-x-10">
          {data.map((product: any) => (
            <Image
              key={product.id}
              src={urlForImage(product.image).url()}
              alt=""
              width={500} height={300}
              className="max-h [200px] object-cover object-top p-2"
            />
          ))}
        </div>
      </div>
      <div className="bg-indigo-100">
        <button className="w-full rounded-lg text-center text-indigo-800 bg-indigo-100 border border-indigo-800 hover:text-indigo-900 hover:bg-white py-3 text-4xl font-bold mt-3">
          <Link href="https://calendly.com/saminamohammadrasheed" target="_blank">
            Click For Book An Appointment Now
          </Link>
        </button>
      </div>
    </>
  );
}
