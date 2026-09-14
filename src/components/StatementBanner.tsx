import Image from "next/image";

export default function StatementBanner() {
  return (
    <section className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] flex items-end pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Full-bleed background photograph covering the entire section */}
      <Image
        src="/images/editorial-full-cover.jpg"
        alt="Atmospheric California coastal shoreline at dusk with gentle ocean tide"
        fill
        quality={80}
        priority={false}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Atmospheric dark tint / gradient overlay for high editorial readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#141C18]/65 via-[#141C18]/55 to-[#141C18]/75 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 text-[#FAF8F5]">
        <div className="max-w-3xl lg:max-w-4xl text-left">
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.28] font-normal tracking-tight">
            You deserve a space where you feel{" "}
            <span className="italic text-[#E0DDD5]">heard, respected</span>, and{" "}
            <span className="italic text-[#E0DDD5]">understood</span>.{" "}
            <span className="italic font-normal block sm:inline mt-2 sm:mt-0 text-[#C7D3CB]">
              A dedicated place to slow down and reconnect.
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
