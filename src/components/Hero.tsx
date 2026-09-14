import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[78vh] sm:min-h-[82vh] lg:min-h-[86vh] xl:min-h-[88vh] flex items-center pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Full-Bleed Editorial Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-coastal-fullbleed.jpg"
          alt="Serene Santa Monica coastline and Pacific ocean shore in soft morning light"
          fill
          priority
          quality={90}
          className="object-cover object-[center_35%] sm:object-[center_30%]"
          sizes="100vw"
        />
        {/* Subtle, understated warm ivory scrim for crisp typography contrast while keeping the California coastline beautifully visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/88 via-[#FAF8F5]/65 to-[#FAF8F5]/20 sm:from-[#FAF8F5]/85 sm:via-[#FAF8F5]/52 sm:to-transparent pointer-events-none" />
        {/* Soft bottom transition into the page canvas */}
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Layered Directly Over the Editorial Background */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start text-left">
          {/* Eyebrow */}
          <p className="font-sans text-xs sm:text-[0.78rem] uppercase tracking-[0.2em] font-semibold text-[#284338]/85 mb-4 sm:mb-6">
            ONLINE &amp; IN-PERSON THERAPY IN SANTA MONICA &amp; ACROSS CA
          </p>

          {/* H1 Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.35rem] leading-[1.16] text-[#1F2421] font-normal tracking-tight mb-5 sm:mb-6">
            Anxiety{" "}
            <span className="font-script not-italic text-[1.12em] leading-none inline-block px-1 text-[#658A77]">
              &amp;
            </span>{" "}
            Trauma Therapy in{" "}
            <span className="italic font-normal text-[#284338]">Santa Monica, California</span>
          </h1>

          {/* Supporting Emotional Statement */}
          <p className="font-serif text-xl sm:text-2xl lg:text-[1.38rem] text-[#284338] italic font-normal leading-[1.35] mb-4 sm:mb-5 max-w-xl">
            Finding steadier ground when anxiety, stress, or past experiences feel overwhelming.
          </p>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-[1.02rem] leading-[1.72] text-[#334038] max-w-xl mb-8 sm:mb-10">
            Warm, collaborative therapy for adults navigating anxiety, trauma, and burnout.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <Link
              href="#appointment"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#284338] text-[#FAF8F5] text-[0.92rem] font-medium tracking-wide hover:bg-[#1E342B] transition-colors duration-200 group cursor-pointer shadow-sm"
            >
              <span>REQUEST AN APPOINTMENT</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#approach"
              className="inline-flex items-center justify-center px-6 py-4 text-[0.92rem] font-medium tracking-wide text-[#284338] hover:text-[#658A77] transition-colors group cursor-pointer"
            >
              <span>EXPLORE MY APPROACH</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

