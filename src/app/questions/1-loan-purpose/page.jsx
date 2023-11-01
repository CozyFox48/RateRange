"use client"
import { useContext } from "react";
import Image from "next/image";
import SectionTitle from "../../../components/Common/SectionTitle";
import Link from "next/link";
import RadioButton from "./../../../components/radioButton/index";
import { QueryContext } from './../../../utilz/queryContext';

const AboutSectionOne = () => {
    const { searchQuery, setSearchQuery } = useContext(QueryContext);


    return (
        <section id="about" className="flex items-center h-[100vh]">
            <div className="container max-w-[1000px]">
                <div className=" pb-16  md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center ">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle
                                title="What is your loan purpose"
                                paragraph=""
                                mb="44px"
                            />
                            <div
                                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                                data-wow-delay=".15s"
                            >
                                <RadioButton
                                    text="Buy first home"
                                    clicked={searchQuery.loanPurpose == "firstHome"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, loanPurpose: "firstHome" })
                                    }}
                                />
                                <RadioButton
                                    text="Buy a home to live"
                                    clicked={searchQuery.loanPurpose == "owned"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, loanPurpose: "owned" })
                                    }}
                                />
                                <RadioButton
                                    text="Buy an investment property"
                                    clicked={searchQuery.loanPurpose == "invest"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, loanPurpose: "invest" })
                                    }}
                                />
                                <RadioButton
                                    text="Refinance home"
                                    clicked={searchQuery.loanPurpose == "refinance"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, loanPurpose: "refinance" })
                                    }}
                                />
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href="/questions/greeting"
                                    className="flex w-1/2 items-center justify-center rounded-md text-black bg-white py-3 px-9 text-base font-medium border-primary border border-1 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                                >
                                    Back
                                </Link>
                                <Link
                                    href="/questions/2-borrow-amount"
                                    className="flex w-1/2 items-center justify-center rounded-md bg-primary py-3 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                                >
                                    Next
                                </Link>
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