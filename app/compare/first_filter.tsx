"use client"
import { Dialog, Transition } from '@headlessui/react'
import { useRef, Fragment } from "react";
import Image from "next/image"
type ChildComponentProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const First_Filter: React.FC<ChildComponentProps> = ({ open, setOpen }) => {
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg w-full bg-white text-left shadow-xl transition-all sm:my-8 ">
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
                                    Let's help you find your new home loan
                                </div>
                                <div className='grid grid-cols-2 gap-[5%] mx-[5%] mb-[3%]'>
                                    <div className=''>
                                        <div className='w-full m-[5px] font-bold text-xl'>Loan Purpose</div>
                                        <div className='flex w-full gap-[10px]'>
                                            <button
                                                type="button"
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                            >
                                                New purchase
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]  "
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
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                            >
                                                Investment
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]  "
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
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                            >
                                                Fixed
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]  "
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
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                            >
                                                Principle and Interest
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-1/2 justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]  "
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
                                                    className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-md font-semibold  border-gray border-[1px]"
                                                />
                                            </div>
                                        </div>
                                        <div >
                                            <div className='w-full m-[5px] font-bold text-xl'>Borrow Amount</div>
                                            <div className='flex w-full gap-[10px]'>
                                                <input
                                                    type="number"
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
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
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