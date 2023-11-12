import MainHeader from '@/src/features/mainHeader/mainHeader'
import StarsCanvas from '@/src/features/starBackground/starBackgrround'
import MainSection from '@/src/shared/components/mainSection/mainSection'
import React from 'react'

const MainPage = () => {
  return (

    <main className='bg-mainBackGround'>

        <MainHeader />

        <MainSection />

        <StarsCanvas />
        
    </main>
  
  )
}

export default MainPage