
import { NextRequest, NextResponse } from "next/server";
const dbConnect = require("./../../server/dbConnect");
const Product = require("./../../server/model/product");

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    console.log(searchParams);

    await dbConnect();
    


    let json_response = {
      status: "success",
      data:"you are jangchol"
    };
    return NextResponse.json(json_response);

  } catch (error: any) {
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}