import React from 'react';
import InfiniteData from '../component/homeComp/InfiniteData';
import Twite from '../component/twite/Twite';
import ShortDesc from '../component/shortdescription/ShortDesc';
import Advertising from '../component/companyadverties/Advertising';
import VirutalId from '../setup/virutalcard/VirutalId';

const Home = () => {
  return (
    <div className='flex justify-center relative ' >
    
      <div className='flex justify-end left-[9rem]  fixed rounded-xl  w-1/5  bg-white max-sm:hidden max-md:hidden ' >
        <ShortDesc/>
      </div>

      <div className='flex-row justify-end right-[9rem] fixed  w-1/5 h-auto max-sm:hidden max-md:hidden' >
        <VirutalId/>
        <Advertising/>
      </div>

      <div className='flex-row justify-center  ' >
      <Twite  />
      <InfiniteData />
      </div>

    

    </div>
  )
};

export default Home;
