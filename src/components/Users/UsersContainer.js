import { connect } from 'react-redux';
import { followAC,unfollowAC, setUsersAC,setCurrentPageAC,setTotalUsersCountAC } from '../../redux/usersReducer';
import UsersClass from './UsersClass';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispathToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (nuberPage) => {
            dispatch(setCurrentPageAC(nuberPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(UsersClass)
export default UsersContainer;