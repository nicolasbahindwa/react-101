
export type UserAuth = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    isAdmin: boolean;
}


export type UserContextType = {
    user: UserAuth | null;
    setUser: React.Dispatch<React.SetStateAction<UserAuth> | null>
}