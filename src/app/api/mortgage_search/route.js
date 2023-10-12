import { NextResponse } from "next/server";
import dbConnect from "../../../server/dbConnect";
import SearchIndexDB from "./../../../server/model/search_mortgage";
import ProductDB from "./../../../server/model/product";
import bankDB from "./../../../server/model/bank";

const stringProperties = ["loanPurpose", "rateType", "repaymentType"];
const booleanProperties = ["fee_ongoing", "fee_upfront", "feature_offset", "feature_redraw", "feature_extra", "feature_cashback"];

export async function GET(request) {
  await dbConnect();

  try {
    const searchParams = new URLSearchParams(request.nextUrl.searchParams);
    const convertedQuery = {};

    searchParams.forEach((value, key) => {
      if (stringProperties.includes(key) && value !== "undefined") {
        convertedQuery[key] = value;
      } else if (booleanProperties.includes(key)) {
        if (value === "true") {
          convertedQuery[key] = true;
        }

      } else if (key === "borrow_amount") {
        const realValue = Number(value);
        if (realValue > 0) {
          convertedQuery["$expr"] = { "$and": [] };
          // convertedQuery.$expr.$and.push(
          //   { $or: [{ $eq: ["$loanAmount_max", null] }, { $gte: ["$loanAmount_max", realValue] }] }
          // );
          // convertedQuery.$expr.$and.push(
          //   { $or: [{ $eq: ["$loanAmount_min", null] }, { $lte: ["$loanAmount_min", realValue] }] }
          // );
          if (searchParams.has("total_amount")) {
            const totalAmount = Number(searchParams.get("total_amount"));
            if (totalAmount > 0) {
              const LVR = realValue / totalAmount;
              // convertedQuery.$expr.$and.push(
              //   { $or: [{ $eq: ["$LVR_min", null] }, { $lte: ["$LVR_min", LVR] }] }
              // );
              // convertedQuery.$expr.$and.push(
              //   { $or: [{ $eq: ["$LVR_max", null] }, { $gte: ["$LVR_max", LVR] }] }
              // );
            }
          }
        }
      } else if (key === "fixed_term" && searchParams.get("rateType") === "fixed") {
        const realValue = Number(value);
        if (realValue > 0) {
          convertedQuery[key] = realValue * 12;
        }
      }
    });


    const result = await SearchIndexDB.aggregate([
      {
        $match: convertedQuery
      }, {
        $sort: { rate: 1 }
      }, {
        $limit: 10
      }
    ]);


    // const result = await SearchIndexDB.find().limit(10);

    let finalResult = [];
    for (const each of result) {

      const productInfo = await ProductDB.findById(each.product_refer);

      const bankInfo = await bankDB.findById(each.bank);

      finalResult.push({
        searchIndex: each,
        mainInfo: productInfo.mainInfo,
        bankname: bankInfo.brandName,
        bankUri: bankInfo.publicBaseUri,
        banklogoUri: bankInfo.logoUri
      })
    }

    let json_response = {
      status: "success",
      data: finalResult,
    };
    return NextResponse.json(json_response);
  } catch (error) {
    console.log(error);
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