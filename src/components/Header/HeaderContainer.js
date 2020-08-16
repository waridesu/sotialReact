import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthData } from '../../redux/authReducer';
import { usersApi } from '../../Api/Api';


class HeaderApi extends React.Component {
    componentDidMount() {
        usersApi.authMe()
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