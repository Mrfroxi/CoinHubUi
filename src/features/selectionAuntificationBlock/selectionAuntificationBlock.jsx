import AvatarSvg from '@/src/shared/svgs/avatarSvg/avatarSvg';
import Link from 'next/link';
import React from 'react';

const SelectionAuntificationBlock = () => {
  return (
    <div className='flex flex-row text-white text-lg'>
      <div className='mr-4 flex flex-row cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-linkHoverMainBg w-32 h-9 rounded-3xl'>
        <Link href={'/auth'} className='flex flex-row item-center justify-center mx-auto items-center'>
          <AvatarSvg />
          <p className='singInText'>Sign In</p>
        </Link>
      </div>

      <div className='flex flex-row text-white text-lg'>
      <div className='mr-4 flex flex-row cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-linkHoverMainBg w-32 h-9 rounded-3xl'>
        <Link href={'/auth'} className='flex flex-row item-center justify-center mx-auto items-center'>
            <p className='singUnText'>
                Sign Up
            </p>
        </Link>
      </div>
      </div>

    </div>

  );
};

export default SelectionAuntificationBlock;