import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 sm:scroll-mt-28 bg-[#F3EFEA] relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[600px] lg:min-h-[680px]">
        {/* Editorial Text Content (Left 7 Columns on desktop, with generous padding) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-28 lg:pr-12 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            {/* Small uppercase eyebrow matching screenshot */}
            <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#658A77] block mb-4">
              How I Work
            </span>

            {/* Large Cormorant Garamond headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.15rem] text-[#1F2421] font-normal leading-[1.24] mb-8">
              Therapy that is{" "}
              <span className="font-script not-italic text-[1.14em] leading-none inline-block mx-1.5 text-[#658A77]">
                warm
              </span>
              , collaborative, and grounded.
            </h2>

            {/* Editorial Two-Column Text Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-[#4A5550] text-sm sm:text-[0.95rem] leading-[1.72] mb-10">
              <div className="space-y-4">
                <p className="font-medium text-[#284338] text-[0.98rem]">
                  Therapy works best when you feel respected, understood, and
                  actively involved in the process.
                </p>
                <p>
                  Sessions are structured enough to feel supportive, while still
                  leaving space for reflection and depth. We work together as
                  partners to understand both the emotional and physiological
                  sides of what you are experiencing.
                </p>
                <p>
                  I integrate evidence-based methods—such as Cognitive-Behavioral
                  Therapy (CBT), EMDR, mindfulness-based practices, and
                  body-oriented techniques—to combine practical tools with
                  depth-oriented insight.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Trauma work is an important part of my practice. Whether
                  addressing single-incident trauma or complex, long-standing
                  patterns from childhood, relationships, or chronic stress, my
                  approach is paced carefully.
                </p>
                <p>
                  We prioritize safety, stabilization, and helping you feel more
                  regulated in your daily life—not just during sessions.
                </p>
                <p>
                  For adults dealing with burnout, perfectionism, and high
                  internal pressure, therapy becomes a dedicated space to slow
                  down, reconnect, and establish sustainable ways of living and
                  working.
                </p>
              </div>
            </div>

            {/* Bottom Inquire Link */}
            <div className="pt-6 border-t border-[#284338]/12">
              <Link
                href="#appointment"
                className="inline-flex items-center text-sm font-medium text-[#284338] hover:text-[#658A77] transition-colors group"
              >
                <span>Learn More About Working Together</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Bleed Vertical Photograph (Right 5 Columns on desktop, stretching to right edge) */}
        <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[500px] lg:min-h-full w-full">
          <Image
            src="/images/editorial-approach.jpg"
            alt="An adult walking along an open coastal California trail surrounded by dune grass"
            fill
            quality={80}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
