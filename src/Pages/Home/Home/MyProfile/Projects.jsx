import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import juice from "../../../../assets/portfolio/Juice.png"
import figure from "../../../../assets/portfolio/figure.png"
import master from "../../../../assets/portfolio/master.png"
import rhythm from "../../../../assets/portfolio/rhythm.png"


import { FreeMode, Pagination } from 'swiper/modules';
const Projects = () => {
    const projects =
        [
            {
                img: figure,
                name: "Figure Frontier",
                gitClient: "https://github.com/istiaq-tanim/Figure-MarketPlace-Client",
                gitServer: "https://github.com/istiaq-tanim/Figure-MarketPlace-Server",
                liveLink: "https://auth-figure-project.web.app/"
            },
            {
                img: rhythm,
                name: "Rhythm Ranch",
                gitClient: "https://github.com/istiaq-tanim/Rhythm-Ranch-Client",
                gitServer: "https://github.com/istiaq-tanim/Rhythm-Ranch-Server",
                liveLink: "https://summer-camp-auth-2f65d.web.app/"
            },
            {
                img: juice,
                name: "Juice Hub",
                gitClient: "https://github.com/istiaq-tanim/Juice-hub-client",
                gitServer: "https://github.com/istiaq-tanim/JuiceHub-Server",
                liveLink: "https://juice-hub.web.app/"
            },
            {
                img: master,
                name: "Master Chef",
                gitClient: "https://github.com/istiaq-tanim/Figure-MarketPlace-Client",
                gitServer: "https://github.com/istiaq-tanim/Figure-MarketPlace-Server",
                liveLink: "https://auth-figure-project.web.app/"
            }
        ]
    return (
        <div name="projects" className="w-full min-h-[350px]">
            <div className="flex max-w-6xl gap-6 mt-5 lg:mt-0 px-5 mx-auto items-center relative">
                <div className="w-full">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        // breakpoints={swiperBreakpoints}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide className="px-5 lg:px-0" key={index + 1}>
                                <div className="h-full w-full p-4 bg-sky-200 rounded-xl">
                                    <img src={project.img} alt="" className="rounded-lg" />
                                    <h3 className="text-xl my-4">{project.name}</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.gitClient}
                                            target="_blank" rel="noreferrer"
                                            className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            GitHub Client
                                        </a>
                                        <a
                                            href={project.gitServer}
                                            target="_blank" rel="noreferrer"
                                            className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            GitHub Server
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            target="_blank" rel="noreferrer"
                                            className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-500 rounded-xl">
                                    <img src={project.img} alt="" className="rounded-lg" />
                                    <h3 className="text-xl my-4">{project.name}</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.gitClient}
                                            target="_blank" rel="noreferrer"
                                            className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            GitHub Client
                                        </a>
                                        <a
                                            href={project.gitServer}
                                            target="_blank" rel="noreferrer"
                                            className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            GitHub Server
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            target="_blank" rel="noreferrer"
                                            className="text-cyan-600 cursor-pointer bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;