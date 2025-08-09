import { Role } from "../interfaces/enums.interface.js";
interface RegisterUserInput {
    email: string;
    name: string;
    password: string;
    role: Role;
}
interface LoginUserInput {
    email: string;
    password: string;
}
export declare const registerUser: (input: RegisterUserInput) => Promise<{
    token: string;
    message: string;
}>;
export declare const loginUser: (input: LoginUserInput) => Promise<{
    token: string;
    message: string;
}>;
export {};
