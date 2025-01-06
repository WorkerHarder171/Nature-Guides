import Navbar from "@/components/navigation/Navbar";
import cinema from "@/assets/videos/cinema.mp4";
import merapi from "@/assets/pictures/merapi.jpg";
import tumpaksewu from "@/assets/pictures/tumpak-sewu.jpg";
import rinjani from "@/assets/pictures/rinjani.jpg";
import merapimkv from "@/assets/videos/merapi.mp4";
import tumpaksewumkv from "@/assets/videos/tumpaksewu.mp4";
import rinjanimkv from "@/assets/videos/rinjani.mp4";
import Marquee from "react-fast-marquee";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Jumbotron() {
  const [click, setClick] = useState(0);

  const video = {
    0: cinema,
    1: merapimkv,
    2: tumpaksewumkv,
    3: rinjanimkv,
  };

  const textChange = [
    {
      id: 0,
      name: "Wonderful Indonesia",
      lead: "Indonesia is an archipelago at the equator line. A tropical island with endemic animals and flora, Indonesia truly is a piece of heaven on earth.",
    },
    {
      id: 1,
      name: "Gunung Merapi",
      lead: "Gunung Merapi adalah gunung berapi yang terletak di perbatasan antara Provinsi Jawa Tengah dan Daerah Istimewa Yogyakarta, Indonesia.",
    },
    {
      id: 2,
      name: "Air Terjun Tumpak Sewu",
      lead: "Air Terjun Tumpak Sewu adalah air terjun yang terletak di perbatasan antara Kabupaten Lumajang dan Kabupaten Malang, Jawa Timur.",
    },
    {
      id: 3,
      name: "Gunung Rinjani",
      lead: "Gunung Rinjani adalah gunung berapi yang terletak di Pulau Lombok, Nusa Tenggara Barat, Indonesia.",
    },
  ];

  const textRef = useRef(null);
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "25% 22%",
        scrub: true,
      },
    });

    tl.to(textRef.current, {
      y: -200,
      delay: 0.3,
    })
      .to(marqueeRef.current, {
        y: -40,
        delay: 0.2,
      })
      .to(
        containerRef.current,
        {
          y: 100,
        },
        "a"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const selectedText = textChange.find((item) => item.id === click);

  return (
    <div ref={containerRef} className="h-screen w-full relative z-0">
      <Navbar />
      <div className="bg-[#000] top-0 left-0 opacity-70 h-screen w-full absolute z-0"></div>
      <video
        key={video[click]}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        src={video[click]}
      />

      <div className="wrapper absolute lg:p-14 sm:p-8 text-white lg:bottom-0 md:bottom-44 sm:bottom-0 w-full">
        <div
          ref={textRef}
          className="wrapper-content grid lg:grid-cols-2 sm:grid-cols-1 w-full items-end"
        >
          <div className="wrapper">
            <div className="flex gap-5 items-center mb-5">
              <div className="wrapper-span flex flex-col gap-2">
                <span className="bg-white px-3 border"></span>
                <span className="bg-white px-3 border"></span>
                <span className="bg-white px-3 border"></span>
              </div>
              <p className="lg:text-3xl sm:text-md capitalize">
                explore destination
              </p>
            </div>

            <p className="lg:text-5xl md:text-3xl sm:text-xl uppercase">
              {selectedText?.name || "wonderful indonesia"}
            </p>

            <div className="wrapper-text mt-5">
              <p className="lead lg:max-w-xl md:max-w-sm font-thin lg:text-xl md:text-md sm:text-sm tracking-wider">
                {selectedText?.lead}
              </p>
            </div>
          </div>

          <div className="wrapper-img flex lg:justify-end sm:justify-center gap-5 sm:mt-10">
            {[merapi, tumpaksewu, rinjani].map((img, index) => (
              <button
                key={index}
                className="wrapper duration-500 hover:scale-110"
                onClick={() => setClick(index + 1)}
              >
                <p className="number text-lg text-left md:block sm:hidden ">{`0${
                  index + 1
                } .`}</p>
                <img
                  className=" lg:min-w-[201px] lg:h-[100px] md:min-w-[150px] sm:min-h-[100px] sm:min-w-[70px] sm:h-[50px] object-cover"
                  src={img}
                  alt={`Destination ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div ref={marqueeRef} className="wrapper">
          <div className="relative flex overflow-x-hidden">
            <Marquee
              autoFill
              pauseOnClick
              speed={0.01}
              className="cursor-pointer"
            >
              <div className="py-12 animate-marquee whitespace-nowrap">
                <span className="lg:text-6xl sm:text-3xl"> • Nature </span>
                <span className="lg:text-6xl sm:text-3xl">• Explore </span>
                <span className="lg:text-6xl sm:text-3xl">• Journey </span>
                <span className="lg:text-6xl sm:text-3xl">• Experience </span>
                <span className="lg:text-6xl sm:text-3xl">• Miracle </span>
              </div>
            </Marquee>
          </div>

          <div className="flex justify-center">
            <span className="border border-[#ddd] w-10/12 py-0 mx-auto"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
