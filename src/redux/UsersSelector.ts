import {AppStateType} from "./redux_store";

export const  getUsers =(state: AppStateType)=> state.usersPage.users

export const  getPageSize =(state: AppStateType)=> state.usersPage.pageSize

export const  getTotalUsersCount =(state: AppStateType)=> state.usersPage.totalUsersCount

export const  getCurrentPage =(state: AppStateType)=> state.usersPage.currentPage