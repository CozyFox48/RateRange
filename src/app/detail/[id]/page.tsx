"use client";
import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { detailedInfo } from "@/api-requests";
import standarize from "@/utilz/numberStandize";

const AboutPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({ searchIndex: {}, product: {}, bank: {} })


  useEffect(() => {
    const getDetailedInfo = async () => {
      const result = await detailedInfo(id);
      setData(result);
    }
    getDetailedInfo();
  }, [])

  return (
    <>
      <div className='container mt-[100px]'>
        <div className='border-black border-[1px] w-full flex rounded-xl p-[10px]'>
          <div className='w-1/2 p-[10px]'>
            <div className='w-1/3'>
              <img
                src={data.bank.logoUri}
                alt="hero image"
                className="w-full"
              />
            </div>
            <div className='w-full  text-[30px] font-bold'>{data.product.mainInfo?.name}</div>
            <div className='w-full '>{data.product.mainInfo?.description}</div>
            <ul className='flex list-disc list-inside justify-around'>
              <li>{data.searchIndex.repaymentType}</li>
              <li>{data.searchIndex.loanPurpose}</li>
              <li>{data.searchIndex.rateType}</li>
              {data.searchIndex.rateType === "fixed" ? <li>{data.searchIndex.period}</li> : <></>}
            </ul>
          </div>
          <div className='w-1/2 bg-primary bg-opacity-[0.1] flex flex-col p-[10px]'>
            <div className='w-full grow flex divide-x divide-dotted divide-black p-[10px]'>
              <div className='w-1/2 flex flex-col justify-center'>
                <div className='w-full text-center'>Interest Rate</div>
                <div className='w-full text-center text-[40px] font-bold'>{standarize(Number(data.searchIndex.rate))} %</div>
                <div className='w-full text-center text-[20px] font-bold'>{data.searchIndex.rateType}</div>
              </div>
              <div className='w-1/2 flex flex-col justify-center'>
                <div className='w-full text-center'>Comparison Rate</div>
                <div className='w-full text-center text-[40px] font-bold'>{standarize(Number(data.searchIndex.comparisonRate))} %</div>
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <button
                className={`rounded-md bg-primary border-[1px] p-2 text-base font-medium  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp`}
              >
                More Detail
              </button>
            </div>
          </div>
        </div>
        <div className=' mt-[20px] w-full p-[10px]'>
          <div className='w-full text-[24px] text-center'>Calculate your repayments for this loan</div>
          <div className='w-full flex'>
            <div className='w-1/2 align-center grid grid-cols justify-center gap-[5%]'>
              <input
                type="number"
                className="h-[40px] rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
              />
              <input
                type="number"
                className="h-[40px] rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
              />
            </div>
            <div className='w-1/2 border-[1px] rounded-2xl m-[1%]'>
              <div className='w-full text-center'>Estimated Repayment is</div>
              <div className='w-full text-center text-[30px] font-bold'>$ 4563</div>
              <div className='flex m-[2%]'>
                <button
                  type="button"
                  className={`inline-flex w-1/3 justify-center rounded-l-full  px-3 py-2 text-md font-semibold  border-gray border-[1px]`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={`inline-flex w-1/3 justify-center  px-3 py-2 text-md font-semibold  border-gray border-[1px]`}
                >
                  Fortnightly
                </button>
                <button
                  type="button"
                  className={`inline-flex w-1/3 justify-center rounded-r-full  px-3 py-2 text-md font-semibold  border-gray border-[1px]`}
                >
                  Weekly
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutPage;
