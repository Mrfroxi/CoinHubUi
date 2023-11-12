export type AuthInput = {
    isEmpty: boolean;
    minLengthError: boolean;
    emailError: boolean;
    inputValid: boolean;
    resetError: () => void;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    reset: () => void;
    isDirty: boolean;
}


export type ErrorInputType = {
    isEmpty: boolean;
    minLengthError: boolean;
    emailError: boolean;
    inputValid: boolean;
    resetError: () => void;
    reset: () => void;
    isDirty: boolean;
}

export type AuthFormDto = {
    email : string ,
    password : string
}