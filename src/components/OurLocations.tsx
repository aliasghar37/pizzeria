import Map from "./Map";

const locations = [
    {
        location: "Lahore",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        location: "Karachi",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        location: "Islamabad",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        location: "Quetta",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        location: "Peshawar",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];
const OurLocations = () => {
    return (
        <div className="flex flex-col pb-16 ">
            <h2 className="text-black text-5xl text-center max-sm:text-4xl pb-12">
                We are across{" "}
                <span className="text-secondary font-semibold">5 cities</span>
            </h2>
            <div className="flex flex-row px-16 max-md:flex-col ">
                {/* <div
                    id="map"
                    className="w-[50%] max-md:w-[90%] max-lg:w-[90%] h-96 max-md:h-[24rem] max-sm:w-[100%] max-sm:h-72  place-self-center bg-secondary rounded-lg "
                >
                </div> */}
                    <Map  />
                <div className="pl-20 max-md:pl-0 max-md:w-[90%] max-md:pt-6  max-lg:pl-8 text-black place-self-center  ">
                    {locations.map((item) => {
                        return (
                            <div className="flex flex-col pb-6">
                                <h3 className="font-normal text-3xl max-sm:text-xl ">
                                    {item.location}
                                </h3>
                                <p className="opacity-75 ">{item.address}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OurLocations;
