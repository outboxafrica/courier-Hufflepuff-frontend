import Image from 'next/image';
import Slider from 'react-slick'
import style  from '../styles/Slide.module.css';
function CarSlider({ data }) {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
    return (
        <div className={style.container} >
            <h2 style={{fontFamily:"Times New Roman"}}>Latest Arrivals</h2>
        <Slider {...settings}>
          {data.slice(0, 5).map(car => (
              <div key={car.id} >
             
              < Image  src={car.image} alt={car.desc} height="600" width="600"/>
              <h6>{car.product}</h6>
            </div>
          ))}
          
        </Slider>
      </div>
    );
        
    
}

export default CarSlider
