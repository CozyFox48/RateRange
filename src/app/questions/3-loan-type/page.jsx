"use client"
import Image from "next/image";
import { useState } from 'react';
import SectionTitle from "../../../components/Common/SectionTitle";
import LinkButton from "./../../../components/linkButton/index";
import Slider from 'react-input-slider';
import RadioButton from "./../../../components/radioButton/index";
import { QueryContext } from './../../../utilz/queryContext';
import { useContext } from "react";


const AboutSectionOne = () => {
    const [fixedValue, setFixedValue] = useState({ x: 5});
    const [variableValue, setVariableValue] = useState({ x: 15 });
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
                                    <Slider
                                        className="w-full"
                                        axis="x"
                                        x={fixedValue.x}
                                        xstep={1}
                                        xmax={10}
                                        xmin={1}
                                        onChange={setFixedValue}
                                        disabled={searchQuery.rateType !== "fixed"}
                                    />
                                </div>
                            </div>
                            <div
                                className="wow fadeInUp mb-[12px] max-w-[570px] w-full"
                                data-wow-delay=".15s"
                            >

                                <RadioButton
                                    text={`Variable ( ${variableValue.x} )`}
                                    clicked={searchQuery.rateType == "variable"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, rateType: "variable" })
                                    }}
                                />
                                <div className="w-full">
                                    <Slider
                                        className="w-full bg-primary"
                                        axis="x"
                                        x={variableValue.x}
                                        xstep={1}
                                        xmax={30}
                                        xmin={1}
                                        onChange={setVariableValue}
                                        disabled={searchQuery.rateType !== "variable"}
                                    />
                                </div>

                            </div>
                            <div className="flex gap-2">

                                <LinkButton
                                    content="Back"
                                    mode="white"
                                    nextLink="/questions/2-borrow-amount"
                                    className="w-1/2"
                                >
                                </LinkButton>
                                <LinkButton
                                    content="Next"
                                    className="w-1/2"
                                    nextLink="/questions/4-repayment"
                                    disabled={
                                        searchQuery.rateType !== "fixed"
                                        && searchQuery.rateType !== "variable"
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
