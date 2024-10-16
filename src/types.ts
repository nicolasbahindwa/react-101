type Info = {
    id: number;
    username: string;
    email: string;
}

type AdminfoList = Info & {
    role: string;
    lastLogin: Date;
}


export {type Info, type AdminfoList}