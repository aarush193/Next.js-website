import { MapPin } from "lucide-react";
import AppointmentForm from "./AppointmentForm";

export default function AppointmentCTA() {
  return (
    <section
      id="appointment"
      className="scroll-mt-24 sm:scroll-mt-28 py-20 md:py-28 lg:py-32 bg-[#FAF8F5] relative"
    >
      {/* Anchor for Contact links */}
      <div id="contact" className="absolute -top-24 sm:-top-28 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Begin Your Journey, Headline, Description, Location */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            <span className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-widest uppercase text-[#658A77] block mb-3">
              Begin Your Journey
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] text-[#1F2421] font-normal leading-[1.2] mb-5">
              Find a therapeutic space that is the{" "}
              <span className="font-script not-italic text-[0.84em] leading-none inline-block ml-1.5 mr-1 text-[#658A77]">
                right fit
              </span>{" "}
              for you
            </h2>

            <p className="text-base sm:text-[1.02rem] text-[#4A5550] leading-[1.72] mb-8">
              Deciding to begin therapy is an important step. Whether you prefer to
              meet in person at the Santa Monica office or connect via secure
              telehealth from anywhere in California, we will work collaboratively to
              establish a pace and structure that supports your well-being.
            </p>

            {/* Location & Practice Note */}
            <div className="pt-6 border-t border-[#284338]/10 text-xs sm:text-sm text-[#6E7B74]">
              <span className="inline-flex items-center gap-2 font-medium text-[#1F2421] mb-1">
                <MapPin className="w-4 h-4 text-[#284338]" />
                Santa Monica Office
              </span>
              <p className="pl-6 text-[#6E7B74]">123th Street 45 W, Santa Monica, CA 90401</p>
            </div>
          </div>

          {/* Right Column: Request an Appointment Form Box */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
