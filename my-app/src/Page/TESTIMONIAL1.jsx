

import { Swiper, SwiperSlide } from "swiper/react";
import {  dataSwiper } from "../data/index";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
// import Footerr from "../Components/Footer";
import "swiper/css";
import { Container, Row, Col } from "react-bootstrap";

const Testi = ()=> {
    return (
        <div className="Testimonial text-center">
        <Container>
          <Row>
            <Col>
              <h1>Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {dataSwiper.map((data) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <div>
                        <p className="desc">{data.desc}</p>
                        <div className="horizontal-line"></div>{" "}
                        {/* Garis Horizontal */}
                        <div className="gabungan">
                          <h6 className=" nama ">
                            {data.name}
                            <p className="skills">{data.skill}</p>
                          </h6>
                          <img src={data.image} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                
              </Swiper>
              
            </Col>
            
          </Row>
          
        </Container>
        
      </div>
    )
}
            

export default Testi;