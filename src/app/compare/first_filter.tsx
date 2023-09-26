"use client"
import { Dialog, Transition } from '@headlessui/react'
import { useRef, Fragment, useState } from "react";
import Image from "next/image"
type ChildComponentProps = {
    searchQuery:any;
    setSearchQuery: React.Dispatch<React.SetStateAction<any>>;
    searchFunc:()=>void;
};
const First_Filter: React.FC<ChildComponentProps> = ({  searchQuery, setSearchQuery,searchFunc }) => {

    const [agreePolicy, setAgreePolicy] = useState(false);
    const [open, setOpen] = useState(true);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10 "  onClose={()=>{}}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-dark bg-opacity-80 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-end  w-3/4 mx-auto justify-center  text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg w-full bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8 ">
                                {/* <div className='fixed top-0 left-0 w-full h-full '>
                                    <div className='bg-primary w-full h-[15px]' style={{
                                        transform: 'skewY(-30deg)',
                                        transformOrigin: 'center center',
                                    }}>
                                    </div>
                                </div> */}
                                <div className='w-full mx-[5%]  text-2xl font-bold mt-[3%] mb-[1%] text-primary'>
                                    <Image
                                        src="/images/logo/logo1.png"
                                        alt="logo"
                                        width={180}
                                        height={80}
                                        className="dark:hidden"
                                    />
                                </div>
                                <div className='w-full mx-[5%]  text-2xl font-bold  mb-[1%] text-primary'>
                                    Let&apos;s help you find your new home loan
                                </div>
                                <div className='grid grid-cols-2 gap-x-[40px] gap-y-[0px] mx-[5%] mb-[3%]'>
                                    <div className=''>
                                        <div className='w-full m-[5px] font-bold text-xl'>Loan Purpose</div>
                                        <div className='flex w-full gap-[10px]'>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.loan_purpose==="new purchase"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, loan_purpose:"new purchase"})}}
                                            >
                                                New purchase
                                            </button>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.loan_purpose==="refinance"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, loan_purpose:"refinance"})}}
                                            >
                                                Refinance
                                            </button>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='w-full m-[5px] font-bold text-xl'>Property Purpose</div>
                                        <div className='flex w-full gap-[10px]'>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.property_purpose==="investment"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, property_purpose:"investment"})}}
                                            >
                                                Investment
                                            </button>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.property_purpose==="owned"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, property_purpose:"owned"})}}
                                            >
                                                Owned
                                            </button>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='w-full m-[5px] font-bold text-xl'>Rate Type</div>
                                        <div className='flex w-full gap-[10px]'>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.rate_type==="fixed"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, rate_type:"fixed"})}}
                                            >
                                                Fixed
                                            </button>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.rate_type==="variable"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, rate_type:"variable"})}}
                                            >
                                                Variable
                                            </button>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='w-full m-[5px] font-bold text-xl'>Repayment Type</div>
                                        <div className='flex w-full gap-[10px]'>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.repayment_type==="both"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, repayment_type:"both"})}}
                                            >
                                                Principle and Interest
                                            </button>
                                            <button
                                                type="button"
                                                className={`inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px] 
                                                ${searchQuery.repayment_type==="interest_only"?"bg-primary":""}`}
                                                onClick={()=>{setSearchQuery({...searchQuery, repayment_type:"interest_only"})}}
                                            >
                                                Interest Only
                                            </button>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-[10px]'>
                                        <div>
                                            <div className='w-full m-[5px] font-bold text-xl'>Total Amount</div>
                                            <div className='flex w-full gap-[10px]'>
                                                <input
                                                    type="number"
                                                    onChange={(e)=>{setSearchQuery({...searchQuery, total_amount:e.target.value})}}
                                                    value={searchQuery.total_amount}
                                                    className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                                />
                                            </div>
                                        </div>
                                        <div >
                                            <div className='w-full m-[5px] font-bold text-xl'>Borrow Amount</div>
                                            <div className='flex w-full gap-[10px]'>
                                                <input
                                                    type="number"
                                                    onChange={(e)=>{setSearchQuery({...searchQuery, borrow_amount:e.target.value})}}
                                                    value={searchQuery.borrow_amount}
                                                    className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-[10px]'>
                                        <div>
                                            <div className='w-full m-[5px] font-bold text-xl'>Term</div>
                                            <div className='flex w-full gap-[10px]'>
                                                <input
                                                    type="number"
                                                    onChange={(e)=>{setSearchQuery({...searchQuery, term:e.target.value})}}
                                                    value={searchQuery.term}
                                                    className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                                />
                                            </div>
                                        </div>
                                        <div >
                                            <div className='w-full m-[5px] font-bold text-xl'>Location</div>
                                            <div className='flex w-full gap-[10px]'>
                                                <input
                                                    type="number"
                                                    className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 mx-[3%] mb-[20px] flex justify-between sm:flex-row-reverse sm:px-6 align-center">
                                    <button
                                        type="button"
                                        disabled={!agreePolicy}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 disabled:bg-opacity-20 hover:bg-opacity-80 sm:mt-0 sm:w-auto"
                                        onClick={() => {
                                            searchFunc();
                                            setOpen(false);
                                        }}
                                    >
                                        Continue
                                    </button>

                                    <div className="flex align-center">
                                        <input type="checkbox"
                                            checked={agreePolicy}
                                            onChange={(e) => { setAgreePolicy(e.target.checked) }}
                                            className=""
                                            id="hs-default-checkbox"
                                        />
                                        <label htmlFor="hs-default-checkbox" className="my-auto mx-[5px]">
                                            By clicking this box, you agree to our terms and conditions and privacy policy
                                        </label>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default First_Filter;