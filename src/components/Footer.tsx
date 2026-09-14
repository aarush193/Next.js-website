import Link from "next/link";
import { MapPin, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E342B] text-[#FAF8F5] pt-18 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#FAF8F5]/10">
          {/* Practice Summary */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight block text-[#FAF8F5]">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="text-xs uppercase tracking-widest text-[#8FA698] block -mt-2">
              Licensed Clinical Psychologist
            </span>
            <p className="text-sm text-[#FAF8F5]/75 leading-relaxed max-w-md pt-2">
              Providing grounded, evidence-based psychotherapy for adults navigating
              anxiety, stress, trauma, burnout, and perfectionism. In-person care in
              Santa Monica and secure telehealth throughout California.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8FA698]">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <li>
                <Link href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  About Dr. Maya
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  Therapy Services
                </Link>
              </li>
              <li>
                <Link href="#approach" className="hover:text-[#FAF8F5] transition-colors">
                  Therapeutic Approach
                </Link>
              </li>
              <li>
                <Link href="#methods" className="hover:text-[#FAF8F5] transition-colors">
                  Methods &amp; Modalities
                </Link>
              </li>
              <li>
                <Link href="#our-office" className="hover:text-[#FAF8F5] transition-colors">
                  Our Office
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#FAF8F5] transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Location & Formats */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8FA698]">
              Practice Location &amp; Sessions
            </h4>
            <div className="space-y-3 text-sm text-[#FAF8F5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8FA698] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#FAF8F5] block">Santa Monica Office</span>
                  <span>123th Street 45 W, Santa Monica, CA 90401</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Video className="w-4 h-4 text-[#8FA698] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#FAF8F5] block">California Telehealth</span>
                  <span>Secure video sessions for residents across California</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Professional Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <p>
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-[0.72rem] text-[#FAF8F5]/50 max-w-lg">
            Therapy services are provided exclusively to clients located in California.
            This website is intended for informational purposes and does not constitute a formal doctor-patient relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
