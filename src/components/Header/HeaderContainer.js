import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setAuthData } from '../../redux/authReducer';


class HeaderApi extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`,
            { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data)
                }
            });
    }
    render() {
        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


const HeaderContainer = connect(mapStateToProps, { setAuthData })(HeaderApi);

export default HeaderContainer;