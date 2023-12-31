import { useState } from "react";
import { useValidation } from "../useValidation/useValidation";


export const useInput = (initialValue:string ,validations:any) =>{

	const [ value ,setValue ] = useState(initialValue);

	const [ isDirty ,setDirty ] = useState(false);

	const valid = useValidation(value,validations);
 
	const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
		setValue(e.target.value);
	};

	const reset = () =>{
		setValue('');
		setDirty(false);
		valid.resetError();

	};

	const onBlur= () =>{
		setDirty(true);
	};
	return{
		value,
		onChange,
		onBlur,
		reset,
		isDirty,
		...valid
	};
};