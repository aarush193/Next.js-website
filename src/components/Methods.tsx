export default function Methods() {
  const methods = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      acronym: "CBT",
      description:
        "A structured, practical approach to recognizing and shifting automatic thought patterns, catastrophic assumptions, and cycles of worry that sustain anxiety and internal pressure.",
    },
    {
      title: "Eye Movement Desensitization & Reprocessing",
      acronym: "EMDR",
      description:
        "A specialized, research-backed modality designed to reprocess distressing memories and traumatic experiences so they no longer evoke acute emotional or physiological distress.",
    },
    {
      title: "Mindfulness-Based Practices",
      acronym: "Mindfulness",
      description:
        "Techniques to cultivate present-moment grounding, somatic awareness, and emotional regulation, helping quiet racing thoughts and restore internal calm.",
    },
    {
      title: "Body-Oriented & Somatic Techniques",
      acronym: "Somatic",
      description:
        "Approaches that address how the nervous system holds stress, hypervigilance, and tension in the physical body, helping restore physiological safety and ease.",
    },
  ];

  return (
    <section id="methods" className="scroll-mt-24 sm:scroll-mt-28 py-20 md:py-28 lg:py-32 bg-[#FAF8F5] border-b border-[#284338]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#8FA698] block mb-3">
            Evidence-Based Modalities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F2421] font-normal leading-[1.26]">
            Therapeutic methods &amp;{" "}
            <span className="font-script not-italic text-[1.04em] leading-none inline-block ml-2.5 text-[#658A77]">
              modalities
            </span>
          </h2>
          <p className="text-[#4A5550] text-base sm:text-lg mt-3 leading-[1.7] max-w-xl">
            I combine structured, evidence-based methods with relational depth,
            tailoring our work to your unique clinical goals and personal pacing.
          </p>
        </div>

        {/* 4 Methods Editorial Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {methods.map((method) => (
            <div
              key={method.title}
              className="pt-6 border-t border-[#284338]/12 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[0.72rem] font-semibold uppercase tracking-widest text-[#658A77] mb-2">
                  {method.acronym}
                </span>
                <h3 className="font-serif text-2xl text-[#1F2421] font-normal mb-2.5">
                  {method.title}
                </h3>
                <p className="text-[#4A5550] text-[0.93rem] leading-[1.68]">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
