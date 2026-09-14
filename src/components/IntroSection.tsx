import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F3EFEA] border-y border-[#284338]/8 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 sm:mb-18">
          {/* Eyebrow and Statement Heading */}
          <div className="lg:col-span-5">
            <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#8FA698] block mb-3">
              Practice Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.26] text-[#1F2421] font-normal max-w-lg">
              What you are carrying is real, valid, and worthy of attentive{" "}
              <span className="font-script not-italic text-[1.04em] leading-none inline-block ml-1 text-[#658A77]">
                support
              </span>
              .
            </h2>
          </div>

          {/* Editorial Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-[#4A5550] text-base sm:text-[1.02rem] leading-[1.72] pt-1">
            <p>
              When you are navigating chronic stress, high internal pressure, or
              the lingering weight of past experiences, it is easy to become
              disconnected from yourself. Many clients arrive feeling
              internally exhausted, caught in spirals of overthinking, or as
              though they are perpetually bracing for something to go wrong.
            </p>
            <p>
              Therapy offers a dedicated space to slow down, catch your breath,
              and unpack what is happening beneath the surface. My practice is
              grounded in the belief that healing happens when you feel
              deeply respected, understood, and actively involved in the
              therapeutic process.
            </p>
            <p className="font-medium text-[#284338]">
              We integrate practical tools to help you feel more regulated in
              daily life with thoughtful, depth-oriented exploration that creates
              sustainable internal change.
            </p>
          </div>
        </div>

        {/* Expansive California Coastal Landscape Pause */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden bg-[#ECE6DD] border border-[#284338]/10 group">
          <Image
            src="/images/editorial-coastal.jpg"
            alt="Quiet California Pacific coastline with soft morning fog lifting over coastal cliffs"
            fill
            quality={85}
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}
