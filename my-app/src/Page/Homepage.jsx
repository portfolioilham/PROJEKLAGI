// import kelasImage from '../assets/img/kelas/programming.png';
// import pubg from '../assets/img/kelas/pubg.png';
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import heroimage from "../assets/img/kelas/image.png";
import hp from "../assets/img/kelas/hp (2).png";
import { kelasTerbaru,  } from "../data/index";
import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import Faq from "../Components/Faqcomponent";
// import Footerr from "../Components/Footer";
import Testi from '../Page/TESTIMONIAL1'

// import { Pagination } from "swiper/modules";
// import required modules
const Homepages = () => {
  const halamanganti = useNavigate();
  return (
    <div className="homepage w-100  ">
      <header className=" d-flex align-item-center">
        <Container>
          <Row className="header-box d-flex align-item-center">
            <Col lg={6}>
              <div className="tombolan ">
                <h1 className="mb-4 ">
                  Temukan bakat anda <span>segera di Spectre academy</span>{" "}
                  Jadikan karir impianmu <br /> menjadi kenyataan
                </h1>
                <p>
                  Specter Academy, jembatan menuju kesuksesan kreatifmu! Temukan
                  bakat coding, design, <br /> dan ilmu kreatif lainnya bersama
                  kami. Bergabung sekarang untuk meraih karir yang <br />{" "}
                  gemilang dalam dunia digital.
                </p>
                <button className="btn btn-blue btn-lg ">
                  Daftar Sekarang
                </button>
                <button className="btn btn-outline-blue btn-md rounded-1 ">
                  Lihat Promo
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <Carousel>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={heroimage}
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img className="d-block w-100" src={hp} alt="Second slide" />
                  <Carousel.Caption>
                    <div className="text-center"></div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={heroimage}
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas">
        <Container>
          <Row>
            <Col className=" tanda text-center">
              <h1>Course Online</h1>
              <p>
                Temukan bakat coding, design, dan kreativitasmu di Specter
                Academy. <br />
                Bergabunglah sekarang untuk karir yang sukses!
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((berkelas) => {
              return (
                <Col
                  className=" kecil text-center margin-auto  m-auto"
                  md={4}
                  key={berkelas.id}
                >
                  <img src={berkelas.image} alt="gambar" />
                  <p>{berkelas.title}</p>
                  <div className="d-flex justify-content-evenly">
                    <p>{berkelas.price}</p>
                    <button className="rounded-2 btn btn-danger  ">
                      {berkelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="luasa">
            <Row>
              <Col className=" jarak text-center">
                <button
                  onClick={() => halamanganti("/Kelas")}
                  className="btn btn-success rounded-2"
                >
                  Selengkapnya{" "}
                  <i className="fa-solid fa-chevron-right ms-3"></i>
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* {FAQ } */}
     <Testi/>
      <Faq />
     
      {/* {END AFQ} */}
    </div>
  );
};
export default Homepages;

// <Carousel>
//       <Carousel.Item interval={500}>
//         <img className="d-block w-100" src={heroimage} alt="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item interval={500}>
//         <img className="d-block w-100" src={heroimage} alt="Second slide" />
//         <Carousel.Caption>
//           <div className="text-center">
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block w-100" src={heroimage} alt="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
