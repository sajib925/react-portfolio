import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import {EffectCards} from 'swiper/modules';
import {certificate1, certificate2, certificate3, react} from "../../assets";
import {skillsData} from "./skillsData";

const Testimonial = () => {
    return (
        <div className="flex items-start justify-center flex-wrap lg:flex-nowrap gap-6">
            <div className="flex items-center justify-center flex-col gap-6">
                <h1 className="text-2xl text-darkText dark:text-lightText font-semibold">Webflow Certificate</h1>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-[300px] h-[400px] md:w-[400px] md:h-[600px]"
                >
                    <SwiperSlide>
                        <img src={certificate2} alt="certificate"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={certificate1} alt="certificate"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={certificate3} alt="certificate"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex items-center justify-center flex-col gap-6">
                <h1 className="text-2xl text-darkText dark:text-lightText font-semibold">All Skills</h1>
                <div className="flex items-center justify-center flex-wrap gap-6">
                    {
                        skillsData.map(({id, name, img}) => (
                            <div className="skillsCard flex-col self-end w-[150px] h-[150px]" key={id}>
                                <div className="w-[80px] h-[80px]">
                                    <img src={img} alt="skill icon" className="w-full h-full"/>
                                </div>
                                <h5>{name}</h5>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Testimonial