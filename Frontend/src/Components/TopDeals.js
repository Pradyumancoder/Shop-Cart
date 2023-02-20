import React from 'react'
import { useContext } from 'react';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';
import { ContextApi } from '../Context/Context';

export const TopDeals = ({val,show}) => {

   
const {state}=useContext(ContextApi)



    
    const NextArrow = ({ onClick }) => {
        return (
          <div className="nextarrow" onClick={onClick}>
            <MdOutlineArrowForwardIos size={20} />
          </div>
        );
      };

      const PrevArrow = ({ onClick }) => {
        return (
          <div className="prearrow" onClick={onClick}>
            <MdOutlineArrowBackIosNew size={20} />
          </div>
        );
      };

    const setting={
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 3000,
        slidesToShow: show,
        slidesToScroll: 2,
        pauseOnHover: true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
              nextArrow:false,
              prevArrow:false
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow:false,
              prevArrow:false
            },
          },
        ],
    }

  return (
    <div>
        <Slider {...setting}>
            {val.map((el,i)=><img className='  w-full mb-5 mt-5' key={i} src={el} />)}
        </Slider>
    </div>
  )
}
