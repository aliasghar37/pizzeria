const WhyChooseUs = () => {
    const cardItems = [
        {
            title: "Fastest delivery",
            description:
                "Your ordered food is delivered within 10 minutes, keeping it hot and fresh.",
            image: "fastest-delivery.png",
            id: 1,
        },
        {
            title: "Best prices",
            description:
                "Our Prices are very convinient as compared to market, while maintaining the taste standards.",
            image: "best-prices.png",
            id: 2,
        },
        {
            title: "Freshness",
            description:
                "Every meal is crafted fresh, ensuring you taste the warm and fresh flavor in every bite.",
            image: "20+ restaurant.png",
            id: 3,
        },
    ];

    return (
        <div className="w-full py-12">
            <h2 className="text-black text-5xl text-center max-sm:text-4xl pb-12">
                Why{" "}
                <span className="text-secondary font-semibold">choose us?</span>
            </h2>
            {/* service container */}
            <div className="bg-primary grid grid-cols-3 gap-8 px-16 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 ">
                {/* service */}
                {cardItems.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className=" w-full bg-primary rounded-lg p-6 border-2 border-borderColor shadow-2xl shadow-borderShadow"
                        >
                            <div className="flex gap-4 items-center">
                                <img
                                    src={`images/${item.image}`}
                                    alt="Fast delivery icon"
                                    className="w-12 h-12 rounded-sm"
                                />
                                <h3 className="text-black">{item.title}</h3>
                            </div>
                            <p className="text-black mt-4 leading-8 opacity-75">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyChooseUs;
