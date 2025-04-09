"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="experience py-10 px-4 md:px-16 mt-8" id="experience">
      <h2 className="text-center text-4xl font-bold text-white mb-12 mt-12">
        Experience
      </h2>

      <motion.ul ref={ref} className="space-y-8">
        <motion.li
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl shadow-lg bg-gray-900"
        >
          <div className="min-w-[80px]">
            <Image
              src="/images/experience/1.png"
              alt="ParkItUp Logo"
              width={80}
              height={50}
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Web Development Intern
            </h3>
            <p className="text-gray-400 text-sm mb-1">ParkItUp</p>
            <p className="text-gray-500 text-sm">May 2024 – July 2024</p>
            <p className="text-gray-300 mt-2 max-w-xl">
              Contributed to building a scalable parking management platform,
              working across the stack to enhance both performance and user
              experience.
            </p>
          </div>
        </motion.li>
      </motion.ul>
    </section>
  );
};

export default Experience;
