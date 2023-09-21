"use client"
import Image from "next/image";

const Head_Picture=()=>{
    return (
        <div className="xl:h-[400px] lg:h-[300px] md:h-[200px] sm:h-[200px] h-[200px] !z-[0] overflow-hidden">
            <div className="h-full relative">
              <Image
                src="/images/compare/compare-head.jpg"
                alt="hero image"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
    )
}

export default Head_Picture;