import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';

const banner = [
  { src: '/Banner-1.jpg' },
  { src: '/Banner-2.jpg' },
  { src: '/Banner-3.jpg' },
];

const HeaderSlide = () => {
  return (
    <Carousel autoplay>
      {banner.map((img, idx) => (
        <div key={idx}>
          <Image
            src={img?.src}
            alt={`Banner ${idx}`}
            width={1400}
            height={200}
            layout='responsive'
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HeaderSlide;
