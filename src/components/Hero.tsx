import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [active, setActive] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(active === 3 ? 1 : active + 1);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [active]);

    return (
        <div className="hero min-h-[calc(95vh)] bg-accent ">
            <div className="pb-8 flex flex-col lg:flex-row-reverse w-full gap-24 justify-center items-center max-sm:gap-10 max-md:gap-18 ">
                <div className="flex flex-col">
                    <img
                        src={`home/hero${active}.png`}
                        className="max-w-[200px] md:max-w-sm lg:max-w-sm drop-shadow-2xl place-items-center"
                    />
                    <div className="mt-2 max-w-24 max-h-24 max-sm:max-h-16 max-sm:max-w-16 max-sm:left-2  max-md:max-h-20 max-md:max-w-20 max-md:-left-4  flex flex-row relative left-12">
                        <img
                            src="home/hero1.png"
                            alt="Pizza"
                            className={`drop-shadow-lg hover:rotate-12 ${
                                active === 1
                                    ? "border-2 rounded-full border-secondary "
                                    : ""
                            }`}
                            onClick={() => setActive(1)}
                        />
                        <img
                            src="home/hero2.png"
                            alt="Pizza"
                            className={`drop-shadow-lg hover:rotate-12 ${
                                active === 2
                                    ? "border-2 rounded-full border-secondary "
                                    : ""
                            }`}
                            onClick={() => setActive(2)}
                        />
                        <img
                            src="home/hero3.png"
                            alt="Pizza"
                            className={`drop-shadow-lg hover:rotate-12 ${
                                active === 3
                                    ? "border-2 rounded-full border-secondary "
                                    : ""
                            }`}
                            onClick={() => setActive(3)}
                        />
                    </div>
                </div>

                <div className="text-start lg:text-left px-10">
                    <h1 className="text-7xl font-medium text-secondary text-start max-sm:text-6xl ">
                        Feeling hungry?
                    </h1>
                    <p className="py-6 text-md max-w-sm text-black opacity-75 text-start">
                        Explore and understand the culture more by tasting the
                        amazing Pizza of our culture and world wide. Experience
                        the world, one delicious bite at a time.
                    </p>
                    <Link to={"/menu"} className="btn btn-secondary rounded-md ">
                        Explore Menu
                    </Link>
                    <Link
                        to={"https://forkifyrecipe-ali.netlify.app"}
                        className="btn btn-outline text-secondary ml-2 rounded-md"
                        target="_blank"
                    >
                        Search Recipies
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
