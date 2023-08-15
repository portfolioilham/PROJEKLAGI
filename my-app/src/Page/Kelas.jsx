import { Col, Container, Row } from "react-bootstrap"
import { kelasTerbaru,  } from "../data/index";
import Faq  from '../Page/Faq'
const Kelas = () => {
    return (
      <div className="kelasx ">
        <Container>
          <Row>
            <Col className="perjelasan text-center "> 
            <h2>SEMUA KELAS</h2>
            </Col>
          </Row>
          <Row className="tiriki">
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
          
       
          
        </Container>
      <Faq/>
    
      </div>
    )
  }
  export default Kelas