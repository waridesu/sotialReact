import axios from "axios";
import {usersType} from "../redux/usersReducer";
import {profileType} from "../redux/profileReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "0562a8de-3256-4066-97e8-7bcda0eb8d22",
    },
});

export enum ResultCodesEnum {
    success,
    error,
}

//export enum ResultCodesEnum{captchaIsRequired=10}

type authMeType = {
    data: {
        id: number
        email: string
        login: string
    },
    resultCode: ResultCodesEnum//|ResultCodesEnum,
    messages: Array<string>
}
type logMeType = {
    data: {
        userId: number
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
type getUsersType = {
    items: Array<usersType>
    totalCount: number
    error: string
}
export type responseType = {
    resultCode:number
    message:Array<string>
    data: {}
}
export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    authMe() {
        return instance.get<authMeType>(`auth/me`).then(res => res.data);
    },
    logMe(email: string, password: string, rememberMe = false) {
        return instance.post<logMeType>(`auth/login`, {email, password, rememberMe}).then(res => res.data);
    },
    unLogMe() {
        return instance.delete(`auth/login`);
    },
    profile(id: number) {
        return instance.get<profileType>(`profile/${id}`).then(res=>res.data);
    },
    follow(id: number) {
        return instance.post<responseType>(`follow/${id}`).then(res => res.data);
    },
    unfollow(id: number) {
        return instance.delete<responseType>(`follow/${id}`).then(res => res.data);
    },
    getStatus(id: number) {
        return instance.get<string>(`profile/status/${id}`).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put<responseType>(`profile/status/`, {status: status}).then(res => res.data);
    },
};
