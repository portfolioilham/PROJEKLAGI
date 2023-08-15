// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import Faqq from "./Faq";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Footer from '../Components/Footer'

// import required modules
import { Pagination } from "swiper/modules";
import { dataSwiper } from "../data/index";

const Testimonial = () => {
  return (
    <div className="Homepage w-100 ">
      <div className="testimonial ">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Testimonial</h1>
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
                        <p className="desck">{data.desc}</p>
                        <div className="horizontal-line"></div>{" "}
                        {/* Garis Horizontal */}
                        <div className="gabungan">
                          <h6 className=" namal ">
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
        <br />
        <Faqq />
      </div>
    </div>
  );
};

export default Testimonial;
