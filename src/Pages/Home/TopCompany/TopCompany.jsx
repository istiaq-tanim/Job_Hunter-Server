import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import TopCompanyCard from "./TopCompanyCard";


import { FreeMode, Pagination } from 'swiper/modules';



const TopCompany = () => {
      const [company, setCompany] = useState([])
      const [selectCategory, setSelectCategory] = useState("All")

      useEffect(() => {
            fetch("https://job-portal-server-istiaq-tanim.vercel.app/topCompany")
                  .then(res => res.json())
                  .then(data => {
                        setCompany(data)
                        console.log(data)
                  })
      }, [])

      const handleCategory = (e) => {
            setSelectCategory(e.target.value)
            console.log(e.target.value)
      }

      const swiperBreakpoints = {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          };

      const filteredCompanies = selectCategory === 'All' ? company : company.filter(company => company.category === selectCategory);
      return (
            <div>
                  <h3 className="text-3xl mt-20 mb-5 text-center text-blue-400 font-bold">Top Companies</h3>
                  <div className="flex justify-end mb-20 mr-20">
                        <select value={selectCategory} onChange={handleCategory} className="select select-info w-full max-w-xs  bg-blue-400">
                              <option value="All">All Jobs</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Worldwide">Worldwide</option>
                        </select>
                  </div>
                  <div className="max-w-screen-xl lg:mx-auto mb-10">
                        <Swiper
                              slidesPerView={3}
                              spaceBetween={30}
                              freeMode={true}
                              breakpoints={swiperBreakpoints}
                              pagination={{
                                    clickable: true,
                              }}

                              modules={[FreeMode, Pagination]}
                              className="mySwiper"
                        >
                              {filteredCompanies.map((item) => (
                                    <SwiperSlide className="px-5 lg:px-0" key={item.id}>
                                          <div>
                                                <TopCompanyCard item={item} />
                                          </div>
                                    </SwiperSlide>
                              ))}
                        </Swiper>
                  </div>

            </div>



      );
};

export default TopCompany;