import { useEffect, useState } from "react";
import ServicesData from "./ServicesData";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/services")
            .then(req => req.json()).then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className="flex flex-col w-full md:flex-row lg:flex-row md:px-10 py-5">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <h2 className="text-2xl font-semibold">Our Top Services</h2>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <p className="text-xl font-medium flex  flex-col  gap-2"> Currently available : {services.length} <span className="text-5xl">🚗🚕🚙</span>  </p>
                </div>
            </div>

            <div>
                {
                    services ? <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2  h-fit card bg-base-300 rounded-box max-w-5xl mx-auto">
                            {
                                services.map((data) => <ServicesData key={data._id} data={data} ></ServicesData>)
                            }
                        </div>
                    </>
                        :
                        <>
                            <div>

                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Services;