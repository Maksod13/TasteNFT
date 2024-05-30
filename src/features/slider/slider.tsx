import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-coverflow';
import "./slider.scss"



export const MySlider = () => {
    return (
        <div >
            <Swiper className="my-slider"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 100,
                    depth: 100,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}

            >
                <SwiperSlide className='my-slider__slide '>
                    <div className="my-slider__image">
                        <img src="/images/slider1.png" alt="art" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-slider__slide '>
                    <div className="my-slider__image">
                        <img src="/images/slider2.png" alt="art" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-slider__slide '>
                    <div className="my-slider__image">
                        <img src="/images/slider3.png" alt="art" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-slider__slide '>
                    <div className="my-slider__image">
                        <img src="/images/slider4.webp" alt="art" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-slider__slide '>
                    <div className="my-slider__image">
                        <img src="/images/slider1.png" alt="art" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
}
