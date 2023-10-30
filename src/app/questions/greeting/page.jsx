"use client"
import Image from "next/image";
import SectionTitle from "../../../components/Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium gap-1">
      <span className="flex flex-none h-[30px] !w-[30px] items-center justify-center rounded-md bg-primary text-white">
        {checkIcon}
      </span>
      <span className="grow pl-1">
        {text}
      </span>

    </p>
  );

  return (
    <section id="about" className="flex items-center h-[100vh]">
      <div className="container max-w-[1000px]">
        <div className=" pb-16  md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center ">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Welcome to Rate Ranger!"
                paragraph="Compare rates from top banks and lenders before you take the big leap when you apply for a home loan!
                ."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap">
                  <List text="Access different deals and offers with just a few clicks!" />
                  <List text="No dramas! No fees! Use Rate Ranger anytime, all the time!" />
                  <List text="2 minutes is all it takes to unlock valuable information and data!" />
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href="/"
                  className="flex w-1/2 items-center justify-center rounded-md bg-white py-3 px-9 text-base font-medium border-primary border border-1 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                >
                  Back
                </Link>
                <Link
                  href="/questions/1-loan-purpose"
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
