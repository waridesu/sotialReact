import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0562a8de-3256-4066-97e8-7bcda0eb8d22"
    }
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    authMe() {
        return instance.get(`auth/me`)
    },
    follow(id){
        return instance.post(`follow/${id}`)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
    }
}
