"use client"

type ChildComponentProps = {
    products: any[],
    select4detail: Number[],
    setSelect4detail: React.Dispatch<React.SetStateAction<Number[]>>,
    setOpenDetailedCompare: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenSelected: React.Dispatch<React.SetStateAction<boolean>>,
};

const   Selected_Product = ({ products, select4detail, setSelect4detail,setOpenDetailedCompare,setOpenSelected }: ChildComponentProps) => {
    return (
        <div className="fixed  !z-[9999] w-full bottom-0">
            <div className="h-full w-full mx-auto bg-secondary  align-center">
                <div className="flex gap-[2%] mx-auto justify-center flex-wrap mx-auto align-center ">

                    {
                        [0, 1, 2, 3, 4].map(each => {
                            if (Number(select4detail[each]) >= 0) {

                                const index = Number(select4detail[each]);
                                return <div className="w-[120px] rounded-md  h-[60px] bg-secondary bg-white flex flex-col justify-center items-center align-center my-[10px]">
                                    <img
                                        src={products[index].banklogoUri}
                                        alt="hero image"
                                        className="w-[90%] "
                                    />
                                </div>
                            } else {
                                return <div className="w-[120px] rounded-md  h-[60px] bg-secondary border-[1px] text-primary bg-white flex flex-col justify-center items-center my-[10px]">
                                    Add {5 - select4detail.length} more
                                </div>
                            }
                        })
                    }

                    <button
                        onClick={() => {
                            setOpenDetailedCompare(true);
                            setOpenSelected(false);
                        }}
                        className={`rounded-md  bg-primary text-white w-[100px] h-[50px] my-auto text-base font-medium  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp`}
                    >
                        Compare
                    </button>
                    <button
                        onClick={() => {
                            setSelect4detail([]);
                            setOpenSelected(false);
                        }}
                        className={`rounded-md  bg-white w-[100px] h-[50px] my-auto text-base font-medium  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp`}>
                        Clear
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Selected_Product;