import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "600px", height: "300px" }} // optional
      >
        <SwiperSlide>
          <h2>Slide 1</h2>
        </SwiperSlide>

        <SwiperSlide>
          <h2>Slide 2</h2>
        </SwiperSlide>

        <SwiperSlide>
          <h2>Slide 3</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
