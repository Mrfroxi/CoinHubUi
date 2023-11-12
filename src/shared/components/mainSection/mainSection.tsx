import React from 'react';
import GradientText from '../gradientText/gredientText';

const MainSection = () => {
  return (
    <section className='text-white w-full h-[100vh]'>
      <div className='text-center container flex flex-col text-white pt-[34vh] xl:text-left'>
        <div className='w-[60%] leading-10'>
          <p className='representText text-7xl font-medium leading-relaxed'>
            Digital revolution: <GradientText text='Cryptocurrency'/> unlocks financial freedom.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainSection;