export interface IUser {
    _id: string;
    name?: string;
    phone?: string;
    identification?: string;
    email: string;
    password: string;
    status?: number;
    token?: string;
}
