"use client";
import React, { useState } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetails({
  filteredData
}: {
  filteredData: any;

}) {
  const { isSignedIn, userId } = useAuth();
  console.log(userId);
  const [quantity, setQuantity] = useState(1);
  const [paymentmethod, setpaymentmethod] = useState<string>('online');




  const handlepaymentmethodChange = (method: string) => {
    setpaymentmethod(method);
  };


  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    setQuantity(quantity - 1);
  }


  async function handleAddToCart() {

    try {
      if (!paymentmethod) {
        console.error('Payment method is required.')
        return;
      }
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          product_id: filteredData._id,
          product_title: filteredData.title,
          product_price: filteredData.price * quantity,
          product_quantity: quantity,
          image_url: urlForImage(filteredData.image).url(),
          payment_method: paymentmethod
        })

      });
    } catch (error) {
      console.log("Error posting data to the server:", error);
    }
  };[isSignedIn]

  return (
    <>
      {isSignedIn ? (
        <div className="bg-white">
          <div className="pb-16 pt-6 sm:pb-24">
            <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-6 lg:col-start-7">
                  <div>

                    <h1 className="text-sm font-bold text-indigo-800">
                      {filteredData.title}
                    </h1>
                    <p className="text-md font-medium text-indigo-800 ">
                      {filteredData.price}
                    </p>
                  </div>
                </div>

                <div className="mt-8 lg:col-span-6 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                  <h2 className="sr-only">Images</h2>

                  <div>
                    <Image
                      key={filteredData._id}
                      src={urlForImage(filteredData.image).url()}
                      alt={filteredData.title}
                      width={300}
                      height={300}
                    />
                  </div>
                </div>

                <div className="mt-5 lg:col-span-6">
                  <div className="flex border w-fit mt-5">
                    <button
                      onClick={() => handleDecrement()}
                      disabled={quantity === 1}
                      className={`px-3 py-1 text-center hover:bg-gray-200`}
                    >
                      -
                    </button>
                    <div className="px-3 py-1 text-center">{quantity}</div>
                    <button
                      onClick={() => handleIncrement()}
                      className={`px-3 py-1 text-center hover:bg-gray-200`}
                    >
                      +
                    </button>
                  </div>
                  <div>


                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">Select Payment Method:</h2>
                      <div className="flex mt-2">
                        <label className="mr-4">
                          <input
                            type="radio"
                            value="online"
                            checked={paymentmethod === 'online'}
                            onChange={() => handlepaymentmethodChange('online')}
                          />
                          <span className="ml-2">Online Payment</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="cashOnDelivery"
                            checked={paymentmethod === 'cashOnDelivery'}
                            onChange={() => handlepaymentmethodChange('cashOnDelivery')}
                          />
                          <span className="ml-2">Cash on Delivery</span>
                        </label>
                      </div>

                      <button
                        onClick={handleAddToCart}
                        className={`w-full overflow-hidden group text-center rounded-lg hover:text-indigo-900 hover:bg-white border border-indigo-800  text-indigo-800 bg-indigo-100 py-3 mt-5 text-lg font-bold flex items-center`}
                      >

                        <p className="flex-grow">Add to Cart</p>


                      </button>

                      <button
                        className="w-full text-center rounded-lg text-indigo-800 bg-indigo-100 hover:text-indigo-900 hover:bg-white py-3 text-lg font-bold mt-3  border border-indigo-800" >
                        <Link href="/cart">   Buy it now</Link>


                      </button>
                    </div>
                    <div className="mt-10">
                      <h2 className="text-lg font-medium text-indigo-800">
                        Description
                      </h2>

                      <div className="prose prose-sm mt-4 text-justify text-indigo-900" />
                      {filteredData.description}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Please Login First</h1>
        </div>
      )}
    </>
  )
}
