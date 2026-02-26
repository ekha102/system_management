import { NextRequest } from "next/server";






export const PUT = async (request: NextRequest) => {
  const body = await request.json();
  const { inv_quantity, inv_id } = body;
  
}