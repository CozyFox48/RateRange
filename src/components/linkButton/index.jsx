import Link from "next/link";

const Hero = ({ content, className, disabled = false, mode = "dark", onClick, nextLink }) => {
    return (
        < >
            {disabled ?
                <div
                    className={`flex items-center text-black justify-center rounded-md 
            ${mode == "white" ? "bg-white" : "bg-primary text-white"} py-3 px-9 text-base font-medium border-primary border border-1 bg-opacity-50
            ${className}`
                    }
                >
                    {content}
                </div> :
                <div
                    onClick={onClick}
                    className={`flex items-center text-black justify-center rounded-md
            ${mode == "white" ? "bg-white" : "bg-primary text-white"} text-base font-medium border-primary border border-1 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp 
            ${className}`
                    }
                >
                    <Link
                        className="w-full py-3 px-9 flex justify-center"
                        href={nextLink}
                    >
                        {content}
                    </Link>
                </div>
            }
        </>
    );
};

export default Hero;
