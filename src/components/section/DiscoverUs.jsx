import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function DiscoverUs() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const leadRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "6% 3%",
        scrub: true,
      },
    });

    tl.to(containerRef.current, {
      y: -200,
      opacity: 0,
    })

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      leadRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  return (
    <>
      <div id="discover-us" className="lg:p-32 sm:p-10 bg-[#184732] min-h-screen text-[#D1CCBF]">
        <div ref={containerRef} className="flex sm:flex-col-reverse justify-between items-start">
          <div className="wrapper flex flex-col justify-end items-start ">
            <p ref={textRef} className="lg:text-5xl sm:text-3xl lg:max-w-[900px] lg:leading-[150%]">
              Our story is deeply rooted in fostering meaningful connections,
              providing genuine care, and upholding a strong commitment to our
              Community.
            </p>

            <div
              ref={leadRef}
              className="wrapper-button mt-24 flex flex-col w-full gap-5"
            >
              <button className="group flex capitalize items-center justify-between relative overflow-hidden border-b py-5 lg:text-4xl md:text-3xl sm:text-2xl text-left  text-[#D1CCBF]  focus:outline-none focus:ring active:bg-white active:text-white">
                <span className="ease absolute bottom-0 before:left-0 after:right-0 h-0 w-0 border-b border-white transition-all duration-700 group-hover:w-full"></span>
                Discover Us
                <GoArrowUpRight className="text-3xl mr-5" />
              </button>
              <button className="group flex capitalize items-center justify-between relative overflow-hidden border-b py-5 lg:text-4xl md:text-3xl sm:text-2xl text-left  text-[#D1CCBF]  focus:outline-none focus:ring active:bg-white active:text-white">
                <span className="ease absolute bottom-0 before:left-0 after:right-0 h-0 w-0 border-b border-white transition-all duration-700 group-hover:w-full"></span>
                meet the global team
                <GoArrowUpRight className="text-3xl mr-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-5 items-center mb-24">
            <div className="wrapper-span flex flex-col gap-2">
              <span className="bg-[#D1CCBF] px-3 border"></span>
              <span className="bg-[#D1CCBF] px-3 border"></span>
              <span className="bg-[#D1CCBF] px-3 border"></span>
            </div>
            <p className="lg:text-3xl sm:text-xl capitalize text-white">Discover Us</p>
          </div>
        </div>
      </div>

      <div className="wrapper"></div>
    </>
  );
}