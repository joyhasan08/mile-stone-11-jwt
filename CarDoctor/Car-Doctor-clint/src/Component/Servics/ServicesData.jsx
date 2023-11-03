import { Link } from "react-router-dom";

const ServicesData = ({ data }) => {
    const { title, description, facility, img, price, service_id } = data
    // console.log(data);

    return (
        <div className=" ">

            <div className="card md:mx-5 my-10 h-[500px] bg-base-100 shadow-xl">
                <figure className=" object-cover  "><img className="w-full object-cover" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{service_id}</div>
                    </h2>
                    <p className="  h-36 overflow-auto">{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Products</div>
                        <Link className="badge badge-outline bg-cyan-400 font-semibold" >Buy now</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesData;