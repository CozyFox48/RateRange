"use client"
import Image from "next/image";
import SectionTitle from "../../../components/Common/SectionTitle";
import LinkButton from "./../../../components/linkButton/index";
import { QueryContext } from './../../../utilz/queryContext';
import { useContext } from "react";

const AboutSectionOne = () => {
    const { searchQuery, setSearchQuery } = useContext(QueryContext);
    return (
        <section id="about" className="flex items-center h-[100vh]">
            <div className="container max-w-[1000px]">
                <div className=" pb-16  md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center ">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle
                                title="How much  do you want to borrow?"
                                paragraph=""
                                mb="44px"
                            />

                            <div
                                className="wow fadeInUp mb-[12px] max-w-[570px]"
                                data-wow-delay=".15s"
                            >
                                <input
                                    type="number"
                                    name="number"
                                    onChange={(e) => {
                                        setSearchQuery({ ...searchQuery, borrow_amount: e.target.value })
                                    }}
                                    value={searchQuery.borrow_amount}
                                    placeholder="Enter your borrow amount"
                                    className="w-full rounded-md border border-primary py-3 px-6 text-base placeholder-body-color shadow-one outline-none focus:border-2 focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                />
                            </div>
                            <div className="flex gap-2">
                                <LinkButton
                                    content="Back"
                                    mode="white"
                                    nextLink="/questions/1-loan-purpose"
                                    className="w-1/2"
                                >
                                </LinkButton>
                                <LinkButton
                                    content="Next"
                                    className="w-1/2"
                                    nextLink="/questions/3-loan-type"
                                    disabled={
                                        searchQuery.borrow_amount <= 0
                                    }
                                >
                                </LinkButton>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 hidden lg:block">
                            <div
                                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                                data-wow-delay=".2s"
                            >
                                <Image
                                    src="/images/questions/background.jpg"
                                    alt="about-image"
                                    fill
                                    className="mx-auto max-w-full lg:mr-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionOne;
