import "./userSlider.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';
import { User } from "../Users/users";
import 'swiper/css';
import 'swiper/css/scrollbar';


export const UserSlider = () => {

    return (
        <div className="creators-slider">
            <Swiper
                modules={[Scrollbar, A11y]}
                spaceBetween={16}
                slidesPerView={'auto'}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <User
                        imgSrc="../../../../images/userSwiper (1).png"
                        name="User Name"
                        user="@username"
                        text="24 sales on 32ETH"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

