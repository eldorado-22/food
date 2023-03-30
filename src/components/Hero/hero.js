import React from 'react';
import './hero.scss';
import {AiOutlineSearch} from "react-icons/ai"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <h1 className="hero--overview">Overview</h1>
                    <h3 className="hero--hello">Hello Saad! Welcome Back</h3>
                    <div className="hero--search">
                        <AiOutlineSearch className="hero--search__icon"/>
                        <h1 className="hero--search__title">Search</h1>
                    </div>
                    <div className="hero--ad">

                        <div className="hero--ad__one">
                            <img src="src/components/Hero/img/image 18.png" alt=""/>
                        </div>

                        <div className="hero--ad__two">
                            <h1 className="hero--ad__two--hot">Hot & Special</h1>
                            <h1 className="hero--ad__two--burger">Burgers</h1>
                            <h1 className="hero--ad__two--sale">50% Off Now</h1>
                            <button className="hero--ad__two--btn">Order Now</button>
                        </div>

                    </div>
                </div>

                <div className="slider">
                    <div className="slider--title">
                        <h1 className="slider--title__menu">Menu categories</h1>
                    </div>

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
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
                );
                }
            </div>
        </div>
    );
};

export default Hero;