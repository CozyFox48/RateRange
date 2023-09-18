import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import  Compare  from "@/components/Compare";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

  <div className="bg-[#fefefe] flex flex-row justify-center w-full">
      <div className="bg-[#fefefe] w-[1920px] h-[4523px] relative">
        <div className="absolute w-[1920px] h-[1098px] top-0 left-0">

          <div className="absolute w-[1320px] h-[560px] top-[538px] left-[300px] bg-white rounded-[16px] overflow-hidden shadow-[var(--shadow)]">
            <div className="inline-flex flex-col items-start gap-[16px] absolute top-[56px] left-[82px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                Lending type
              </div>
              <div className="inline-flex h-[64px] items-center gap-[100px] px-[32px] py-[16px] relative rounded-[8px] border border-solid border-[color:var(--variable-collection-border-grey)]">
                <div className="justify-between flex w-[200px] items-center relative mt-[-2.00px] mb-[-2.00px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                    Fixed
                  </div>
                  <img
                    className="relative w-[16px] h-[16px]"
                    alt="Arrow forward ios"
                    src="/img/arrow-forward-ios.png"
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] absolute top-[385px] left-[80px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                Location
              </div>
              <div className="h-[64px] items-center gap-[16px] px-[32px] py-[16px] rounded-[8px] border border-solid border-[color:var(--variable-collection-stroke)] inline-flex relative">
                <img
                  className="relative w-[36px] h-[36px] mt-[-2.00px] mb-[-2.00px]"
                  alt="Twemoji flag"
                  src="/img/twemoji-flag-australia.svg"
                />
                <div className="inline-flex items-center gap-[32px] relative flex-[0_0_auto] mt-[-8.50px] mb-[-8.50px]">
                  <img className="relative h-[49px] w-px object-cover" alt="Line" src="/img/line-135.svg" />
                  <div className="inline-flex items-center gap-[81px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                      Australia
                    </div>
                    <img
                      className="relative w-[16px] h-[16px]"
                      alt="Arrow forward ios"
                      src="/img/arrow-forward-ios.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[16px] absolute top-[223px] left-[80px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                Total Cost of Property
              </div>
              <div className="h-[64px] items-center gap-[100px] px-[32px] py-[16px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] border border-solid border-[color:var(--variable-collection-border-grey)] inline-flex relative">
                <div className="flex w-[200px] items-center justify-around gap-[100px] relative mt-[-2.00px] mb-[-2.00px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                    $100,000
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] absolute top-[218px] left-[749px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                Amount of Income
              </div>
              <div className="h-[64px] items-center gap-[100px] px-[32px] py-[16px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] border border-solid border-[color:var(--variable-collection-border-grey)] inline-flex relative">
                <div className="flex w-[200px] items-center justify-around gap-[100px] relative mt-[-2.00px] mb-[-2.00px]">
                  <div className="mt-[-1.00px] text-[length:var(--paragraph-1-font-size)] relative w-fit [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                    $5,000
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[264px] h-[122px] top-[220px] left-[421px]">
              <div className="inline-flex flex-col items-start gap-[16px] absolute top-0 left-0">
                <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                  Amount to Borrow
                </div>
                <div className="h-[64px] items-center gap-[100px] px-[32px] py-[16px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] border border-solid border-[color:var(--variable-collection-border-grey)] inline-flex relative">
                  <div className="flex w-[200px] items-center justify-around gap-[100px] relative mt-[-2.00px] mb-[-2.00px]">
                    <div className="mt-[-1.00px] text-[length:var(--paragraph-1-font-size)] relative w-fit [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                      $85,000.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[16px] absolute top-0 left-0">
                <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                  Amount to Borrow
                </div>
                <div className="h-[64px] items-center gap-[100px] px-[32px] py-[16px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] border border-solid border-[color:var(--variable-collection-border-grey)] inline-flex relative">
                  <div className="flex w-[200px] items-center justify-around gap-[100px] relative mt-[-2.00px] mb-[-2.00px]">
                    <div className="mt-[-1.00px] text-[length:var(--paragraph-1-font-size)] relative w-fit [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                      $85,000.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] absolute top-[56px] left-[410px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                Repayment type
              </div>
              <div className="inline-flex h-[64px] items-center gap-[100px] px-[32px] py-[16px] relative rounded-[8px] border border-solid border-[color:var(--variable-collection-border-grey)]">
                <div className="gap-[100px] flex w-[200px] items-center relative mt-[-2.00px] mb-[-2.00px]">
                  <div className="font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] leading-[var(--paragraph-1-line-height)] relative w-fit mt-[-1.00px] [font-family:var(--paragraph-1-font-family)] tracking-[var(--paragraph-1-letter-spacing)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                    Interest only
                  </div>
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Arrow forward ios" src="/img/arrow-forward-ios.png" />
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] absolute top-[56px] left-[854px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                Loan purpose
              </div>
              <div className="inline-flex h-[64px] items-center gap-[100px] px-[32px] py-[16px] relative rounded-[8px] border border-solid border-[color:var(--variable-collection-border-grey)]">
                <div className="gap-[100px] flex w-[200px] items-center relative mt-[-2.00px] mb-[-2.00px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-font-style)]">
                    Investment
                  </div>
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Arrow forward ios" src="/img/arrow-forward-ios.png" />
              </div>
            </div>
            <div className="absolute w-[769px] h-[64px] top-[440px] left-[471px] bg-[color:var(--variable-collection-primary)] rounded-[8px] overflow-hidden border border-solid border-white">
              <div className="absolute top-[20px] left-[319px] [font-family:'Roboto',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                Update Details
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1920px] h-[388px] top-[1162px] left-0">
          <img
            className="absolute w-[32px] h-[32px] top-[44px] left-[1470px]"
            alt="Filter list"
            src="/img/filter-list.png"
          />
          <div className="absolute w-[1920px] h-[388px] top-0 left-0 bg-neutral-50 border-2 border-solid border-[color:var(--variable-collection-stroke)]">
            <div className="absolute top-[67px] left-[299px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
              Comparing products
            </div>
            <div className="absolute top-[110px] left-[299px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-black text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
              3 items
            </div>
            <div className="inline-flex items-center gap-[24px] absolute top-[169px] left-[300px]">
              <div className="relative w-[32px] h-[32px] bg-[color:var(--variable-collection-primary)] rounded-[4px]" />
              <div className="flex flex-col w-[200px] items-start gap-[12px] relative">
                <div className="relative w-[481px] mt-[-1.00px] mr-[-281.00px] [font-family:var(--paragraph-1-font-family)] font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                  Show All
                </div>
              </div>
            </div>
            <img
              className="absolute h-[388px] top-0 left-[632px] w-px object-cover"
              alt="Line"
              src="/img/line-138.svg"
            />
            <img
              className="absolute h-[388px] top-0 left-[990px] w-px object-cover"
              alt="Line"
              src="/img/line-138.svg"
            />
            <img
              className="absolute h-[388px] top-0 left-[1320px] w-px object-cover"
              alt="Line"
              src="/img/line-138.svg"
            />
            <div className="h-[266px] left-[690px] absolute w-[270px] top-[59px]">
              <div className="relative h-[266px]">
                <div className="inline-flex flex-col items-center gap-[8px] px-[32px] py-[16px] absolute top-[8px] left-0 bg-white rounded-[8px] shadow-[var(--shadow)]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                    Qudos Bank
                  </div>
                  <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                    <img
                      className="relative w-[200px] h-[120px] object-cover"
                      alt="Download"
                      src="/img/download-1-2.png"
                    />
                  </div>
                  <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                    <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        More details
                      </div>
                      <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                        <img
                          className="relative w-[16px] h-[16px] mb-[-18612.50px] ml-[-12048.50px] rotate-[-90.00deg]"
                          alt="Bounding box"
                          src="/img/bounding-box-2.png"
                        />
                        <img
                          className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                          alt="Arrow forward ios"
                          src="/img/arrow-forward-ios-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start p-[5px] absolute top-0 left-[236px] bg-[#d23131] w-[30px] h-[30px] rounded-[8px]">
                  <img className="absolute w-[20px] h-[20px]" alt="Close" src="/img/close.png" />
                </div>
              </div>
            </div>
            <div className="h-[216px] left-[1020px] absolute w-[270px] top-[59px]">
              <div className="relative h-[216px]">
                <div className="inline-flex flex-col h-[208px] items-center justify-between px-[32px] py-[16px] absolute top-[8px] left-0 bg-white rounded-[8px] shadow-[var(--shadow)]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                    Unloan Bank
                  </div>
                  <img
                    className="relative w-[200px] h-[70.2px] object-cover"
                    alt="Tgmffhdzrexwqijuhn"
                    src="/img/tgmffh3dzrexwqi1juhn-1-1.png"
                  />
                  <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                    <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        More details
                      </div>
                      <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                        <img
                          className="relative w-[16px] h-[16px] mb-[-18942.50px] ml-[-11998.70px] rotate-[-90.00deg]"
                          alt="Bounding box"
                          src="/img/bounding-box-3.png"
                        />
                        <img
                          className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                          alt="Arrow forward ios"
                          src="/img/arrow-forward-ios-11.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] p-[5px] absolute top-0 left-[236px] bg-[#d23131] rounded-[8px]">
                  <img
                    className="relative w-[24px] h-[24px] mt-[-11830.00px] ml-[-18994.00px]"
                    alt="Bounding box"
                    src="/img/bounding-box-3.png"
                  />
                  <img className="absolute w-[20px] h-[20px] top-[7px] left-[7px]" alt="Close" src="/img/close.svg" />
                </div>
              </div>
            </div>
            <div className="h-[217px] left-[1350px] absolute w-[270px] top-[59px]">
              <div className="relative h-[217px]">
                <div className="inline-flex flex-col items-center gap-[8px] px-[32px] py-[16px] absolute top-[8px] left-0 bg-white rounded-[8px] shadow-[var(--shadow)]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-bold-font-family)] font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-font-style)]">
                    Bendigo Bank
                  </div>
                  <img
                    className="relative w-[200px] h-[70.8px] object-cover"
                    alt="Hroohitejfkoarfsgi"
                    src="/img/hroohite6j9fkoarfsgi-1-1.png"
                  />
                  <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                    <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        More details
                      </div>
                      <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                        <img
                          className="relative w-[16px] h-[16px] mb-[-19272.50px] ml-[-11999.30px] rotate-[-90.00deg]"
                          alt="Bounding box"
                          src="/img/bounding-box.png"
                        />
                        <img
                          className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                          alt="Arrow forward ios"
                          src="/img/arrow-forward-ios-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] p-[5px] absolute top-0 left-[236px] bg-[#d23131] rounded-[8px]">
                  <img
                    className="relative w-[24px] h-[24px] mt-[-11830.00px] ml-[-19324.00px]"
                    alt="Bounding box"
                    src="/img/bounding-box.png"
                  />
                  <img className="absolute w-[20px] h-[20px] top-[7px] left-[7px]" alt="Close" src="/img/close.svg" />
                </div>
              </div>
            </div>
            <div className="absolute w-[291px] h-[64px] top-[229px] left-[299px] bg-[color:var(--variable-collection-primary)] rounded-[8px] overflow-hidden border border-solid border-white">
              <div className="absolute top-[20px] left-[80px] [font-family:'Roboto',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                Compare All
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1920px] h-[500px] top-[4023px] left-0 bg-[#171616]">
          <div className="absolute w-[489px] h-[267px] top-[24px] left-[255px]">
            <img
              className="absolute w-[236px] h-[235px] top-0 left-0 object-cover"
              alt="Element"
              src="/img/20230910-012450.png"
            />
            <p className="absolute w-[445px] top-[207px] left-[44px] [font-family:var(--paragraph-2-font-family)] font-[number:var(--paragraph-2-font-weight)] text-white text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
              esque eget augue nec nisl sodales blandit sed et sem. Aenean quis finibus a
            </p>
          </div>
          <div className="absolute top-[63px] left-[1370px] [font-family:'Roboto',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[42px] whitespace-nowrap">
            Contact Us
          </div>
          <div className="inline-flex flex-col items-start gap-[40px] absolute top-[64px] left-[1166px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[42px] whitespace-nowrap">
              Pages
            </div>
            <div className="gap-[24px] inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-2-font-family)] font-[number:var(--paragraph-2-font-weight)] text-white text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                About Us
              </div>
              <div className="relative w-[82px] [font-family:var(--paragraph-2-font-family)] font-[number:var(--paragraph-2-font-weight)] text-white text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                FAQs
              </div>
              <div className="relative w-fit [font-family:var(--paragraph-2-font-family)] font-[number:var(--paragraph-2-font-weight)] text-white text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                Contact
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[41px] absolute top-[146px] left-[1368px]">
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <img className="relative w-[32px] h-[32px]" alt="Mdi location" src="/img/mdi-location.svg" />
              <div className="relative w-fit [font-family:var(--paragraph-2-font-family)] font-[number:var(--paragraph-2-font-weight)] text-white text-[length:var(--paragraph-2-font-size)] text-center tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                Enter Location
              </div>
            </div>
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
              <img className="relative w-[32px] h-[32px]" alt="Ic baseline email" src="/img/ic-baseline-email.svg" />
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-2-font-family)] font-[number:var(--paragraph-2-font-weight)] text-white text-[length:var(--paragraph-2-font-size)] text-center tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                Enter email address
              </div>
            </div>
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
              <img className="relative w-[32px] h-[32px]" alt="Ion call" src="/img/ion-call.svg" />
              <div className="relative w-fit mt-[-1.00px] [font-family:var(--paragraph-2-font-family)] font-[number:var(--paragraph-2-font-weight)] text-white text-[length:var(--paragraph-2-font-size)] text-center tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                Enter call contact
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-start gap-[59px] absolute top-[1633px] left-[300px]">
          <div className="inline-flex flex-col items-start gap-[32px] px-[44px] py-[32px] relative flex-[0_0_auto] bg-neutral-50 rounded-[8px] border border-solid border-[color:var(--variable-collection-stroke)]">
            <div className="inline-flex flex-col items-end gap-[24px] px-[32px] py-[24px] relative flex-[0_0_auto] bg-white rounded-[8px] shadow-[var(--shadow)]">
              <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-start justify-end gap-[172px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                        <img
                          className="relative w-[120px] h-[64px] object-cover"
                          alt="Download"
                          src="/img/download-1.png"
                        />
                      </div>
                      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                          Qudos Bank
                        </div>
                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Split loan
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Redraw
                            </div>
                          </div>
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Compare checkCircle="/img/check-circle.png" className="!flex-[0_0_auto]" property1="on" />
                  </div>
                  <div className="inline-flex items-center justify-end gap-[34px] relative flex-[0_0_auto]">
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] leading-[var(--dashboard-paragraph-bold-line-height)] relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Interest rate
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        5.67%
                      </div>
                    </div>
                    <div className="gap-[24px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] leading-[var(--dashboard-paragraph-bold-line-height)] [font-family:var(--dashboard-paragraph-bold-font-family)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                          Comparison rate
                        </div>
                        <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                          5.81%
                        </div>
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Monthly payment
                      </div>
                      <div className="opacity-[0.67] text-[length:var(--dashboard-paragraph-really-font-size)] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        $2,319
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Rate type
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        Variable
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                  <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      More details
                    </div>
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                      <img
                        className="relative w-[16px] h-[16px] mb-[-18902.00px] ml-[-12560.50px] rotate-[-90.00deg]"
                        alt="Bounding box"
                        src="/img/bounding-box-2.png"
                      />
                      <img
                        className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                        alt="Arrow forward ios"
                        src="/img/arrow-forward-ios-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[658px] h-[48px] bg-[color:var(--variable-collection-primary)] rounded-[8px] overflow-hidden border border-solid border-white">
                <div className="absolute top-[12px] left-[292px] [font-family:'Roboto',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Connect
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-end gap-[24px] p-[32px] relative flex-[0_0_auto] bg-white rounded-[8px] shadow-[var(--shadow)]">
              <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-start justify-end gap-[172px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                        <img
                          className="relative w-[120px] h-[64px] object-cover"
                          alt="Download"
                          src="/img/download-2.png"
                        />
                      </div>
                      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                          Heritage Bank
                        </div>
                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Split loan
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Redraw
                            </div>
                          </div>
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="mt-[-1.00px] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Compare addCircle="/img/add-circle-1.png" className="!flex-[0_0_auto]" property1="off" />
                  </div>
                  <div className="inline-flex items-center justify-end gap-[34px] relative flex-[0_0_auto]">
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Interest rate
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        5.67%
                      </div>
                    </div>
                    <div className="gap-[24px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                          Comparison rate
                        </div>
                        <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                          5.81%
                        </div>
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Monthly payment
                      </div>
                      <div className="opacity-[0.67] text-[length:var(--dashboard-paragraph-really-font-size)] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        $2,319
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Rate type
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        Variable
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                  <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      More details
                    </div>
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                      <img
                        className="relative w-[16px] h-[16px] mb-[-18902.00px] ml-[-13014.50px] rotate-[-90.00deg]"
                        alt="Bounding box"
                        src="/img/bounding-box-3.png"
                      />
                      <img
                        className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                        alt="Arrow forward ios"
                        src="/img/arrow-forward-ios-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[658px] h-[48px] bg-[color:var(--variable-collection-primary)] rounded-[8px] overflow-hidden border border-solid border-white">
                <div className="absolute top-[12px] left-[292px] [font-family:'Roboto',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Connect
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-end gap-[24px] px-[32px] py-[24px] relative flex-[0_0_auto] bg-white rounded-[8px] shadow-[var(--shadow)]">
              <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-[222px] items-end justify-between relative">
                  <div className="flex w-[818px] items-start justify-between relative flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[120px] h-[42.48px] object-cover"
                        alt="Hroohitejfkoarfsgi"
                        src="/img/hroohite6j9fkoarfsgi-1.png"
                      />
                      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                          Bendigo Bank
                        </div>
                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Split loan
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Redraw
                            </div>
                          </div>
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="mt-[-1.00px] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Compare addCircle="/img/add-circle-1.png" className="!flex-[0_0_auto]" property1="off" />
                  </div>
                  <div className="inline-flex items-center justify-end gap-[34px] relative flex-[0_0_auto]">
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Interest rate
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        5.67%
                      </div>
                    </div>
                    <div className="gap-[24px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                          Comparison rate
                        </div>
                        <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                          5.81%
                        </div>
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Monthly payment
                      </div>
                      <div className="opacity-[0.67] text-[length:var(--dashboard-paragraph-really-font-size)] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        $2,319
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Rate type
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        Variable
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                  <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      More details
                    </div>
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                      <img
                        className="relative w-[16px] h-[16px] mb-[-18902.00px] ml-[-13468.50px] rotate-[-90.00deg]"
                        alt="Bounding box"
                        src="/img/bounding-box-2.png"
                      />
                      <img
                        className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                        alt="Arrow forward ios"
                        src="/img/arrow-forward-ios-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[658px] h-[48px] bg-[color:var(--variable-collection-primary)] rounded-[8px] overflow-hidden border border-solid border-white">
                <div className="absolute top-[12px] left-[292px] [font-family:'Roboto',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Connect
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-end gap-[24px] px-[32px] py-[24px] relative flex-[0_0_auto] bg-white rounded-[8px] shadow-[var(--shadow)]">
              <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-start justify-end gap-[172px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                        <img
                          className="relative w-[120px] h-[42.12px] object-cover"
                          alt="Tgmffhdzrexwqijuhn"
                          src="/img/tgmffh3dzrexwqi1juhn-1.png"
                        />
                      </div>
                      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                          Qudos Bank
                        </div>
                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Split loan
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Redraw
                            </div>
                          </div>
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="mt-[-1.00px] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Compare addCircle="/img/add-circle-1.png" className="!flex-[0_0_auto]" property1="off" />
                  </div>
                  <div className="inline-flex items-center justify-end gap-[34px] relative flex-[0_0_auto]">
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Interest rate
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        5.67%
                      </div>
                    </div>
                    <div className="gap-[24px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                          Comparison rate
                        </div>
                        <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                          5.81%
                        </div>
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Monthly payment
                      </div>
                      <div className="opacity-[0.67] text-[length:var(--dashboard-paragraph-really-font-size)] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        $2,319
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Rate type
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        Variable
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                  <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      More details
                    </div>
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                      <img
                        className="relative w-[16px] h-[16px] mb-[-18902.00px] ml-[-13914.50px] rotate-[-90.00deg]"
                        alt="Bounding box"
                        src="/img/bounding-box.png"
                      />
                      <img
                        className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                        alt="Arrow forward ios"
                        src="/img/arrow-forward-ios-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[658px] h-[48px] bg-[color:var(--variable-collection-primary)] rounded-[8px] overflow-hidden border border-solid border-white">
                <div className="absolute top-[12px] left-[292px] [font-family:'Roboto',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Connect
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-end gap-[24px] px-[32px] py-[24px] relative flex-[0_0_auto] bg-white rounded-[8px] shadow-[var(--shadow)]">
              <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end gap-[24px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-start justify-end gap-[172px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
                        <img
                          className="relative w-[120px] h-[64px] object-cover"
                          alt="Download"
                          src="/img/download-1.png"
                        />
                      </div>
                      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                          Qudos Bank
                        </div>
                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Split loan
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Redraw
                            </div>
                          </div>
                          <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="mt-[-1.00px] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                            <div className="relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                              Extra repayment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Compare addCircle="/img/add-circle-1.png" className="!flex-[0_0_auto]" property1="off" />
                  </div>
                  <div className="inline-flex items-center justify-end gap-[34px] relative flex-[0_0_auto]">
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Interest rate
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        5.67%
                      </div>
                    </div>
                    <div className="gap-[24px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                          Comparison rate
                        </div>
                        <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                          5.81%
                        </div>
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Monthly payment
                      </div>
                      <div className="opacity-[0.67] text-[length:var(--dashboard-paragraph-really-font-size)] relative w-fit [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        $2,319
                      </div>
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:var(--dashboard-paragraph-bold-font-family)] font-[number:var(--dashboard-paragraph-bold-font-weight)] text-[color:var(--variable-collection-grey-text)] text-[length:var(--dashboard-paragraph-bold-font-size)] tracking-[var(--dashboard-paragraph-bold-letter-spacing)] leading-[var(--dashboard-paragraph-bold-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-bold-font-style)]">
                        Rate type
                      </div>
                      <div className="relative w-fit opacity-[0.67] [font-family:var(--dashboard-paragraph-really-font-family)] font-[number:var(--dashboard-paragraph-really-font-weight)] text-black text-[length:var(--dashboard-paragraph-really-font-size)] tracking-[var(--dashboard-paragraph-really-letter-spacing)] leading-[var(--dashboard-paragraph-really-line-height)] whitespace-nowrap [font-style:var(--dashboard-paragraph-really-font-style)]">
                        Variable
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[165px] h-[48px] bg-[color:var(--variable-collection-grey-button)] rounded-[8px] overflow-hidden">
                  <div className="inline-flex items-center gap-[8px] relative top-[13px] left-[14px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      More details
                    </div>
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rotate-[90.00deg]">
                      <img
                        className="relative w-[16px] h-[16px] mb-[-18902.00px] ml-[-14360.50px] rotate-[-90.00deg]"
                        alt="Bounding box"
                        src="/img/bounding-box.png"
                      />
                      <img
                        className="absolute w-[13px] h-[8px] top-[4px] left-px rotate-[-90.00deg]"
                        alt="Arrow forward ios"
                        src="/img/arrow-forward-ios-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[658px] h-[48px] bg-[color:var(--variable-collection-primary)] rounded-[8px] overflow-hidden border border-solid border-white">
                <div className="absolute top-[12px] left-[292px] [font-family:'Roboto',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Connect
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[56px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:var(--h-3-font-family)] font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] whitespace-nowrap [font-style:var(--h-3-font-style)]">
              Filter By
            </div>
            <div className="inline-flex flex-col items-start gap-[32px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[120px] px-0 py-[16px] relative flex-[0_0_auto] rounded-[8px] border-b [border-bottom-style:solid] border-[color:var(--variable-collection-border-grey)]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                  Loan purpose
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Arrow forward ios" src="/img/arrow-forward-ios.png" />
              </div>
              <div className="flex w-[283px] items-center justify-between px-0 py-[16px] relative flex-[0_0_auto] rounded-[8px] border-b [border-bottom-style:solid] border-[color:var(--variable-collection-border-grey)]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                  Borrow amount
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Arrow forward ios" src="/img/arrow-forward-ios.png" />
              </div>
              <div className="flex w-[283px] items-center justify-between px-0 py-[16px] relative flex-[0_0_auto] rounded-[8px] border-b [border-bottom-style:solid] border-[color:var(--variable-collection-border-grey)]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                  Loan type and term
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Arrow forward ios" src="/img/arrow-forward-ios.png" />
              </div>
              <div className="flex w-[283px] items-center justify-between px-0 py-[16px] relative flex-[0_0_auto] rounded-[8px] border-b [border-bottom-style:solid] border-[color:var(--variable-collection-border-grey)]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                  Repayment type
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Arrow forward ios" src="/img/arrow-forward-ios.png" />
              </div>
              <div className="flex w-[283px] items-center justify-between px-0 py-[16px] relative flex-[0_0_auto] rounded-[8px] border-b [border-bottom-style:solid] border-[color:var(--variable-collection-border-grey)]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                  Features
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Arrow forward ios" src="/img/arrow-forward-ios.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ContactPage;
