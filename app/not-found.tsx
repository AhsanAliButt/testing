//

"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Footer from "@/components/footer";
import Link from "next/link";
import NavigationBar from "@/screens/LandingPage/HeroSection/NavigationBar";
import Image from "next/image";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 50 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2.5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    const nextValue = baseX.get() + moveBy;
    baseX.set(Math.min(Math.max(nextValue, -100), 100));
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="text-item">{children} </span>
        <span className="text-item">{children} </span>
        <span className="text-item">{children} </span>
        <span className="text-item">{children} </span>
      </motion.div>
    </div>
  );
}

export default function Custom404() {
  // Image variants with smoother transitions
  const imageVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(-50px)",
      willChange: "transform, opacity",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0)",
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <div className="w-[100%] overflow-hidden">
      <button className="bg-green w-[80px] h-[80px] rounded-full flex items-center justify-center fixed right-5 bottom-5 z-50">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.04503 16.0031V15.9993C1.04503 12.0208 2.62335 8.20552 5.43232 5.39271C6.82317 3.99996 8.47427 2.89524 10.2913 2.14157C12.1084 1.38789 14.0558 1 16.0225 1C19.9944 1 23.8038 2.57995 26.6127 5.39271C29.4217 8.20552 31 12.0208 31 15.9993C31 19.9778 29.4217 23.7931 26.6127 26.6059C23.8038 29.4186 19.9944 30.9986 16.0225 30.9986H1.64278H1.62171L1.60066 30.9995C1.48261 31.0044 1.36565 30.9742 1.26461 30.9124C1.16843 30.8536 1.09072 30.7687 1.04049 30.6675C0.999841 30.5624 0.989485 30.4477 1.01084 30.3367C1.03312 30.2209 1.08888 30.1144 1.17096 30.0304C1.17155 30.0298 1.17215 30.0292 1.17274 30.0286L4.36353 26.8335L5.00466 26.1915L4.42785 25.4911C2.2288 22.821 1.03194 19.4644 1.04503 16.0031Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </button>

      <NavigationBar blackLogo={false} />

      <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-10">
        {/* Image coming from top to bottom */}
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image
            src={"./thy.svg"}
            alt="Loading..."
            width={140}
            height={140}
            className="absolute top-[23vh] left-[15%] z-50 hidden min-[1050px]:block"
          />
        </motion.div>

        <motion.div
          initial={{ y: 200, scale: 0.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ParallaxText baseVelocity={-5}>
            <div className="flex items-center gap-10">
              <p className="text-[90px] md:text-[160px] xxl:text-[228px] font-medium text-black">
                No encontrada
              </p>
              <div className="rounded-[72px] border border-black flex items-center justify-center w-[101px] md:w-[113px] xxl:w-[128px] xxl:h-[52px] h-[37px] md:h-[46px]">
                <p className="text-[15px] text-black font-regular leading-2 tracking-normal font-gustavo-reg">
                  ERROR 404
                </p>
              </div>
              <p className="text-[90px] md:text-[160px] xxl:text-[228px] font-medium text-black">
                Página
              </p>
            </div>
          </ParallaxText>
        </motion.div>

        <Link href="/">
          <button className="flex items-center text-sm text-black font-gustavo-reg gap-2">
            <div className="w-[14px] aspect-square rounded-full bg-green"></div>
            VOLVER A LA HOME
            <img
              src="/long-arrow.svg"
              alt="Loading..."
              className="w-[27px] h-[11px]"
            />
          </button>
        </Link>

        {/* Image coming from bottom to top */}
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image
            src={"./floor.svg"}
            alt="Loading..."
            width={140}
            height={140}
            className="absolute bottom-[22vh] right-[20%] z-50 hidden min-[1050px]:block"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
