'use client'
import React,{useState} from 'react'
import AuthPasswordInput from '@/src/features/authPasswordInput/authPasswordInput';
import AuthEmailInput from '@/src/features/authEmailInput/authEmailInput';
import { AuthInput } from '@/src/shared/types/AuthInput';

type AuthParams = {
    email: AuthInput;
    password: AuthInput;
  };

const AuthForm = ({email,password}:AuthParams) => {

    const [eyeBool,seteyeBool] = useState(true);

    const handleChangeEyeBool = () => {
        seteyeBool(!eyeBool);
    }

    return (
    
            <form className="pt-6 pb-3 bg-white ">

            
                <AuthPasswordInput handleChangeEyeBool={handleChangeEyeBool} eyeBool={eyeBool}  elemType={password}/>

                <AuthEmailInput elemType={email}/>
        
            
            </form>
    )
}

export default AuthForm