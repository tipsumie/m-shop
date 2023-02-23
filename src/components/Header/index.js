import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <Image
        src='/Welcome-Header.jpg'
        alt='Header Banner'
        width={1400}
        height={200}
        layout='responsive'
      />
    </div>
  );
};

export default Header;
