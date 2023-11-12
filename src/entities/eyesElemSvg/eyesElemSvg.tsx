import React from 'react'
import EyeSvgCrossSvg from '@/src/shared/svgs/eyeCrossSvg/eyeCrossSvg'
import EyeSvg from '@/src/shared/svgs/eyeSvg/eyeSvg'


type EyesElemSvgProps = {
  handleChangeEyeBool: () => void;
  eyeBool: boolean;
};

const EyesElemSvg = ({handleChangeEyeBool,eyeBool}:EyesElemSvgProps) => {
  return (
    <span onClick={handleChangeEyeBool} className="absolute inset-y-0 pt-0 right-5 pl-3 flex items-center cursor-pointer">
        {
            eyeBool ?
            <EyeSvg/>:
            <EyeSvgCrossSvg/>

        }
    </span>
  )
}

export default EyesElemSvg