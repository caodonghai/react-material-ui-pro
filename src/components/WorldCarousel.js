import React, { useEffect, useRef, cloneElement } from 'react';
import { experimentalStyled } from '@material-ui/core';
import moment from 'moment';
import PropTypes from 'prop-types';

moment.locale('zh-cn');

const MainLayoutContent = experimentalStyled('div')({
  margin: '0 5px',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

function WorldCarousel({
  dataList,
  liHeight,
  speed,
}) {
  const boxContentRef = useRef();
  const ulRef = useRef();
  const timerRef = useRef();

  const marquee = () => {
    const ulListLen = ulRef.current.children.length;
    if (ulRef.current.offsetTop <= -(liHeight * (ulListLen - 1))) { // 判断复制的信息是否到达box的最左边
      ulRef.current.style.top = 0;
      ulRef.current.style.transition = 'none';
      marquee();
    } else {
      ulRef.current.style.transition = 'all .5s ease-in-out';
      ulRef.current.style.top = `${ulRef.current.offsetTop - liHeight}px`;
    }
  };

  const setEffectFunction = () => {
    timerRef.current = setInterval(marquee, speed * 1000);
  };

  const removeEffectFunction = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    timerRef.current = setInterval(marquee, speed * 1000); // 设置定时器
    boxContentRef.current.onmouseenter = removeEffectFunction;
    boxContentRef.current.onmouseleave = setEffectFunction;
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const content = () => {
    const liList = dataList?.map((item) => (
      <li
        key={item.data}
        style={{
          width: '100%',
          height: liHeight,
          lineHeight: `${liHeight}px`,
          textAlign: 'center',
          fontSize: '18px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        <span>{ item.content }</span>
        &nbsp;&nbsp;
        <span>{ moment(item.data).fromNow() }</span>
      </li>
    ));
    return [...liList, cloneElement(liList[0], { key: 'firstDataCopy' })];
  };

  return (
    <MainLayoutContent>
      <div
        ref={boxContentRef}
        style={{
          overflow: 'hidden',
          height: `${liHeight}px`,
          width: '100%',
          border: 0,
          position: 'relative'
        }}
      >
        <ul
          ref={ulRef}
          style={{
            width: '100%',
            listStyleType: 'disc',
            marginBlock: 0,
            marginInline: 0,
            paddingInline: 0,
            position: 'absolute',
            top: 0
          }}
        >
          { content() }
        </ul>
      </div>
    </MainLayoutContent>
  );
}

WorldCarousel.propTypes = {
  dataList: PropTypes.array, // 数据列表
  liHeight: PropTypes.number, // 移动速度，值越大速度越慢
  speed: PropTypes.number, // li列表的高度
};

WorldCarousel.defaultProps = {
  dataList: [],
  liHeight: 60,
  speed: 3,
};

export default WorldCarousel;
