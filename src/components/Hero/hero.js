import React from 'react';
import './hero.scss';
import {BsSearch} from "react-icons/bs"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import img from "../../assets/img/image 18.png"
import {BiDish} from "react-icons/bi"
import {GiCakeSlice} from "react-icons/gi"
import {GiFullPizza} from "react-icons/gi"
import {BsCupStraw} from "react-icons/bs"
import {BsCupHotFill} from "react-icons/bs"

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <h1 className="hero--overview">Overview</h1>
                    <h3 className="hero--hello">Hello Saad! Welcome Back</h3>
                    <div className="hero--search">
                        <BsSearch className="hero--search__icon"/>
                        <input className="hero--search__input" type="text" placeholder="Search"/>
                    </div>

                    <div className="hero--ad">

                        <div className="hero--ad__one">
                            <img src={img} alt=""/>
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
                        slidesPerView={4.5}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 4.5,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4.5,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Pagination]}
                        className="slider--mySwiper">

                        <SwiperSlide className="slider--mySwiper__cardFood">
                            <a href="#national">
                                <BiDish className="icon"/>
                                <h3 className="slider--mySwiper__card--title">National foods</h3>
                            </a>
                        </SwiperSlide>

                        <a href="#desserts">
                            <SwiperSlide className="slider--mySwiper__card">
                                <GiCakeSlice className="icon"/>
                                <h3 className="slider--mySwiper__card--title">Desserts</h3>
                            </SwiperSlide>
                        </a>

                        <SwiperSlide className="slider--mySwiper__card">
                            <GiFullPizza className="icon"/>
                            <h3 className="slider--mySwiper__card--title">Pizza</h3>
                        </SwiperSlide>

                        <SwiperSlide className="slider--mySwiper__card">
                            <BsCupStraw className="icon"/>
                            <h3 className="slider--mySwiper__card--title">Cold drink</h3>
                        </SwiperSlide>

                        <SwiperSlide className="slider--mySwiper__card">
                            <BsCupHotFill className="icon"/>
                            <h3 className="slider--mySwiper__card--title">Hot drink</h3>
                        </SwiperSlide>

                        <SwiperSlide className="slider--mySwiper__cardFood">
                            <BiDish className="icon"/>
                            <h3 className="slider--mySwiper__card--title">National foods</h3>
                        </SwiperSlide>

                        <SwiperSlide className="slider--mySwiper__card">
                            <GiCakeSlice className="icon"/>
                            <h3 className="slider--mySwiper__card--title">Desserts</h3>
                        </SwiperSlide>

                        <SwiperSlide className="slider--mySwiper__card">
                            <GiFullPizza className="icon"/>
                            <h3 className="slider--mySwiper__card--title">Pizza</h3>
                        </SwiperSlide>

                        <SwiperSlide className="slider--mySwiper__card">
                            <BsCupStraw className="icon"/>
                            <h3 className="slider--mySwiper__card--title">Cold drink</h3>
                        </SwiperSlide>

                        <SwiperSlide className="slider--mySwiper__card">
                            <BsCupHotFill className="icon"/>
                            <h3 className="slider--mySwiper__card--title">Hot drink</h3>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Hero;