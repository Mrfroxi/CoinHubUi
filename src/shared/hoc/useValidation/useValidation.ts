import { useEffect, useState } from "react";

export const useValidation = (value:string ,validations:any) => {
    const [isEmpty , setEmpty] = useState(true);
    const [ minLengthError,setMinLengthError ] = useState(false);
	const [ emailError,setEmailError ] = useState(false);
	const[ inputValid ,setInputValid ] = useState(false);

    const resetError =() =>{
		setEmpty(true);
		setMinLengthError(true);
		setEmailError(true);
		setInputValid(false);
	}

	useEffect ( () => { 

		for (let validation in validations){
			switch (validation){
				case 'minLength':
					value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
					break;
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true);
					break;
				case 'isEmail':
					const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
					re.test(String(value).toLocaleLowerCase()) ? setEmailError(false) :setEmailError(true);
					break;
			}
		}
	},[ value ]);
	
	useEffect(() => {
		if(isEmpty   || emailError || minLengthError){
            setInputValid(false);
        }else{
            setInputValid(true);
        }
        
	},[ isEmpty  || minLengthError || emailError]);

	return {
		isEmpty,
		minLengthError,
		emailError,
		inputValid,
		resetError
	};
};