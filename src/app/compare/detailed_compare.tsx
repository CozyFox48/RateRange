"use client";
import { Dialog, Transition, Popover } from '@headlessui/react'
import { Fragment, useState } from "react";

type ChildComponentProps = {
    products: any[],
    select4detail: Number[],
    openDetailedCompare: boolean,
    setOpenDetailedCompare: React.Dispatch<React.SetStateAction<boolean>>;
};


const DetailedCompare: React.FC<ChildComponentProps> = ({ products, select4detail, openDetailedCompare, setOpenDetailedCompare }) => {

    const tableLayout = [[
        "string", "Name", "mainInfo", "name"
    ], [
        "string", "Description", "mainInfo", "description"
    ], [
        "number", "Rate", "searchIndex", "rate"
    ], [
        "number", "Compare Rate", "searchIndex", "comparisonRate"
    ], [
        "boolean", "Ongoing Fee", "searchIndex", "fee_ongoing"
    ], [
        "boolean", "Upfront Fee", "searchIndex", "fee_upfront"
    ], [
        "boolean", "Offset", "searchIndex", "feature_offset"
    ], [
        "boolean", "Extra repayment", "searchIndex", "feature_extra"
    ], [
        "boolean", "Redraw", "searchIndex", "feature_redraw"
    ], [
        "boolean", "Cashback", "searchIndex", "feature_cashback"
    ]];

    const cellContent = (eachRow: string[], each: any) => {
        let result = "";
        const eachProduct = products[Number(each)];
        try {

            switch (eachRow[0]) {
                case "boolean":
                    console.log(each, eachRow[3], eachProduct[eachRow[2]][eachRow[3]], eachProduct[eachRow[2]][eachRow[3]] ? "True" : "False");
                    result = eachProduct[eachRow[2]][eachRow[3]] ? "True" : "False";
                    break;
                case "string":
                    result = eachProduct[eachRow[2]][eachRow[3]];
                    break;
                case "number":
                    result = eachProduct[eachRow[2]][eachRow[3]];
                    break;
            }
        } catch (error) {
            result = eachRow[0] === "boolean" ? "False" : "";
        }

        return result;
    }

    const mainContent = () => {
        return tableLayout.map((eachRow, key) =>
            <tr className={`dark:bg-gray-800 dark:border-gray-700 ${Number(key) % 2 === 0 ? "bg-secondary bg-opacity-[0.3]" : ""}`}>
                <th scope="row" className="px-6 py-4 font-medium border-x text-gray-900 whitespace-nowrap dark:text-white">
                    {eachRow[1]}
                </th>
                {select4detail.map(each =>
                    <td className="px-6 py-4 border-x text-center">
                        {cellContent(eachRow, each)}
                        {/* {products[Number(each)][eachRow[2]][eachRow[3]]} */}
                    </td>
                )}

            </tr>)
    }

    return (
        <Transition.Root show={openDetailedCompare} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={() => { }}>
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
                            <Dialog.Panel className="relative transform  rounded-lg w-full bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8 ">
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3"></th>
                                                {select4detail.map(each => {
                                                    return <th scope="col" className="px-6 py-3 p-auto border-x ">
                                                        <div className='flex justify-center items-center'>
                                                            <img
                                                                src={products[Number(each)].banklogoUri}
                                                                alt="hero image"
                                                                className="max-w-[90%] block"
                                                            />
                                                        </div>
                                                    </th>
                                                }
                                                )}
                                            </tr>
                                            <tr>
                                                <th scope="col" className="px-6 py-3"></th>
                                                {select4detail.map(each => {
                                                    return <th scope="col" className="px-6 py-3 p-auto border-x ">
                                                        <div className='flex justify-center items-center '>
                                                            <button
                                                                className={`rounded-md px-[10px] py-[5px] bg-primary text-white my-auto text-base font-medium  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp`}
                                                            >
                                                                More Detail
                                                            </button>
                                                        </div>
                                                    </th>
                                                }
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {mainContent()}

                                        </tbody>
                                    </table>
                                </div>


                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default DetailedCompare;