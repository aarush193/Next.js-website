"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

type PreferredFormat = "in-person" | "telehealth";
type PreferredContact = "email" | "phone";

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredFormat: PreferredFormat;
  preferredContact: PreferredContact;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  preferredFormat: "in-person",
  preferredContact: "email",
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (digitsOnly.length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Front-end only demonstration delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 350);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full text-left border border-[#284338]/10 rounded-2xl p-7 sm:p-10 bg-white shadow-xs">
      {isSubmitted ? (
        <div
          role="status"
          aria-live="polite"
          className="text-center py-6 sm:py-8 space-y-5"
        >
          <div className="w-12 h-12 rounded-full bg-[#8FA698]/20 text-[#284338] flex items-center justify-center mx-auto">
            <Check className="w-6 h-6 stroke-[2.2]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2421] font-normal leading-tight">
              Thank you. Your request has been received.
            </h3>
            <p className="text-sm sm:text-base text-[#4A5550] max-w-lg mx-auto leading-relaxed">
              Dr. Reynolds will review your inquiry and follow up through your
              preferred contact method to coordinate an initial consultation.
            </p>
          </div>

          <div className="inline-block bg-[#F3EFEA]/80 rounded-xl px-5 py-3 text-xs sm:text-sm text-[#4A5550] text-left mx-auto border border-[#284338]/8">
            <div className="font-medium text-[#1F2421] mb-1">
              Request Summary:
            </div>
            <div>
              <span className="text-[#6E7B74]">Format:</span>{" "}
              {formData.preferredFormat === "in-person"
                ? "In-person in Santa Monica"
                : "Secure telehealth in California"}
            </div>
            <div>
              <span className="text-[#6E7B74]">Preferred Contact:</span>{" "}
              {formData.preferredContact === "email" ? "Email" : "Phone"}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs sm:text-sm font-medium text-[#284338] hover:text-[#658A77] underline underline-offset-4 cursor-pointer transition-colors"
            >
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6 sm:space-y-7">
          <div className="border-b border-[#284338]/10 pb-5">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2421] font-normal tracking-tight">
              Request an Appointment
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1.5 leading-relaxed">
              Please share your contact details and session preference below.
            </p>
          </div>

          {/* Name Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="appointment-name"
              className="block text-xs sm:text-sm font-medium text-[#1F2421] tracking-wide"
            >
              Full Name <span className="text-[#658A77]">*</span>
            </label>
            <input
              type="text"
              id="appointment-name"
              name="name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="Your full name"
              className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-[#1F2421] placeholder-[#6E7B74]/60 text-sm sm:text-base focus:outline-hidden focus:ring-1 transition-colors duration-150 ${
                errors.name
                  ? "border-[#658A77] focus:border-[#658A77] focus:ring-[#658A77]/20"
                  : "border-[#284338]/15 focus:border-[#284338] focus:ring-[#284338]/15"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-[#658A77]">{errors.name}</p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-1.5">
              <label
                htmlFor="appointment-email"
                className="block text-xs sm:text-sm font-medium text-[#1F2421] tracking-wide"
              >
                Email <span className="text-[#658A77]">*</span>
              </label>
              <input
                type="email"
                id="appointment-email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="Your email address"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-[#1F2421] placeholder-[#6E7B74]/60 text-sm sm:text-base focus:outline-hidden focus:ring-1 transition-colors duration-150 ${
                  errors.email
                    ? "border-[#658A77] focus:border-[#658A77] focus:ring-[#658A77]/20"
                    : "border-[#284338]/15 focus:border-[#284338] focus:ring-[#284338]/15"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-[#658A77]">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="appointment-phone"
                className="block text-xs sm:text-sm font-medium text-[#1F2421] tracking-wide"
              >
                Phone <span className="text-[#658A77]">*</span>
              </label>
              <input
                type="tel"
                id="appointment-phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                placeholder="Your phone number"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-[#1F2421] placeholder-[#6E7B74]/60 text-sm sm:text-base focus:outline-hidden focus:ring-1 transition-colors duration-150 ${
                  errors.phone
                    ? "border-[#658A77] focus:border-[#658A77] focus:ring-[#658A77]/20"
                    : "border-[#284338]/15 focus:border-[#284338] focus:ring-[#284338]/15"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-[#658A77]">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Preferred Format */}
          <fieldset className="space-y-2.5">
            <legend className="block text-xs sm:text-sm font-medium text-[#1F2421] tracking-wide mb-1">
              Preferred Format <span className="text-[#658A77]">*</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`relative flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-colors duration-150 ${
                  formData.preferredFormat === "in-person"
                    ? "bg-[#FAF8F5] border-[#284338]"
                    : "bg-white border-[#284338]/15 hover:border-[#284338]/40"
                }`}
              >
                <input
                  type="radio"
                  name="preferredFormat"
                  value="in-person"
                  checked={formData.preferredFormat === "in-person"}
                  onChange={() =>
                    setFormData({ ...formData, preferredFormat: "in-person" })
                  }
                  className="accent-[#284338] w-4 h-4"
                />
                <span className="text-xs sm:text-sm text-[#1F2421] font-medium leading-snug">
                  In-person in Santa Monica
                </span>
              </label>

              <label
                className={`relative flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-colors duration-150 ${
                  formData.preferredFormat === "telehealth"
                    ? "bg-[#FAF8F5] border-[#284338]"
                    : "bg-white border-[#284338]/15 hover:border-[#284338]/40"
                }`}
              >
                <input
                  type="radio"
                  name="preferredFormat"
                  value="telehealth"
                  checked={formData.preferredFormat === "telehealth"}
                  onChange={() =>
                    setFormData({ ...formData, preferredFormat: "telehealth" })
                  }
                  className="accent-[#284338] w-4 h-4"
                />
                <span className="text-xs sm:text-sm text-[#1F2421] font-medium leading-snug">
                  Secure telehealth in California
                </span>
              </label>
            </div>
          </fieldset>

          {/* Preferred Contact Method */}
          <fieldset className="space-y-2.5">
            <legend className="block text-xs sm:text-sm font-medium text-[#1F2421] tracking-wide mb-1">
              Preferred Contact Method <span className="text-[#658A77]">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`relative flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-colors duration-150 ${
                  formData.preferredContact === "email"
                    ? "bg-[#FAF8F5] border-[#284338]"
                    : "bg-white border-[#284338]/15 hover:border-[#284338]/40"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={() =>
                    setFormData({ ...formData, preferredContact: "email" })
                  }
                  className="accent-[#284338] w-4 h-4"
                />
                <span className="text-xs sm:text-sm text-[#1F2421] font-medium">
                  Email
                </span>
              </label>

              <label
                className={`relative flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-colors duration-150 ${
                  formData.preferredContact === "phone"
                    ? "bg-[#FAF8F5] border-[#284338]"
                    : "bg-white border-[#284338]/15 hover:border-[#284338]/40"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={() =>
                    setFormData({ ...formData, preferredContact: "phone" })
                  }
                  className="accent-[#284338] w-4 h-4"
                />
                <span className="text-xs sm:text-sm text-[#1F2421] font-medium">
                  Phone
                </span>
              </label>
            </div>
          </fieldset>

          {/* Privacy Note */}
          <p className="text-[0.78rem] text-[#6E7B74] leading-relaxed pt-1">
            To protect your privacy and confidentiality, please do not include
            medical history, diagnosis, symptoms, or sensitive clinical
            information in this initial request.
          </p>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-[#284338] text-[#FAF8F5] text-[0.95rem] font-medium tracking-wide hover:bg-[#1E342B] disabled:opacity-75 transition-all duration-200 cursor-pointer group"
            >
              <span>{isSubmitting ? "Submitting..." : "Submit Request"}</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
