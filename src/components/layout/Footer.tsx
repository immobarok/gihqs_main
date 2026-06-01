import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-12 md:py-16 px-6 md:px-12 lg:px-20 border-t border-white/5 font-sans relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Layout Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: BRAND LOGO & CORE TAGLINE BLOCK */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              {/* Logo Typography Representation */}
              <h2 className="text-4xl md:text-5xl font-light tracking-[0.08em] font-serif text-white">
                GIHQS
              </h2>
              
              {/* Sub-logo horizontal separation element */}
              <div className="flex items-center space-x-2 max-w-[240px]">
                <div className="h-[1px] bg-white/40 flex-grow" />
                <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-white/80 uppercase whitespace-nowrap">
                  Global Institute For
                </span>
                <div className="h-[1px] bg-white/40 flex-grow" />
              </div>
              
              <p className="text-[9px] md:text-[10px] font-bold tracking-[0.18em] text-white/90 uppercase pt-0.5">
                Healthcare Quality & Safety
              </p>
            </div>

            {/* Core Segment Purpose Narrative */}
            <p className="text-sm font-medium text-[#B8C5C0] leading-snug max-w-sm">
              Advancing Healthcare Professionals for High-Reliability Healthcare Systems
            </p>

            {/* Flat Pill Indicator Container */}
            <div>
              <span 
                className="inline-block px-4 py-2 border border-white/10 bg-[#214038] text-white text-sm rounded-full"
              >
                Towards Zero Preventable Harm
              </span>
            </div>
          </div>

          {/* COLUMN 2: INTERNAL PLATFORM LINKS */}
          <div className="md:col-span-3 space-y-4 md:pl-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              GIHQS
            </h3>
            <ul className="space-y-3">
              {[
                "Our Story",
                "Vision, Mission & Values",
                "Learning",
                "Accreditation",
                "Membership",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-[#B8C5C0] hover:text-white transition-colors duration-150 font-normal block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFRASTRUCTURE INFORMATION */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-[#B8C5C0] font-normal">
              
              {/* Address Row */}
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#CAA24A] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  1209 Mountain Road PL NE<br />
                  STE R Albuquerque, NM 87110
                </span>
              </li>

              {/* Phone Line Row */}
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#CAA24A] shrink-0" />
                <a href="tel:+13477639554" className="hover:text-white transition-colors">
                  +1 347 763 9554
                </a>
              </li>

              {/* Emails / Support Rows */}
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#CAA24A] mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:info@gihqs.com" className="hover:text-white transition-colors block">
                    info@gihqs.com
                  </a>
                  <span className="text-xs text-muted-foreground block font-light leading-normal">
                    Refunds & purchase support:<br />
                    <a href="mailto:support@gihqs.com" className="text-[#B8C5C0] hover:text-white transition-colors">
                      support@gihqs.com
                    </a>
                  </span>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM METRICS BAR: COPYRIGHT & COMPLIANCE STACK */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-normal text-muted-foreground">
          
          {/* Copyright info statement */}
          <div className="text-center md:text-left order-2 md:order-1 text-[#8FA89F]/80">
            © 2026 Global Institute for Healthcare Quality & Safety (GIHQS). All rights reserved.
          </div>

          {/* Global Legal Link Architecture */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 order-1 md:order-2 text-[#8FA89F]/80">
            {[
              "Privacy Policy",
              "Terms of Use",
              "Terms & Conditions of Purchase",
              "Refund Policy",
              "Disclaimer",
            ].map((policy, idx, arr) => (
              <React.Fragment key={policy}>
                <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
                  {policy}
                </a>
                {idx !== arr.length - 1 && (
                  <span className="text-white/10 hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}