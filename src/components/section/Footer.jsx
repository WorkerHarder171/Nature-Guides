import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
export default function Footer() {
  const date = new Date();
  const formatDate = date.toDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <footer className="p-10 bg-[#1A1A19] text-white ">
        <div className="flex justify-between items-center">
          <div className="wrapper-text">
            <p className="capitalize text-[#D1CCBF]">2024 © edition</p>
            <p className="font-semibold text-xl">{formatDate}</p>
          </div>
          <div className="wrapper-social">
            <p className="capitalize text-[#D1CCBF]">Social Media</p>
            <div className="wrapper-icon mt-3 flex items-center gap-5">
              <a
                href="https://www.facebook.com/"
                className="text-white text-3xl duration-300 hover:text-[#aaa] hover:scale-110"
              >
                {" "}
                <FaFacebookSquare />{" "}
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-white text-3xl duration-300 hover:text-[#aaa] hover:scale-110"
              >
                {" "}
                <FaInstagramSquare />{" "}
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-white text-3xl duration-300 hover:text-[#aaa] hover:scale-110"
              >
                {" "}
                <FaTwitterSquare />{" "}
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-white text-3xl duration-300 hover:text-[#aaa] hover:scale-110"
              >
                {" "}
                <FaYoutubeSquare />{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
