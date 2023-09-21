"use client"
import Image from "next/image";

const Basic_Search = () => {
    return (
        <div className="mt-[20px] rounded-[16px] overflow-hidden shadow-xl bg-primary">
            <form className="m-[10px] ">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 xs:w-1/2 md:w-1/4">
                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 xs:w-1/2 md:w-1/4">
                        <div className="mb-8">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 xs:w-1/2 md:w-1/4">
                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 xs:w-1/2 md:w-1/4">
                        <div className="mb-8">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Basic_Search;