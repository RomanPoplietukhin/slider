import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react'

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
