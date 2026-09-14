"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who do you work with?",
    answer:
      "I offer psychotherapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the clients I support are high-achieving, thoughtful, and self-aware—including entrepreneurs, creatives, and professionals—who appear functional on the outside while internally feeling exhausted, stuck in overthinking, or emotionally on edge. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
  },
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. In-person therapy is offered from my Santa Monica office, located at 123th Street 45 W, Santa Monica, CA 90401. The office is a quiet, private, and calm space filled with gentle natural light and a comfortable, uncluttered environment designed to help clients feel at ease upon arrival.",
  },
  {
    question: "Do you offer telehealth?",
    answer:
      "Yes. I offer secure, confidential telehealth video sessions for adult clients located anywhere across California. Telehealth provides accessible continuity of care from the comfort of your home or private space.",
  },
  {
    question: "What therapeutic approaches do you use?",
    answer:
      "I take a warm, collaborative, and grounded approach to therapy. I integrate evidence-based methods—including Cognitive-Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and body-oriented/somatic techniques. This allows us to address both the emotional and physiological dimensions of anxiety, trauma, and burnout, combining practical tools for daily regulation with depth-oriented insight.",
  },
  {
    question: "What can I expect from therapy?",
    answer:
      "You can expect a dedicated space where you feel respected, understood, and actively involved in the process. Sessions are structured enough to feel supportive and safe, while leaving space for reflection and depth. Trauma work is paced carefully with an emphasis on safety and stabilization. My overarching goal is not just symptom relief, but helping you develop insight, resilience, and a stronger, more sustainable relationship with yourself over time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 sm:scroll-mt-28 py-20 md:py-28 lg:py-32 bg-[#FAF8F5] border-t border-[#284338]/10"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#8FA698] block mb-3">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F2421] font-normal leading-[1.24] tracking-tight">
            Frequently Asked{" "}
            <span className="font-script not-italic text-[0.82em] leading-none inline-block ml-1.5 text-[#658A77]">
              Questions
            </span>
          </h2>
          <p className="text-[#4A5550] text-base sm:text-lg mt-3.5 leading-[1.7]">
            Answers to common questions about beginning therapy, session formats,
            and my clinical approach.
          </p>
        </div>

        {/* Editorial Accordion */}
        <div className="border-b border-[#284338]/12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-t border-[#284338]/12"
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-hidden"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#1F2421] font-normal tracking-tight group-hover:text-[#284338] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span
                    className={`faq-chevron w-8 h-8 rounded-full border border-[#284338]/15 flex items-center justify-center shrink-0 text-[#284338] ${
                      isOpen ? "rotate-180 bg-[#8FA698]/15" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  data-open={isOpen}
                  className="faq-answer-panel"
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-4 sm:pr-12 text-[#4A5550] text-sm sm:text-base leading-[1.72]">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
