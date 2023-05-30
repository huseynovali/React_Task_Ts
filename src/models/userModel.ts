export interface User {
    id: number,
    username: string,
    email: string,
    address: Address
    company: Company
}


export interface Address {
    street: string,
    city: string
}
export interface Company {
    name: string
}


export interface UserState {
    userList: User[] | [];
    loading: boolean,
    err: string | undefined
}
export interface UserStateReducer {
    userReducer: {
        userList: User[] | [];
        loading: boolean,
        err: string | undefined
    }
}