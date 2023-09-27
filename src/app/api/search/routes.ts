
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("incoming")
  return NextResponse.json({
    results: [
      {
        id: 1,
        name: "Product 1"
      },
      {
        id: 2,
        name: "Product 2"
      }
    ]
  });
}