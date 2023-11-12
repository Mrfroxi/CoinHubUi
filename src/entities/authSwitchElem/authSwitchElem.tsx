import React  from 'react';

type AuthSwitchElemParam = {
  signUpBool:boolean,
  handlerSwitchSing: ()=> void
}

const AuthSwitchElem = ({ signUpBool, handlerSwitchSing } :AuthSwitchElemParam) => {

  return (
    <div className='text-center text-authblack text-sm'>
      <p className='text-blue'>
      {signUpBool ? 'Do not have an account? ' : 'Already have an account? '}
       
        <span className="text-blue-500 cursor-pointer" onClick={handlerSwitchSing}>
          {signUpBool ? 'Sing Up' : 'Sing In'}
        </span>
      </p>
    </div>
  );
}

export default AuthSwitchElem;