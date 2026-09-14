import Image from "next/image";
import { Sun, Shield, Armchair, MapPin, Video } from "lucide-react";

export default function OurOffice() {
  const atmosphereFeatures = [
    {
      icon: Sun,
      title: "Natural Light",
      description:
        "Large windows fill the room with gentle natural light, creating an open, welcoming, and calming atmosphere.",
    },
    {
      icon: Shield,
      title: "Quiet & Private",
      description:
        "A quiet, private setting designed to safeguard confidentiality and provide a calm space to reflect.",
    },
    {
      icon: Armchair,
      title: "Comfortable & Uncluttered",
      description:
        "A grounded, comfortable, and uncluttered room where clients can feel at ease upon arrival.",
    },
  ];

  return (
    <section
      id="our-office"
      className="scroll-mt-24 sm:scroll-mt-28 py-20 md:py-28 lg:py-32 bg-[#F3EFEA] border-t border-[#284338]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#8FA698] block mb-3">
            Physical &amp; Virtual Space
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F2421] font-normal leading-[1.26] mb-5">
            Our Office: A calm space for{" "}
            <span className="font-script not-italic text-[0.92em] leading-none inline-block ml-1 text-[#658A77]">
              healing
            </span>
          </h2>
          <p className="text-[#4A5550] text-base sm:text-lg leading-[1.7]">
            Located in Santa Monica, California, the office is a quiet, private,
            calm, and grounding environment filled with natural light. It is
            comfortable and uncluttered, offering a space where clients can feel
            at ease.
          </p>
        </div>

        {/* Balanced Editorial Office Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {/* Primary Office Photo */}
          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#ECE6DD] border border-[#284338]/12 group">
              <Image
                src="/images/office-2.jpg"
                alt="Dr. Maya Reynolds Santa Monica therapy suite with natural light and comfortable seating"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="px-1 pt-1">
              <span className="text-[0.72rem] uppercase tracking-widest text-[#8FA698] font-semibold block mb-0.5">
                Suite Atmosphere
              </span>
              <h3 className="font-serif text-xl text-[#1F2421] font-normal">
                Santa Monica Consultation Suite
              </h3>
              <p className="text-xs text-[#6E7B74] mt-0.5">
                Quiet, private, and filled with gentle natural light
              </p>
            </div>
          </div>

          {/* Secondary Office Photo */}
          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#ECE6DD] border border-[#284338]/12 group">
              <Image
                src="/images/office-1.jpg"
                alt="Comfortable, uncluttered therapy room interior designed for ease and privacy"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="px-1 pt-1">
              <span className="text-[0.72rem] uppercase tracking-widest text-[#8FA698] font-semibold block mb-0.5">
                Interior Setting
              </span>
              <h3 className="font-serif text-xl text-[#1F2421] font-normal">
                Comfortable &amp; Uncluttered
              </h3>
              <p className="text-xs text-[#6E7B74] mt-0.5">
                A calming environment where clients can feel at ease upon arrival
              </p>
            </div>
          </div>
        </div>

        {/* Atmospheric Qualities & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 border-t border-[#284338]/12">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2421] font-medium">
              A quiet, grounding environment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {atmosphereFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <Icon className="w-5 h-5 text-[#8FA698] mb-2" />
                    <h4 className="font-semibold text-[#1F2421] text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#4A5550] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-xl p-6 sm:p-7 border border-[#284338]/10 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#284338] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#6E7B74] block">
                  In-Person Sessions
                </span>
                <span className="text-sm font-medium text-[#1F2421] block">
                  123th Street 45 W, Santa Monica, CA 90401
                </span>
                <span className="text-xs text-[#4A5550] mt-0.5 block">
                  In-person psychotherapy offered from our quiet Santa Monica suite.
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#284338]/10 flex items-start gap-3">
              <Video className="w-5 h-5 text-[#284338] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#6E7B74] block">
                  California Telehealth
                </span>
                <span className="text-sm font-medium text-[#1F2421] block">
                  Secure Video Psychotherapy
                </span>
                <span className="text-xs text-[#4A5550] mt-0.5 block">
                  Available for adults located anywhere in California.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
