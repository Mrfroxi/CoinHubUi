import axios from "@/core/axios";
import { destroyCookie } from "nookies";

type loginParam = {
        email:string,
        password:string,
}

interface loginResponseDTO {
    token:string
}

interface User {
    id:number,
    email:string,
}

export const login = async (values:loginParam): Promise<loginResponseDTO> =>{
        const {data} = await axios.post('/auth/login' , values)

        return data;
}

export const registration = async (values:loginParam): Promise<loginResponseDTO> =>{
    const {data} = await axios.post('/auth/register' , values)
 
    return data;
}

export const getMe = async (): Promise<User> =>{
    const {data} = await axios.get('/users/me')

    return data;
}

export const logout = () => {
    destroyCookie(null , "_token" , {path:'/'});
}


