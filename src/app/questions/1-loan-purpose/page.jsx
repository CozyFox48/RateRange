import Image from "next/image";
import SectionTitle from "../../../components/Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
    <input type="radio" />
);

const AboutSectionOne = () => {
    const List = ({ text }) => (
        <label className="mb-5 flex items-center text-lg font-medium gap-1">
            <span className="flex-none  bg-white border border-primary rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300">
                <span className="rounded-full bg-primary w-3 h-3"></span>
            </span>
            <span className="grow pl-3">
                {text}
            </span>
        </label>
    );

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
                                <List text="Buy first home" />
                                <List text="Buy a home to live" />
                                <List text="Buy an investment property" />
                                <List text="Refinance home" />
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href="/questions/greeting"
                                    className="flex w-1/2 items-center justify-center rounded-md bg-white py-3 px-9 text-base font-medium border-primary border border-1 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
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
