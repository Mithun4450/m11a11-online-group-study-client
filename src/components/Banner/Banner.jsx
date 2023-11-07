
import banner1 from "../../assets/images/banner/science.png"
import banner2 from "../../assets/images/banner/literature.png"
import banner3 from "../../assets/images/banner/history.png"
import banner4 from "../../assets/images/banner/geography.png"
import banner5 from "../../assets/images/banner/chemistry.png"
import banner6 from "../../assets/images/banner/art.png"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[80vh] my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-4xl font-bold">Create, Submit Assignments, Be Examinee or Examiner of Assignments and study with students from all over the world</h1>
                            <p className="text-white text-lg ">Join the largest global student community online and say goodbye to lack of motivation.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Study Together Now</button>
                                
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-4xl font-bold">Create, Submit Assignments, Be Examinee or Examiner of Assignments and study with students from all over the world</h1>
                            <p className="text-white text-lg ">Join the largest global student community online and say goodbye to lack of motivation.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Study Together Now</button>
                                
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-4xl font-bold">Create, Submit Assignments, Be Examinee or Examiner of Assignments and study with students from all over the world</h1>
                            <p className="text-white text-lg ">Join the largest global student community online and say goodbye to lack of motivation.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Study Together Now</button>
                                
                            </div>
                       </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-4xl font-bold">Create, Submit Assignments, Be Examinee or Examiner of Assignments and study with students from all over the world</h1>
                            <p className="text-white text-lg ">Join the largest global student community online and say goodbye to lack of motivation.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Study Together Now</button>
                                
                            </div>
                       </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-4xl font-bold">Create, Submit Assignments, Be Examinee or Examiner of Assignments and study with students from all over the world</h1>
                            <p className="text-white text-lg ">Join the largest global student community online and say goodbye to lack of motivation.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Study Together Now</button>
                                
                            </div>
                       </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-4xl font-bold">Create, Submit Assignments, Be Examinee or Examiner of Assignments and study with students from all over the world</h1>
                            <p className="text-white text-lg ">Join the largest global student community online and say goodbye to lack of motivation.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Study Together Now</button>
                                
                            </div>
                       </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;