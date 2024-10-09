import Footer from "@/components/footer";
import FourthSection from "@/screens/LandingPage/FourthSection";
import HeroSection from "@/screens/LandingPage/HeroSection";
import SecondSection from "@/screens/LandingPage/secondSection";
import ThirdSection from "@/screens/LandingPage/ThirdSection";

export default function Home() {
  return (
    <div className="bg-paper w-[100%] min-h-[100vh]">
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
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}
