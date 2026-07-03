import { useState } from "react";
import Section2 from "./Section2";

function Section3() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries and more.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or app.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can cancel anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals and more.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly content.",
    },
  ];

  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
      <h2 className="text-4xl font-bold mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full bg-zinc-800 hover:bg-zinc-700 p-6 text-left flex justify-between items-center text-2xl"
            >
              <span>{faq.question}</span>

              <span className="text-4xl">
                {openIndex === index ? "×" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="bg-zinc-800 mt-[1px] p-6 text-xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;