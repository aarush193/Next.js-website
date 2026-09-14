import Image from "next/image";

export default function WhoIHelp() {
  const categories = [
    {
      title: "Anxiety & Stress",
      tag: "Adults Feeling On Edge",
      image: "/images/editorial-anxiety-adult.jpg",
      imageAlt:
        "Adult woman in a quiet, contemplative moment near a sunlit window with a warm mug, reflecting and finding calm",
      description:
        "Support for adults experiencing constant worry, overthinking, tension in the body, and difficulty sleeping. Working together to help you feel more grounded and regulated in daily life.",
      bullets: [
        "Constant worry and overthinking",
        "Tension in the body and difficulty sleeping",
        "Feeling emotionally on edge",
        "Navigating high internal pressure",
      ],
    },
    {
      title: "Trauma & Healing",
      tag: "Carefully Paced Recovery",
      image: "/images/editorial-trauma-healing.jpg",
      imageAlt:
        "Adult woman outdoors in gentle coastal light and eucalyptus, resting a hand on stone in grounded felt safety",
      description:
        "Carefully paced therapy for single-incident trauma as well as complex or long-standing patterns from childhood, relationships, or chronic stress. Centered on safety, stabilization, and feeling more regulated in daily life.",
      bullets: [
        "Single-incident trauma",
        "Complex or long-standing patterns from childhood or relationships",
        "Rebuilding safety and confidence",
        "Paced support focused on stabilization",
      ],
    },
    {
      title: "Burnout & Perfectionism",
      tag: "Professionals & Creatives",
      image: "/images/editorial-burnout-pause.jpg",
      imageAlt:
        "Adult professional taking a restful pause on a sunlit garden bench away from work with a closed notebook",
      description:
        "Support for entrepreneurs, creatives, and professionals carrying high internal pressure and professional burnout. Finding space for slowing down, reconnecting with yourself, and developing sustainable ways of living and working.",
      bullets: [
        "Professional burnout and chronic stress",
        "Perfectionism and high internal pressure",
        "Slowing down and reconnecting with yourself",
        "Sustainable ways of living and working",
      ],
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 sm:scroll-mt-28 py-20 md:py-28 lg:py-32 bg-[#FAF8F5] relative">
      {/* Anchor for backward compatibility */}
      <div id="who-i-help" className="absolute -top-24 sm:-top-28 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#8FA698] block mb-3">
            Specialized Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F2421] font-normal leading-[1.24] tracking-tight">
            Therapy{" "}
            <span className="font-script not-italic text-[0.86em] leading-none inline-block ml-0.5 text-[#658A77]">
              Services
            </span>
          </h2>
          <p className="text-[#4A5550] text-base sm:text-lg mt-3.5 leading-[1.7] max-w-xl">
            Individual psychotherapy for thoughtful, self-aware adults navigating complex
            emotional terrain. Evidence-based, collaborative support across three primary focus areas:
          </p>
        </div>

        {/* 3-Column Image-Led Editorial Treatment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {categories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col group"
            >
              {/* Editorial Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#ECE6DD] border border-[#284338]/12 mb-6">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Tag & Title */}
              <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#658A77] block mb-2">
                {category.tag}
              </span>

              <h3 className="font-serif text-2xl sm:text-[1.65rem] text-[#1F2421] font-normal mb-3">
                {category.title}
              </h3>

              <p className="text-[#4A5550] text-[0.93rem] leading-[1.68] mb-6">
                {category.description}
              </p>

              {/* Bulleted Points with Hairline Divider */}
              <div className="mt-auto pt-5 border-t border-[#284338]/12">
                <ul className="space-y-2.5">
                  {category.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-[0.84rem] text-[#6E7B74] flex items-baseline gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FA698] shrink-0 translate-y-[-1px]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
