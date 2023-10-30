import parson from "./../../assets/images/about_us/person.jpg"
import part from "./../../assets/images/about_us/parts.jpg"

const AboutService = () => {
    return (
        <div className="flex">
            <div className="w-1/2">
                <img src={parson} alt="" />
            </div>
            <div className="w-1/2">
                <p>About us</p>
                <h2>We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button>Get More</button>
            </div>
        </div>
    );
};

export default AboutService;