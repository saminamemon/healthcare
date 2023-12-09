import { NextRequest, NextResponse } from "next/server";
import {  cartColumns, db } from "../../../../Database/Drizzle";
 import { eq,and } from "drizzle-orm";

 

export const POST = async (request: NextRequest) => {
  

  const req = await request.json();
  console.log("Request payload:", req);
  try {
    const res = await db
      .insert(cartColumns)
      .values({
        
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
        payment_method: req.payment_method
      }).onConflictDoUpdate({
          target: [ cartColumns.product_title],
          set: {
            product_quantity: req.product_quantity,
            product_price: req.product_price,
          },
        
      })

      .returning();
     
    console.log("Data Posted To Database");
   
    return NextResponse.json({ res });
  } catch (error) {
    console.log("Error While Posting Data To Database");
    console.log("error", error);}
     return NextResponse.json({ message: "Something Went Wrong" });
  }


 export const GET = async (request: NextRequest) => {
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartColumns)
      .where(eq(cartColumns.user_id, uid));
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .delete(cartColumns)
      .where(
        and(
          eq(cartColumns.user_id, req.user_id),
          eq(cartColumns.product_title, req.product_title)
        )
      )
      .returning();
    console.log("Product Successfully Deleted");
    return NextResponse.json({ res });
  } catch (error) {
    console.log("Error removing item from cart", error);
    return NextResponse.json({ message: "Error Deleting Product" });
  }
};

export const PUT = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .update(cartColumns)
      .set({ product_quantity: req.product_quantity })
      .where(
        and(
          eq(cartColumns.user_id, req.user_id),
          eq(cartColumns.product_title, req.product_title)
        )
      )
      .returning();
    console.log("Quantity Updated");
    return NextResponse.json({ message: "Quantity Updated" });
  } catch (error) {
    console.log("Error while updating quantity", error);
    return NextResponse.json({ message: "Error while updating quantity" });
  }
};