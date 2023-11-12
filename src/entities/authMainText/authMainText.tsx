import React from 'react';

type AuthMainTextParam ={
  signUpBool:boolean
}

const AuthMainText = ({ signUpBool }:AuthMainTextParam) => {
  return (
    <div className='text-center text-3xl text-authblack font-semibold'>
      <p>
        {
          signUpBool ? 
          'Sing Up' :
          'Sing In'
        } with Email

      </p>
    </div>
  );
}

export default AuthMainText;