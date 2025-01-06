import { GoArrowUpRight } from "react-icons/go";
import tumpaksewu from "@/assets/pictures/tumpak-sewu.jpg";
import merapi from "@/assets/pictures/merapi.jpg";
import rinjani from "@/assets/pictures/rinjani.jpg";
import semeru from "@/assets/pictures/semeru.jpg";
import danau from "@/assets/pictures/danau.jpeg";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Information() {
  const [hovered, setHovered] = useState(null);

  const images = {
    "01": merapi,
    "02": tumpaksewu,
    "03": rinjani,
    "04": semeru,
    "05": danau,
  };

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "30% 25%",
        scrub: true,
      },
    });

    tl.to(containerRef.current, {
      y: -200,
      opacity: 0,
    });

    gsap.fromTo(
      imageRef.current,
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
      textRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div id="information" className="wrapper lg:p-32 sm:p-10 min-h-screen bg-[#184732] relative">
        <div className="flex justify-end sm:justify-start gap-5 items-center mb-24">
          <div className="wrapper-span flex flex-col gap-2">
            <span className="bg-white px-3 border"></span>
            <span className="bg-white px-3 border"></span>
            <span className="bg-white px-3 border"></span>
          </div>
          <p className="lg:text-3xl sm:text-xl capitalize text-white">information</p>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-2 sm:grid-cols-1  items-center">
          <div
            ref={imageRef}
            className="flex-1 flex items-center justify-center"
          >
            <img
              src={images[hovered] || merapi}
              alt="Location Preview"
              className="rounded-[30px] object-cover lg:max-w-[400px] lg:h-[500px] sm:max-w-[300px] sm:h-[250px] shadow-lg transition-all duration-500"
            />
          </div>

          <div
            ref={textRefs}
            className="flex-1 flex flex-col justify-center sm:mt-14 text-[#D1CCBF]"
          >
            {[
              { id: "01", title: "Gunung Merapi" },
              { id: "02", title: "Air Terjun Tumpak Sewu" },
              { id: "03", title: "Gunung Rinjani" },
              { id: "04", title: "Gunung Semeru" },
              { id: "05", title: "Danau Taman Hidup" },
            ].map((item) => (
              <button
                key={item.id}
                className="flex pr-5 py-5 items-center justify-between w-full text-left capitalize lg:text-4xl sm:text-xl font-semibold border-b border-[#D1CCBF]  duration-500 hover:bg-[#D1CCBF] hover:text-[#184732] hover:pl-5"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="wrapper flex gap-10">
                  <span>{item.id}</span>
                  <span className="text-left">{item.title}</span>
                </div>
                <span className="lg:text-4xl sm:text-xl">
                  <GoArrowUpRight />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
