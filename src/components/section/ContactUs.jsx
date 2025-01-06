import { GoArrowUpRight } from "react-icons/go";
import merapi from "@/assets/pictures/merapi.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ContactUs() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const textRef = useRef(null);
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const countryRef = useRef(null);
  const sendRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "30% 25%",
        scrub: true,
      },
    });

    tl.to(containerRef.current, {
      y: 0,
      opacity: 1,
    });

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      fullnameRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      emailRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      countryRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sendRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 1.4,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <>
      {/* Wrapper for Content */}
      <div id="contact-us" className="lg:pl-32 lg:p-0 md:p-10 sm:p-10 min-h-screen text-white flex flex-col justify-center relative">
        <div className="bg-[#000] top-0 left-0 opacity-35 h-full w-full absolute z-0"></div>

        <div className="grid lg:grid-cols-2 sm:flex-col lg:justify-between lg:items-center sm:items-start relative z-10 lg:gap-0 sm:gap-10">
          {/* Left Section */}
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-2">
              <span className="border bg-white px-3 h-1 w-6"></span>
              <span className="border bg-white px-3 h-1 w-6"></span>
              <span className="border bg-white px-3 h-1 w-6"></span>
            </div>
            <p className="lg:text-4xl sm:text-xl capitalize">Contact Us</p>
          </div>
          <div className="card lg:p-16 sm:p-8 border bg-[#F5F5DC] text-black sm:w-full">
            <form ref={containerRef} className="w-full">
              <p
                ref={formRef}
                className="font-thin lg:text-4xl md:text-3xl sm:text-2xl capitalize text-left"
              >
                take the first step
              </p>
              <p
                ref={textRef}
                className="font-normal lg:text-2xl md:text-xl sm:text-lg max-w-lg my-10 leading-[150%]"
              >
                Become a Nature Guide member, get all the benefits starting from
                destination information in the form of hidden places and places
                that must be visited
              </p>
              <div className="flex flex-col gap-3">
                <div ref={fullnameRef} className="wrapper">
                  <p className="capitalize py-4 lg:text-2xl md:text-xl sm:text-lg">fullname</p>
                  <input
                    type="text"
                    placeholder="enter your name"
                    className="input capitalize border-b border-[#184732] p-4 w-full text-2xl focus:outline-none"
                  />
                </div>
                <div ref={emailRef} className="wrapper">
                  <p className="capitalize py-4 lg:text-2xl md:text-xl sm:text-lg">Email Address</p>
                  <input
                    type="email"
                    placeholder="enter your email address"
                    className="input capitalize border-b border-[#184732] p-4 w-full text-2xl focus:outline-none"
                  />
                </div>
                <div ref={phoneRef} className="wrapper">
                  <p className="capitalize py-4 lg:text-2xl md:text-xl sm:text-lg">phone number</p>
                  <input
                    type="email"
                    placeholder="enter your phone number"
                    className="input capitalize border-b border-[#184732] p-4 w-full lg:text-2xl  md:text-xl sm:text-lgfocus:outline-none"
                  />
                </div>
                <div ref={countryRef} className="wrapper">
                  <p className="capitalize py-4 lg:text-2xl md:text-xl sm:text-lg">country</p>
                  <select className="input capitalize border-b border-[#184732] p-4 w-full text-2xl focus:outline-none">
                    <option value="Indonesia">Indonesia</option>
                    <option value="Suriah">Suriah</option>
                    <option value="Palestina">Palestina</option>
                    <option value="Yaman">Yaman</option>
                  </select>
                </div>
                <button
                  ref={sendRef}
                  className="group relative overflow-hidden border-b-4 shadow-lg focus:ring active:bg-white active:text-white mt-10 px-10 py-8 bg-[#184732] duration-500 text-[#D1CCBF] lg:text-3xl md:text-2xl sm:text-xl text-left hover:bg-[#205b40]"
                >
                  <span className="absolute bottom-0 left-0 w-0 h-0 border-b-4 border-white transition-all duration-700 group-hover:w-full group-hover:h-full"></span>
                  <div className="flex items-center justify-between relative">
                    <span>Send</span>
                    <GoArrowUpRight />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="relative">
        <img
          className="fixed top-0 left-0 sm:w-full sm:h-full  sm:object-cover z-[-1]"
          src={merapi}
          alt="Semeru Mountain"
        />
      </div>
    </>
  );
}
