import ban1 from './../../assets/images/banner/1.jpg'
import ban2 from './../../assets/images/banner/2.jpg'
import ban3 from './../../assets/images/banner/3.jpg'
import ban4 from './../../assets/images/banner/4.jpg'

const BannerHome = () => {
    return (
        <div className=''>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">

                    <img src={ban1} className="w-full  " />
                    <div className='absolute h-full   w-full space-y-4 p-4 bg-gradient-to-r from-gray-600 to-transparent text-orange-50 '>
                        <h1 className='text-6xl font-semibold'>Affordable Price <br /> For Car Servicing</h1>
                        <p className='text-lg w-1/4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className=' btn btn-outline font-bold'>Discover More</button>
                    </div>
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={ban2} className="w-full" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={ban3} className="w-full" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={ban4} className="w-full" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;