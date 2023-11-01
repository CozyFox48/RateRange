"use client"
import Image from "next/image";
import { useState } from 'react';
import SectionTitle from "../../../components/Common/SectionTitle";
import Link from "next/link";
import Slider from 'react-input-slider';
import RadioButton from "./../../../components/radioButton/index";

const AboutSectionOne = () => {
    const [fixedValue, setFixedValue] = useState({ x: 1, y: 10 });
    const [variableValue, setVariableValue] = useState({ x: 1, y: 10 });

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
                                className="wow fadeInUp mb-[12px] max-w-[570px] w-full"
                                data-wow-delay=".15s"
                            >
                                <RadioButton
                                    text={`Fixed ( ${fixedValue.x} )`}
                                    clicked={searchQuery.rateType == "fixed"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, rateType: "fixed" })
                                    }}
                                />
                                <div className="w-full">
                                    <Slider className="w-full" axis="x" x={fixedValue.x} xstep={1} xmax={10} xmin={1} onChange={setFixedValue} />
                                </div>
                            </div>
                            <div
                                className="wow fadeInUp mb-[12px] max-w-[570px] w-full"
                                data-wow-delay=".15s"
                            >
                                <label className="mb-5 flex items-center text-lg font-medium gap-1">
                                    <span className="flex-none  bg-white border border-primary rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300">
                                        <span className="rounded-full bg-primary w-3 h-3"></span>
                                    </span>
                                    <span className="grow pl-3">
                                        Variable ( {variableValue.x} )
                                    </span>
                                </label>
                                <div className="w-full">
                    
                                    <Slider className="w-full" axis="x" x={variableValue.x} xstep={1} xmax={30} xmin={1} onChange={setVariableValue} />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href="/questions/2-borrow-amount"
                                    className="flex w-1/2 items-center justify-center text-black rounded-md bg-white py-3 px-9 text-base font-medium border-primary border border-1 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                                >
                                    Back
                                </Link>
                                <Link
                                    href="/questions/4-repayment"
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
