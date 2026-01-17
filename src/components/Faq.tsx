import { useState } from "react";

const questions = [
    {
        question: "What is the delivery time?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, sint quos consequuntur.",
        active: null,
    },
    {
        question: "How can I cancel my order?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, sint quos consequuntur.",
        active: null,
    },
    {
        question: "How can I change delivery address?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, sint quos consequuntur.",
        active: null,
    },
];
const Faq = () => {
    const [active, setActive] = useState<null | number>(null);

    return (
        <div className="text-black pb-16">
            <h2 className=" text-5xl text-center max-sm:text-4xl pb-12">
                Frequently Asked Questions
            </h2>
            {questions.map((qn, i) => {
                return (
                    <div
                        key={i}
                        className="m-auto w-[70%] mb-8 rounded-lg relative shadow-xl"
                    >
                        <div className="flex gap-4 justify-between items-center py-2 px-6 rounded-lg border-2 border-borderColor ">
                            <h3 className=" text-xl ">{qn.question}</h3>
                            <h2
                                onClick={() =>
                                    setActive((prev) => (prev === i ? null : i))
                                }
                                className={`text-4xl pb-2 duration-500 cursor-pointer  ${
                                    active === i ? "rotate-45" : ""
                                } `}
                            >
                                +
                            </h2>
                        </div>
                        {active === i ? (
                            <div>
                                <p className=" px-6 py-4 border-2 border-borderColor rounded-lg transition-all duration-1000 delay-1000 ease-in-out">
                                    {qn.answer}
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Faq;
