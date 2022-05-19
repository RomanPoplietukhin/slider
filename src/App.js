import logo from './logo.svg';
import './App.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Pagination} from "swiper";
import s from './App.css'

function App() {
    return (
        <div className="App">

            {/*<Swiper*/}
            {/*    // grabCursor={true}*/}
            {/*    centeredSlides={true}*/}
            {/*    slidesPerView={3}*/}
            {/*    spaceBetween={50}*/}
            {/*    // effect={"coverflow"}*/}
            {/*    // pagination={true}*/}
            {/*    // className={s.swiperSlide}*/}
            {/*>*/}
            {/*    <SwiperSlide>1</SwiperSlide>*/}
            {/*    <SwiperSlide>2</SwiperSlide>*/}
            {/*    <SwiperSlide>3</SwiperSlide>*/}
            {/*    <SwiperSlide>4</SwiperSlide>*/}
            {/*    <SwiperSlide>5</SwiperSlide>*/}
            {/*    <SwiperSlide>6</SwiperSlide>*/}
            {/*    <SwiperSlide>7</SwiperSlide>*/}
            {/*    <SwiperSlide>8</SwiperSlide>*/}
            {/*    <SwiperSlide>9</SwiperSlide>*/}
            {/*</Swiper>*/}
            );
            }

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
            >


            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>

            <SwiperSlide>3</SwiperSlide>

            <SwiperSlide>4</SwiperSlide>

            <SwiperSlide>5</SwiperSlide>

            <SwiperSlide>6</SwiperSlide>

        </Swiper>


</div>
)

}

export default App;
