"use client"
import { useState } from "react";

const standarize = (input: number) => {
    if (input < 0.1) {
        const result = input * 100;
        return result.toFixed(2);
    } else {
        return input.toFixed(2);
    }
}
const Product_List = ({ products }: { products: any[] }) => {
    const [moreDetail,setMoreDetail]=useState([]);
    
    return (
        <div className="lg:col-span-8 w-full  p-[20px]">
            {products.map(each =>
                <div className="shadow-lg flex gap-[5px] p-[20px]">
                    <div className="w-1/5">
                        <img
                            src={each.banklogoUri}
                            alt="hero image"
                            className="w-[200px] h-[100px]"
                        />
                    </div>
                    <div className="w-4/5">
                        <div className="w-full flex justify-between m-[5px]">
                            <div>
                            <div className="text-2xl text-body font-bold text-primary m-[5px]">{each.mainInfo.name}</div>
                            {/* <div className="text-md text-body mb-[5px]">{each.mainInfo.description}</div> */}
                            </div>
                            
                            <div>
                                <button className="rounded-md bg-primary p-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                    Compare
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex divide-x-[2px] divide-primary">
                            <div className="w-1/3 text-center ">
                                <div className="w-full">Interest Rate</div>
                                <div className="w-full font-bold text-2xl ">{standarize(each.rate)}%</div>
                            </div>
                            <div className="w-1/3 text-center ">
                                <div className="w-full">Comparison Rate</div>
                                <div className="w-full font-bold text-2xl ">{standarize(each.comparisonRate)}%</div>
                            </div>
                            <div className="w-1/3 text-center ">
                                <div className="w-full">Monthly pay</div>
                                <div className="w-full font-bold text-2xl ">${standarize(each.comparisonRate * 30000)}</div>
                            </div>
                        </div>
                        <div className="w-full mt-[10px] flex-wrap flex justify-between gap-[10px]">
                            <div style={{ width: "calc(100% - 120px)" }}>
                                <div className="w-full whitespace-normal flex-wrap flex gap-[5px]">
                                    <li className="w-[200px]">{each.searchIndex.feature_offset?"Offset":"No Offset"}</li>
                                    <li className="w-[200px]">{each.searchIndex.feature_redraw?"Redraw":"No Redraw"}</li>
                                    <li className="w-[200px]">{each.searchIndex.feature_extra?"Extra repayments":"No Extra repayments"}</li>
                                    <li className="w-[200px]">{each.searchIndex.feature_cashback?"Cashback offer":"No Cashback offer"}</li>
                                </div>
                            </div>
                            <div className="w-[105px] flex-shrink-0">
                                <button className="rounded-md bg-primary p-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                    More Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Product_List;