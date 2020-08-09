import React from 'react';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer'
import * as axios from 'axios'
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import { withRouter } from 'react-router-dom';

class ProfileApi extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id=9788;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` +id)
        .then (response =>{
            this.props.setUserProfile(response.data);
        }
            )
    }
    render() {
    return <>{!this.props.profile ? <Preloader/> : 
        <Profile {...this.props} profile={this.props.profile}/>}</>
    }
}


let mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile
    }
}

let ProfileUrl= withRouter(ProfileApi)

const ProfileContainer = connect (mapStateToProps, {setUserProfile})(ProfileUrl)
export default ProfileContainer;