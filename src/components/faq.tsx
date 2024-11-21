import { useState } from "react";
import { Plus } from "lucide-react";
import { Send, Twitter, Menu, MessageCircleMore } from "lucide-react";

// Define the FAQ type
interface FAQ {
    question: string;
    answer: string;
}

const Faq = () => {
    // Define the FAQs
    const faqs: FAQ[] = [
        {
            question: "What is Mr Miggles",
            answer: "Mr Miggles is a community-driven initiative..."
        },
        {
            question: "How can I acquire $MIGGLES",
            answer: "You can acquire $MIGGLES through various methods..."
        },
        {
            question: "What can I do with $MIGGLES",
            answer: "MIGGLES tokens can be used for..."
        },
        {
            question: "Is $MIGGLES secure?",
            answer: "Security is a top priority for the MIGGLES project..."
        },
        {
            question: "How does $MIGGLES support charitable causes?",
            answer: "MIGGLES supports charitable initiatives through..."
        },
        {
            question: "What is the connection between $MIGGLES and Mr. Miggles NFTs?",
            answer: "The connection between $MIGGLES and the NFTs..."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <div className="flex flex-col items-center justify-center min-h-screen  bg-white p-4">
            <div className="w-full  px-3 flex flex-col gap-4 md:max-w-[810px]">

                {/* FAQ Title */}
                <h1 className="text-center text-5xl  font-bold text-Hero mb-32">FAQs</h1>

                {/* FAQ Items */}
                <div className="space-y-4 flex flex-col gap-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="w-full bg-Hero   px-4  rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex text-xl justify-between items-center px-6 py-4 text-left  font-medium text-white"
                            >
                                <span>{faq.question}</span>
                                <Plus
                                    className={`w-6 h-6 transition-transform duration-200 ${activeIndex === index ? 'rotate-45' : ''
                                        }`}
                                />
                            </button>
                            {activeIndex === index && (
                                <div className="px-6 py-4 text-lg bg-Hero text-primary">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Faq;