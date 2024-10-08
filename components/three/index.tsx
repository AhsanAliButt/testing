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

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 50 }: ParallaxProps) { // Reduced baseVelocity
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // Adjusted transform range to scale down the effect
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2.5], { clamp: false });

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
    baseX.set(baseX.get() + moveBy);
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

export default function Three() {
  return (
    <section className="w-[100%] mt-[7%]">
      {/* @ts-ignore */}
      <ParallaxText baseVelocity={-5}>
        <div className="flex items-center gap-10 ">
          <p className="text-[90px] md:text-[160px] xl:text-[228px] font-medium text-black ">
            Soluciones
          </p>
          <div className="rounded-[72px] border border-black flex items-center justify-center w-[101px]  md:w-[113px] xl:w-[128px] xl:h-[52px] h-[37px] md:h-[46px]">
            <p className="text-[15px] text-black font-regular leading-2 tracking-normal font-gustavo-reg">
              A MEDIDA
            </p>
          </div>
          <p className="text-[90px] md:text-[160px] xl:text-[228px] font-medium text-black">
            Nuestras
          </p>
        </div>
      </ParallaxText>
    </section>
  );
}
