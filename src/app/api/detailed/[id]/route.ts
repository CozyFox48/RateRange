import { NextResponse } from "next/server";
import dbConnect from "../../../../server/dbConnect";
import SearchIndexDB from "./../../../../server/model/search_mortgage";
import ProductDB from ".././../../../server/model/product";
import bankDB from "./../../../../server/model/bank";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  await dbConnect();

  const searchIndex = await SearchIndexDB.findById(id);
  const product = await ProductDB.findById(searchIndex.product_refer);
  const bank = await bankDB.findById(searchIndex.bank);

  
  let json_response = {
    status: "success",
    data: {
      searchIndex: searchIndex,
      product: product,
      bank: bank
    },
  };
  return NextResponse.json(json_response);
}
