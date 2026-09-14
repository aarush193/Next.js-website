export default function Expertise() {
  const specialties = [
    {
      title: "Anxiety & Panic",
      desc: "Support for racing thoughts, bodily alarm sensations, tension in the body, and feeling emotionally on edge.",
    },
    {
      title: "Trauma & Relational Patterns",
      desc: "Carefully paced recovery for single-incident trauma and complex relational patterns rooted in earlier life experiences.",
    },
    {
      title: "Burnout & Chronic Stress",
      desc: "Space for professionals and entrepreneurs feeling depleted by relentless internal pressure and exhaustion.",
    },
    {
      title: "Perfectionism & High Internal Pressure",
      desc: "Addressing harsh self-criticism, overthinking, and difficulty slowing down or resting.",
    },
    {
      title: "Nervous System Regulation & Grounding",
      desc: "Practical mindfulness and body-oriented techniques to restore physiological ease and safety.",
    },
    {
      title: "Impact of Earlier Life Experiences",
      desc: "Understanding how past relationships and experiences continue to shape confidence, safety, and present patterns.",
    },
    {
      title: "Sleep Difficulties & Physical Tension",
      desc: "Addressing the somatic toll of prolonged stress, insomnia, and continuous bodily bracing.",
    },
    {
      title: "Insight & A Stronger Relationship with Oneself",
      desc: "Cultivating self-trust, grounded boundaries, and sustainable ways of living and working.",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#FAF8F5] border-b border-[#284338]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#8FA698] block mb-3">
              Areas of Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] text-[#1F2421] font-normal leading-[1.28] mb-4">
              Areas of clinical focus &amp;{" "}
              <span className="font-script not-italic text-[1.04em] leading-none inline-block ml-2.5 text-[#658A77]">
                expertise
              </span>
            </h2>
            <p className="text-[#4A5550] text-base sm:text-[1.02rem] leading-[1.7] mb-6">
              My clinical work focuses on the emotional and somatic challenges
              that self-aware adults encounter when chronic stress, burnout,
              and earlier life experiences compound.
            </p>
            <div className="pt-5 border-t border-[#284338]/12 text-xs text-[#6E7B74] leading-relaxed">
              <span className="font-semibold text-[#284338] block mb-1">
                Practical Tools &amp; Relational Depth
              </span>
              Therapy is individualized to honor your pacing, balancing
              immediate regulation strategies with deep personal insight.
            </div>
          </div>

          {/* Right Column: Editorial List / Grid with Hairline Dividers */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {specialties.map((item, index) => (
                <div
                  key={item.title}
                  className="pt-6 border-t border-[#284338]/12 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-mono text-[#658A77] tracking-widest">
                        0{index + 1}
                      </span>
                      <h3 className="font-serif text-xl sm:text-[1.3rem] font-normal text-[#1F2421]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#4A5550] text-[0.9rem] leading-[1.65] pl-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
