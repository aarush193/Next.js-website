import Image from "next/image";

export default function BannerPause() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#FAF8F5] border-y border-[#284338]/8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Expansive Landscape Photograph (Left ~58% width on desktop matching Screenshot 2) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] rounded-2xl overflow-hidden bg-[#ECE6DD] border border-[#284338]/12">
              <Image
                src="/images/editorial-pause.jpg"
                alt="California coastal cliffs and soft eucalyptus hills overlooking the sea in warm golden light"
                fill
                quality={80}
                className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          {/* Generous Whitespace & Editorial Typographic Statement (Right ~42% width) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4">
            <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#658A77] block mb-4">
              Reflection &amp; Growth
            </span>

            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] text-[#1F2421] font-normal leading-[1.34] mb-6">
              Honoring where you&rsquo;ve been &amp; cultivating space for where
              you&rsquo;re{" "}
              <span className="font-script not-italic text-[0.98em] leading-none inline-block ml-1 text-[#658A77]">
                headed
              </span>
              .
            </blockquote>

            <p className="text-[#4A5550] text-base sm:text-[1.02rem] leading-[1.72] mb-6">
              Therapy works best when you feel respected, understood, and
              actively involved in your care. We balance practical tools for
              daily stabilization with depth-oriented reflection.
            </p>

            <p className="text-sm text-[#6E7B74] leading-relaxed pt-5 border-t border-[#284338]/12">
              Helping thoughtful, high-achieving adults develop insight,
              resilience, and a stronger relationship with themselves over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
