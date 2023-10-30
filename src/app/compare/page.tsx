"use client"
import { useState } from "react";

import Head_Picture from "./head_picture";
import Basic_Search from "./basic_search";
import Product_List from "./product_list";
import Filter_List from "./filter_list";
import Selected_Product from "./selected_product";
import First_Filter from "./first_filter";
import { mainSearch } from "@/api-requests";
import DetailedCompare from "./detailed_compare";

const ContactPage = () => {

  const [searchQuery, setSearchQuery] = useState({
    fee_ongoing: null,
    fee_upfront: null,
    age_restriction: null,
    loanPurpose: "undefined",
    rateType: "undefined",
    repaymentType: "undefined",
    total_amount: 9000000,
    borrow_amount: 8000000,
    fixed_term: 0,
    period: 30,
    feature_offset: null,
    feature_redraw: null,
    feature_extra: null,
    feature_cashback: null
  });
  const [products, setProducts] = useState<any[]>([]);
  const [select4detail, setSelect4detail] = useState<Number[]>([]);
  const [openDetailedCompare, setOpenDetailedCompare] = useState(false);
  const [openSelected, setOpenSelected] = useState(false);

  const searchFunc = async () => {
    const feedbacks = await mainSearch(searchQuery);
    console.log(feedbacks);
    setProducts(feedbacks);
  }

  return (
    <>
      <div className="flex flex-row justify-center w-full">
        <First_Filter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchFunc={searchFunc}
        />
        <DetailedCompare
          products={products}
          setSelect4detail={setSelect4detail}
          select4detail={select4detail}
          openDetailedCompare={openDetailedCompare}
          setOpenDetailedCompare={setOpenDetailedCompare}
        />
        <div className="w-full h-full relative">
          <Head_Picture />
          <div className=" md:w-4/5  mx-auto !z-[9000] max-w-[1400px]">
            <Basic_Search />
            <div className="mt-[20px]">
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
                <Product_List
                  products={products}
                  select4detail={select4detail}
                  setSelect4detail={setSelect4detail}
                  setOpenSelected={setOpenSelected}
                />
                <Filter_List />
              </div>
            </div>
          </div>
          {openSelected === false ? <></> :
            <Selected_Product
              products={products}
              setSelect4detail={setSelect4detail}
              select4detail={select4detail}
              setOpenDetailedCompare={setOpenDetailedCompare}
              setOpenSelected={setOpenSelected}
            />}

        </div>
      </div>
    </>
  );
};

export default ContactPage;