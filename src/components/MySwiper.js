import React from 'react';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Pagination
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);
function MySwiper({
  imgDataKey,
}) {
  const requireContextImgs = () => {
    // directory:表示检索的目录
    // useSubdirectories：表示是否检索子文件夹
    // regExp:匹配文件的正则表达式,一般是文件名
    // 例如 require.context("@/views/components",false,/.vue$/)
    const reqImgs = require.context('../images/timeLineImg', true, /\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)$/);
    const allImgPaths = reqImgs.keys() || [];
    const currentImgPaths = allImgPaths.filter((item) => item.includes(imgDataKey));
    // console.log({ currentImgPaths, allImgPaths, imgDataKey });
    return currentImgPaths?.map((imgPath, index) => {
      const image = reqImgs(imgPath);
      return (
        <SwiperSlide key={imgPath} virtualIndex={index}>
          <img src={image.default} width="100%" height="auto" alt={image.default} />
        </SwiperSlide>
      );
    });
  };

  return (
    <Swiper
      slidesPerView={1}
      // pagination={{ clickable: false }}
      loop
      effect="coverflow"
      autoplay={{
        delay: 3000
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {
        requireContextImgs()
      }
    </Swiper>
  );
}

MySwiper.propTypes = {
  imgDataKey: PropTypes.string,
};

MySwiper.defaultProps = {
  imgDataKey: '',
};

export default MySwiper;
