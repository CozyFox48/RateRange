"use client"
import Image from "next/image";

const Product_List=()=>{
    return (
<div className="lg:col-span-8 w-full border-[1px] border-gray p-[20px]">
                  <div className="shadow-lg flex gap-[5px] p-[20px]">
                    <div className="w-1/5">
                      <Image
                        src="/img/download-1-2.png"
                        alt="hero image"
                        width={200}
                        height={100}
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <div className="w-4/5">
                      <div className="w-full flex justify-between h-[50px]">
                        <div className="text-2xl text-body text-primary">Reserve Bank of Australia</div>
                        <div>
                          <button className="rounded-md bg-primary p-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                            Compare
                          </button>
                        </div>
                      </div>
                      <div className="w-full flex divide-x-[2px] divide-primary">
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                      </div>
                      <div className="w-full mt-[10px] flex-wrap flex justify-between gap-[10px]">
                        <div style={{ width: "calc(100% - 120px)" }}>
                          <div className="w-full whitespace-normal flex-wrap flex gap-[5px]">
                            <li className="w-[200px]">Automated Payment</li>
                            <li className="w-[200px]">Automated Payment</li>
                            <li className="w-[200px]">Automated Payment</li>
                            <li className="w-[200px]">Automated Payment</li>
                          </div>
                        </div>
                        <div className="w-[105px] flex-shrink-0">
                          <button className="rounded-md bg-primary p-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                            More Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-lg flex gap-[5px] p-[20px]">
                    <div className="w-1/5">
                      <Image
                        src="/img/download-1-2.png"
                        alt="hero image"
                        width={200}
                        height={100}
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <div className="w-4/5">
                      <div className="w-full flex justify-between h-[50px]">
                        <div className="text-2xl text-body text-primary">Reserve Bank of Australia</div>
                        <div>
                          <button className="rounded-md bg-primary p-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                            Compare
                          </button>
                        </div>
                      </div>
                      <div className="w-full flex divide-x-[2px] divide-primary">
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                        <div className="w-1/4 text-center ">
                          <div className="w-full">Interest Rate</div>
                          <div className="w-full font-bold text-2xl ">4.67%</div>
                        </div>
                      </div>
                      <div className="w-full mt-[10px] flex-wrap flex justify-between gap-[10px]">
                        <div style={{ width: "calc(100% - 120px)" }}>
                          <div className="w-full whitespace-normal flex-wrap flex gap-[5px]">
                            <li className="w-[200px]">Automated Payment</li>
                            <li className="w-[200px]">Automated Payment</li>
                            <li className="w-[200px]">Automated Payment</li>
                            <li className="w-[200px]">Automated Payment</li>
                          </div>
                        </div>
                        <div className="w-[105px] flex-shrink-0">
                          <button className="rounded-md bg-primary p-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                            More Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default Product_List;