import BannerHome from "../../Component/Banner/BannerHome";
import Footer from "../../Component/Footer";
import AboutService from "./AboutService";


const Home = () => {
    return (
        <>
            <section className="max-w-6xl mx-auto  ">
                <BannerHome></BannerHome>
            </section>
            <section className="max-w-5xl mx-auto">
                <AboutService></AboutService>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </>
    );
};

export default Home;