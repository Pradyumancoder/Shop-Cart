import React, { useContext } from 'react'
import {  MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import Slider from 'react-slick'
import { ContextApi } from '../Context/Context'
import { SingleProduct } from './SingleProduct'


import "../App.css"
import useProductNavigate from '../CustomHooks/useProductNavigate'


export const Deals = ({name,heading,all}) => {

const {state}=useContext(ContextApi)

const {handleClick}=useProductNavigate()

let newdata=state.data.filter((el)=>el.category==name)

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
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 4,
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
              dots:false
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false
            },
          },
        ],
    }
  return (
    <div>
        <div className='flex justify-between mb-5 mt-10 items-center'>
          <h4 className='font-semibold text-xl mx-2'>{heading}</h4>
          <button onClick={()=>handleClick(name)}  className='mr-3 bg-blue-600 text-white px-3 py-2 rounded-xl hover:bg-red-600 transition-all duration-300 hover:scale-110'>{all}</button>
        </div>
        <Slider {...setting}>
         {newdata[0] && newdata.map((el,i)=><div key={i} className="cursor-pointer" >
          <SingleProduct el={el}/>
          </div>)}
        </Slider>
    </div>
  )
}
