import MainLogo from '@/src/shared/svgs/mainLogo/mainLogo'
import React from 'react'
import SelectionAuntificationBlock from '../selectionAuntificationBlock/selectionAuntificationBlock'


const MainHeader = () => {
  return (
    <header className='absolute z-30 w-full px-16 py-4 flex items-center'>
        <div className='container mx-auto flex flex-row justify-between items-center '>
            <MainLogo />
             
            
            <SelectionAuntificationBlock />
        </div>
    </header>
  )
}

export default MainHeader