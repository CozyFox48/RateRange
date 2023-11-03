"use client"
import Image from "next/image";
import SectionTitle from "../../../components/Common/SectionTitle";
import LinkButton from "./../../../components/linkButton/index";
import { useContext } from "react";
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
                                title="What is your repayment type"
                                paragraph=""
                                mb="44px"
                            />

                            <div
                                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                                data-wow-delay=".15s"
                            >
                                <RadioButton
                                    text="Principal and Interest"
                                    clicked={searchQuery.repaymentType == "I&P"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, repaymentType: "I&P" })
                                    }}
                                />
                                <RadioButton
                                    text="Interest Only"
                                    clicked={searchQuery.repaymentType == "Ionly"}
                                    onClick={() => {
                                        setSearchQuery({ ...searchQuery, repaymentType: "Ionly" })
                                    }}
                                />
                            </div>
                            <div className="flex gap-2">
                                <LinkButton
                                    content="Back"
                                    mode="white"
                                    nextLink="/questions/3-loan-type"
                                    className="w-1/2"
                                >
                                </LinkButton>
                                <LinkButton
                                    content="Next"
                                    className="w-1/2"
                                    nextLink="/signup"
                                    disabled={
                                        searchQuery.repaymentType !== "Ionly"
                                        && searchQuery.repaymentType !== "I&P"
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
