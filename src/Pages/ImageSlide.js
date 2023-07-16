import Carousel from 'react-bootstrap/Carousel';

const ImageSlide = () =>{

    return (
        <Carousel fade>
          <Carousel.Item className='carousel-items'>
            <img
              className="d-block"
              src="1231.jpg"
              alt="First slide"
            />
           
          </Carousel.Item>
          <Carousel.Item className='carousel-items'>
            <img
              className="d-block"
              src="123123.jpg"
              alt="Second slide"
            />
    
         
          </Carousel.Item>
          <Carousel.Item className='carousel-items'>
            <img
              className="d-block"
              src="bg.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}

export default ImageSlide;
