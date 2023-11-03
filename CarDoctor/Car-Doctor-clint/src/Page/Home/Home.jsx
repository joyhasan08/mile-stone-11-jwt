import BannerHome from "../../Component/Banner/BannerHome";
import Footer from "../../Component/Footer";
import Services from "../../Component/Servics/Services";
import ServicesData from "../../Component/Servics/ServicesData";
import AboutService from "./AboutService";


const Home = () => {
    return (
        <>
            <section className="    ">
                <BannerHome></BannerHome>
            </section>
            <section>
                <Services></Services>
            </section>
            <section className="max-w-5xl mx-auto">
                <AboutService></AboutService>
            </section>
            {/* <section>
                <Footer></Footer>
            </section> */}
        </>
    );
};

export default Home;