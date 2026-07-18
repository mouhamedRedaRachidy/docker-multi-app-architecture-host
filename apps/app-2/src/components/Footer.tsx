"use client";
import XIcon from "../assets/social-x.svg";
import LinkedInIcon from "../assets/social-linkedin.svg";
import YoutubeIcon from "../assets/social-youtube.svg";
import InstaIcon from "../assets/social-insta.svg";
import starImage from "@/assets/star.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-[#BCBCBC] relative overflow-hidden flex flex-col justify-between py-16"
    >
      <motion.img
        src={starImage.src}
        alt="Star Decoration"
        width={250}
        className="absolute top-20 -left-34 opacity-20 pointer-events-none"
        style={{ translateY }}
      />
      <motion.img
        src={starImage.src}
        alt="Star Decoration"
        width={400}
        className="absolute bottom-32 -right-40 opacity-20 pointer-events-none"
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], [-100, 100]),
        }}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Join thousands of teams
            </h3>
            <p className="text-lg text-[#BCBCBC] leading-relaxed mb-8 max-w-md">
              Start organizing tasks, tracking launches, and delivering projects
              faster with the most powerful dashboard available.
            </p>
            <div className="flex flex-col gap-3 max-w-sm">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mb-16"></div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="text-sm text-gray-400">
            <p>© 2026 Aymane Mehdi. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>{" "}
              •{" "}
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
          <ul className="flex justify-center md:justify-start gap-6">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors hover:scale-125 duration-200 inline-block"
              >
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors hover:scale-125 duration-200 inline-block"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors hover:scale-125 duration-200 inline-block"
              >
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors hover:scale-125 duration-200 inline-block"
              >
                <InstaIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
