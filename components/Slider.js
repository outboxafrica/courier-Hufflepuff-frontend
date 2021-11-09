import Image from 'next/image';
import Slider from 'react-slick'
import style  from '../styles/Slide.module.css';
function CarSlider({ data }) {
  console.log(data);
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
          {data.slice(0, 8).map(item => (
              <div key={item.id} >
             
              <Image  src={item.image} alt={item.catergory} height="200" width="200"/>
              <h6>{item.category}</h6>
            </div>
          ))}
          
        </Slider>
      </div>
    );
        
    
}

export default CarSlider
