'use client'

import AuthFormPage from '@/src/pages/authFormPage/authFormPage';
import GradientText from '@/src/shared/components/gradientText/gredientText';
import MainLogoBlack from '@/src/shared/svgs/mainLogo/mainLogoBlack';
import Link from 'next/link';


const authPage = () => {
  
    return (

      <>
       <header className='fixed left-0 top-0 flex flex-row  justify-between w-full pt-4 px-10'>
                <MainLogoBlack/>

                <nav className='mr-4 flex flex-row cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-black w-32 h-9 rounded-3xl'>
                    <Link href={'/'} className='flex flex-row item-center justify-center mx-auto items-center text-'>
                        <p className='singUnText text-lg font-bold'>
                            <GradientText text='Main' size='2xl'/>
                        </p>
                    </Link>
                </nav>
          </header>
          
          <AuthFormPage/>
      </>
    )
}

export default authPage