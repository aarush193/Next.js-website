import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Video } from "lucide-react";

export default function AboutMaya() {
  return (
    <section
      id="about"
      className="scroll-mt-24 sm:scroll-mt-28 py-20 md:py-28 lg:py-32 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#8FA698] block mb-2">
            About The Psychologist
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] text-[#1F2421] font-normal leading-[1.16]">
            Dr. Maya Reynolds, PsyD
          </h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2">
            <span className="font-serif italic text-lg sm:text-xl text-[#284338]">
              Licensed Clinical Psychologist
            </span>
            <span className="hidden sm:inline-block w-px h-3.5 bg-[#284338]/25" aria-hidden="true" />
            <span className="font-sans text-xs sm:text-[0.78rem] uppercase tracking-[0.18em] font-medium text-[#658A77]">
              Santa Monica, California
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid (Biography + Still Life / Pull Quote) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Biography Column (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-[#4A5550] text-base sm:text-[1.02rem] leading-[1.74]">
            <p>
              I’m a licensed clinical psychologist based in Santa Monica,
              California. I work with adults who feel overwhelmed by anxiety,
              stress, or the lasting effects of difficult experiences.
            </p>
            <p>
              Many of the people I work with are thoughtful, self-aware, and
              accustomed to holding a great deal together. On the outside, life
              may look manageable. Internally, there may be constant worry,
              overthinking, tension, difficulty sleeping, or a persistent
              feeling of being on edge.
            </p>
            <p>
              My approach is warm, collaborative, and grounded. I offer enough
              structure to make therapy feel supportive while leaving room for
              reflection and deeper understanding.
            </p>
            <p>
              I draw from evidence-based approaches including Cognitive
              Behavioral Therapy, EMDR, mindfulness-based practices, and
              body-oriented techniques. Together, we can work toward greater
              understanding, practical tools for daily life, and a stronger sense
              of steadiness.
            </p>
            <p className="font-medium text-[#284338]">
              Therapy can be a place to slow down, reconnect with yourself, and
              find more sustainable ways of living and working.
            </p>
          </div>

          {/* Portrait Column (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:-mt-24 xl:-mt-28">
            <div className="w-full relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE6DD] border border-[#284338]/12 group shadow-xs">
              <Image
                src="/images/dr-maya-reynolds.jpg"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, California"
                fill
                quality={85}
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Practice Environment & Session Formats Strip */}
        <div className="pt-10 border-t border-[#284338]/12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#F3EFEA]/60 border border-[#284338]/10">
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] text-[#284338] shrink-0 border border-[#284338]/10">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-medium text-[#1F2421] block mb-1">
                In-Person Santa Monica Office
              </span>
              <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
                A quiet, private space designed to feel calm and grounding, with
                natural light and a comfortable, uncluttered environment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#F3EFEA]/60 border border-[#284338]/10">
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] text-[#284338] shrink-0 border border-[#284338]/10">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-medium text-[#1F2421] block mb-1">
                Secure Telehealth in California
              </span>
              <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
                Convenient, confidential virtual sessions for clients located
                anywhere across the state of California.
              </p>
            </div>
          </div>
        </div>

        {/* Action Anchor */}
        <div className="mt-12 text-center">
          <Link
            href="#appointment"
            className="inline-flex items-center text-sm font-medium text-[#284338] hover:text-[#658A77] transition-colors group"
          >
            <span>Request an Appointment</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
