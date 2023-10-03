"use client"
import { useState } from "react";

import Head_Picture from "./head_picture";
import Basic_Search from "./basic_search";
import Product_List from "./product_list";
import Filter_List from "./filter_list";
import Selected_Product from "./selected_product";
import First_Filter from "./first_filter";
import { mainSearch } from "@/api-requests";

const ContactPage = () => {

  const [searchQuery, setSearchQuery] = useState({
    fee_ongoing: false,
    fee_upfront:false,
    age_restriction:false,
    property_purpose: "undefined",
    rate_type: "undefined",
    repayment_type: "undefined",
    total_amount: 0,
    borrow_amount: 0,
    term: 0,
    period:0,
    feature_offset: false,
    feature_redraw: false,
    feature_extra: false,
    feature_cashback: false
  })

  const searchFunc = async () => {
    const feedbacks = await mainSearch(searchQuery);
    console.log(feedbacks);
  }

  return (
    <>
      <div className="flex flex-row justify-center w-full">
        <First_Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchFunc={searchFunc} />
        <div className="w-full h-full relative">
          <Head_Picture />
          <div className=" w-4/5  mx-auto !z-[9000] max-w-[1400px]">
            <Basic_Search />
            <div className="mt-[20px]">
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
                <Product_List />
                <Filter_List />
              </div>
            </div>
          </div>
          {/* <Selected_Product /> */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;