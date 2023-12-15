"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function CartItems() {
  const [products, setProducts] = useState<any>(null);
 const [totalAmount, setTotalAmount] = useState<number>(0);
  console.log("🚀 ~ file: CartItems.tsx:7 ~ CartItems ~ products:", products)
  const [state, setState] = useState(false);
  const { isSignedIn, userId } = useAuth();


  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
     
        const total = data.reduce((acc: number, item: any) => {
          return acc + item.product_quantity * item.product_price;
        }, 0);
        setTotalAmount(total);
      });
  }, [isSignedIn, state,userId]);

  async function deleteProduct(product_title: any) {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title,
      }),
    });
    setState(!state);
   
  }

  async function handleIncrement(
    user_id: any,
    product_quantity: any,
    product_title: any,
    product_price:any
  ) {
    try {
      await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({
          user_id: user_id,
          product_quantity: product_quantity,
          product_title: product_title,
          product_price:product_price
        }),
      });
      setState(!state);
    } catch (error) {
      console.log("error", error);
    }
    console.log("testing");
  }
  async function handleDecrement(
    user_id: any,
    product_quantity: any,
    product_title: any
  ) {
    try {
      await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({
          user_id: user_id,
          product_quantity: product_quantity,
          product_title: product_title,
        }),
      });
      setState(!state);
    } catch (error) {
      console.log("error", error);
    }
    console.log("testing");
  }

  return (
    <>
      <div>

        {isSignedIn ? (
          <div className="grid grid-cols-1 p-5 sm:grid-cols-3 justify-center gap-x-10">
            {products?.map((item: any, index: number) => (
              <div className="flex" key={index}>
                <Image
                  src={item.image_url}
                  alt=""
                  className="w-56 h-56"
                  width={300}
                  height={300} />
                <div className="ml-10">
                  <h1 className="text-2xl text-indigo-800 font-bold">{item.product_title}</h1>
                  <h1 className="text-2xl font-medium">Rs{item.product_price}</h1>
                  <div className="flex border w-fit mt-5">
                    <button
                      onClick={() => handleDecrement(
                        item.user_id,
                        item.product_quantity - 1,
                        item.product_title
                      )}
                      className={`px-3 py-1 text-center hover:bg-gray-200`}
                    >
                      -
                    </button>
                    <div className="px-3 py-1 text-center">
                      {item.product_quantity}
                    </div>
                    <button
                      onClick={() => handleIncrement(
                        item.user_id,
                        item.product_quantity + 1,
                        item.product_title,
                        item.product_price
                      )}
                      className={`px-3 py-1 text-center hover:bg-gray-200`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => deleteProduct(item.product_title)}
                    className="bg-indigo-500 text-white py-1 px-5 rounded-md mt-10 font-semibold"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}


          </div>
        ) : (
          <div>
            <h1>Please Login First</h1>
          </div>
        )}
      </div>
      <div> <h1 className="text-2xl p-5 text-indigo-800 font-bold">Total Amount: {totalAmount.toFixed(2)}</h1></div>

   

    
    </>
  );
}
