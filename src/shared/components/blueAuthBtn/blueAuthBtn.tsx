import React from 'react';

type BlueAuthBtn ={
  signUpBool:boolean,
  handlerSendAuth: () => void,
  isValidPassword : boolean
  isValidEmail : boolean
}

const BlueAuthBtn = ({ signUpBool, handlerSendAuth, isValidPassword, isValidEmail }: BlueAuthBtn) => {
  const isButtonDisabled = isValidPassword && isValidEmail;
  const buttonColor = isButtonDisabled ? 'bg-blue-500 ' : 'bg-gray-500';

 
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={handlerSendAuth}
        className={`${buttonColor} text-white font-bold py-4 min-w-min border rounded-lg w-full`}
        disabled={!isButtonDisabled}
      >
        {signUpBool ? 'Create Account' : 'Sign In'}
      </button>
    </div>
  );
};

export default BlueAuthBtn;