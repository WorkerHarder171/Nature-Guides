import semeru from "@/assets/pictures/semeru.jpg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const containerRef = useRef(null);
  const lead1Ref = useRef(null);
  const lead2Ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const lead1 = lead1Ref.current;
    const lead2 = lead2Ref.current;
    const image = imageRef.current;

    gsap.fromTo(
      image,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "3% 0%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      lead1,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.3,
        stagger: 0.6,
        scrollTrigger: {
          trigger: container,
          start: "6% 3%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      lead2,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        delay: 1,
        scrollTrigger: {
          trigger: container,
          start: "3% 0%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="introduction" ref={containerRef} className="h-full bg-[#2B3530] relative lg:p-32 sm:p-10">
      {/* Wrapper */}
      <div className="wrapper flex sm:flex-col justify-between items-start relative">
        <div className="flex gap-5 items-center">
          <div className="wrapper-span flex flex-col gap-2">
            <span className="bg-white px-3 border"></span>
            <span className="bg-white px-3 border"></span>
            <span className="bg-white px-3 border"></span>
          </div>
          <p className="lg:text-3xl sm:text-xl capitalize text-white">introduction</p>
        </div>

        {/* Fixed Image */}
        <div ref={imageRef} className="lg:max-w-4xl sm:max-w-sm sm:mt-16">
          <img src={semeru} alt="Semeru Mountain" />
        </div>
      </div>

      {/* Content */}
      <div className="grid lg justify-end mt-10">
        <div className="flex flex-col">
          <p
            ref={lead1Ref}
            className="max-w-4xl lg:text-4xl sm:text-2xl text-[#D1CCBF] text-left leading-[150%]"
          >
            Welcome to{" "}
            <span className="capitalize text-[#ffd979]">
              {" "}
              wonderful Indonesia{" "}
            </span>{" "}
            with <span className="uppercase tracking-wider">
              nature guide
            </span>{" "}
            where you discover amazing destination and experiences nestled in
            the most popular destinations on the Indonesia.
          </p>

          <p
            ref={lead2Ref}
            className="mt-14 max-w-lg lg:text-2xl sm:text-md text-[#D1CCBF] leading-[150%]"
          >
            At NATURE GUIDE, we use the Integrative Wellness approach, that
            considers psychological, physical, and nutritional aspects of your
            life to improve overall well-being and balance.
          </p>
        </div>
      </div>
    </div>
  );
}
