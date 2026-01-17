import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OurLocations from "../components/OurLocations";
import Restaurant from "../components/Restaurant";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <Restaurant limit="home" />
            <WhyChooseUs />
            <OurLocations />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;
