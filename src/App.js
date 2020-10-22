import React, {useEffect} from "react";
import "./App.css";
import Resume from "./components/Profile/Resume";
import DialogContainer from "./components/Dialogs/Dialog_Container";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import AuthDirect from "./components/Preloader/AuthDirect";
import Header from "./components/Header/Header";
import {connect, Provider} from "react-redux";
import { compose } from "redux";
import {initializeApp} from "./redux/appReducer"
import Preloader from "./components/Preloader/Preloader";
import store from "./redux/redux_store";
import Paginator from "./components/Users/Paginator";
import {getCurrentPage, getPageSize, getTotalUsersCount} from "./redux/UsersSelector";
import {requestUser} from "./redux/usersReducer";


const App = props => {
  useEffect(() => {
    props.initializeApp()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return  !props.initialized ? <Preloader />
      :<div className="app-conteiner">
          <Header/>
          <div className="page_conteiner">
            <div className="content_conteiner">
              <Route exact path="/" render={()=><Resume/>}/>
              <Route path="/profile/:id?" render={() => <ProfileContainer/>}/>
              <Route path="/dialogs" render={() => <DialogContainer/>}/>
              <Route path="/users" render={() => <UsersContainer/>}/>
              <Route path="/login" render={() => <AuthDirect/>}/>
            </div>
          </div>
          {props.isUsers && <Paginator currentPage={props.currentPage} requestUser={props.requestUser} totalItemCount={props.totalUsersCount} pageSize={props.pageSize}/>}

      </div>

};
const  mapStateToProps = state =>({
    initialized: state.app.initialized,
    isUsers: state.usersPage.isUser,
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    requestUser: requestUser(state),

})
const Container = compose(withRouter,connect(mapStateToProps, {initializeApp,requestUser}))(App);

const MainApp = props=> <BrowserRouter>
    <Provider store={store}>
        <Container />
    </Provider>
</BrowserRouter>

export  default MainApp;
