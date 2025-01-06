import Jumbotron from "@/components/section/Jumbotron";
import Introduction from "@/components/section/Introduction";
import Information from "@/components/section/Information";
import DiscoverUs from "@/components/section/DiscoverUs";
import ContactUs from "@/components/section/ContactUs";
import Footer from "@/components/section/Footer";
import SmoothScrollWallpaper from "./layout/SmoothScrollWallpaper";

export default function App() {
  return (
    <>
      <SmoothScrollWallpaper>
        <Jumbotron />
        <Introduction />
        <Information />
        <DiscoverUs />
        <ContactUs />
        <Footer />
      </SmoothScrollWallpaper>
    </>
  );
}
