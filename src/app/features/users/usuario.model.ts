import { Role } from "./role.model";

export interface Usuario{
    username:string;
    password:string;
    email:string;
    role:Role;
    user_logado:boolean;
}