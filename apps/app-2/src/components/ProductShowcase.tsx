"use client";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight ">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 md:text-[54px] md:leading-[60px]">
            Built for focus and clarity
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Our intuitive dashboard gives your team full visibility into
            projects, deadlines, and responsibilities.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            className="absolute -right-36 -top-32 hidden md:block"
            height={262}
            width={262}
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            className="absolute bottom-24 -left-36 hidden md:block"
            height={262}
            width={262}
            style={{ translateY }}
          />
        </div>
      </div>
    </div>
  );
};
