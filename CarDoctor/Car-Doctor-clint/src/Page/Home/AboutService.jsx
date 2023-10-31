import parson from "./../../assets/images/about_us/person.jpg"
import part from "./../../assets/images/about_us/parts.jpg"

const AboutService = () => {
    return (
        <div className="flex">
            <div className="w-1/2 m-4 relative">
                <img src={parson} alt="" />
                <img className=" absolute -bottom-4 -right-4 border-4 border-white w-1/2" src={part} alt="" />
            </div>
            <div className="w-1/2 p-4 space-y-4 card-body shadow-md">
                <p className="font-medium text-xl">About us</p>
                <h2 className="font-semibold text-2xl" >We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
                <button className="btn btn-outline">Get More</button>
            </div>
        </div>
    );
};

export default AboutService;