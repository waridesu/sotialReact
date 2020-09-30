import React, {useEffect} from "react";
import "./App.css";
import MyProfile from "./components/Profile/MyProfile";
import DialogContainer from "./components/Dialogs/Dialog_Container";
import {BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import AuthDirect from "./components/Preloader/AuthDirect";
import Header from "./components/Header/Header";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer"
import Preloader from "./components/Preloader/Preloader";

const App = props => {
  useEffect(() => {
    props.initializeApp()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return  !props.initialized ? <Preloader />
      :<BrowserRouter>
        <div className="app-conteiner">
          <Header/>
          <div className="page_conteiner">
            <MyProfile/>
            <div className="content_conteiner">
              <Route path="/profile/:id?" render={() => <ProfileContainer/>}/>
              <Route path="/dialogs" render={() => <DialogContainer/>}/>
              <Route path="/users" render={() => <UsersContainer/>}/>
              <Route path="/login" render={() => <AuthDirect/>}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
};
const  mapStateToProps = state =>({
  initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
