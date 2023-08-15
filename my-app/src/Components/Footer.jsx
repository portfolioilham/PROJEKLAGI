import { Container, Row, Col } from 'react-bootstrap';

const Footerr = () => {
  return (
    <div className='wanraao w-100'>
      <Container>
        <Row>
          <Col lg={6} xl={7}>
            <h6>Unlock Your Creative Potential - Bergabunglah dengan Spectre Academy dan Tingkatkan Kemampuan Anda ke Tingkat yang Lebih Tinggi.</h6>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores labore odit error vero recusandae et inventore, ea hic, omnis voluptatum cum maxime nisi temporibus? Molestiae velit doloribus eaque dolorem.</p>
            <br />
            <p>Kontak: 085939429909</p>
          </Col>
          <Col className='jarakaus'
           lg={6} xl={5}>
            <div className=' list-terurut d-flex flex-column flex-lg-row'>
              <ul className='list-unstyled'>
                <li>Home</li>
                <li>Kelas</li>
                <li>Testimonial</li>
                <li>Faq</li>
                <li>Syarat dan Ketentuan</li>
              </ul>
              <div className=' hadeuha d-flex'>
                <input type='text' placeholder='Berlangganan...' />
                <button className='latifah m-2 m-lg-2 rounded-5'>Kirim</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='gulgana d-flex justify-content-center'>
          <Col lg={12}>
            <h6 className=' copright text-center'>WEBSITE ini dilindungi oleh hak cipta Spectre Academy, 31 Juli 2023 <br /> <br /> WEBSITE INI DiMILIKI OLEH ILHAM</h6>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Footerr;
