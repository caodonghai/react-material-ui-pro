import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Autoplay
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
// import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.less';
// import 'swiper/components/navigation/navigation.less';
// import 'swiper/components/pagination/pagination.less';
// import 'swiper/components/scrollbar/scrollbar.less';

SwiperCore.use([Virtual, Autoplay]);

function MySwiper({
  contents,
  contentsFun
}) {
  return (
    <Swiper
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        contents?.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {contentsFun(slideContent)}
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

MySwiper.propTypes = {
  contents: PropTypes.array,
  contentsFun: PropTypes.func,
};

MySwiper.defaultProps = {
  contents: [],
  contentsFun: (item) => item,
};

export default MySwiper;
