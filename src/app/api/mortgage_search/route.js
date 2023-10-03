const { NextRequest, NextResponse } = require("next/server");
// const dbConnect = require("../../../server/dbConnect");
const mongoose=require ('mongoose');
const config=require("./../../../../global.config");

export async function GET(request) {
  // await dbConnect();
  const opts = {
    bufferCommands: false,
  };
  const MONGODB_URI = config.HOST+'/'+config.DB;
  await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    console.log("Connected DB");
    return mongoose;
  });
  try {
    const searchParams = request.nextUrl.searchParams;
    console.log( searchParams);

    

    let json_response = {
      status: "success",
      data: "you are jangchol",
    };
    return NextResponse.json(json_response);
  } catch (error) {
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

