import React, {useEffect} from "react";
import "./App.css";
import Resume from "./components/Profile/Resume";
import DialogContainer from "./components/Dialogs/Dialog_Container";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import AuthDirect from "./components/Preloader/AuthDirect";
import {connect, Provider} from "react-redux";
import { compose } from "redux";
import {initializeApp} from "./redux/appReducer"
import Preloader from "./components/Preloader/Preloader";
import store,{AppStateType} from "./redux/redux_store";
import Paginator from "./components/Users/Paginator";
import {getCurrentPage, getPageSize, getTotalUsersCount} from "./redux/UsersSelector";
import {requestUser} from "./redux/usersReducer";
import HeaderContainer from "./components/Header/HeaderContainer";
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: (initialized:boolean) => void
    requestUser:(currentPage: number,pageSize: number)=>void
}

const App:React.FC<MapPropsType&DispatchPropsType> = ({initializeApp,initialized,isUsers,currentPage,totalUsersCount,pageSize}) => {
  useEffect(() => {
    initializeApp(initialized)
  }, [initializeApp,initialized]);
    return  !initialized ? <Preloader />
      :<div className="app-container">
          <HeaderContainer />
          <div className="page-container">
            <div className="content-container">
              <Route exact path="/" render={()=><Resume/>}/>
              <Route path="/profile/:id?" render={() => <ProfileContainer/>}/>
              <Route path="/dialogs" render={() => <DialogContainer/>}/>
              <Route path="/users" render={() => <UsersContainer/>}/>
              <Route path="/login" render={() => <AuthDirect/>}/>
            </div>
          </div>
          {isUsers && <Paginator currentPage={currentPage} requestUser={requestUser} totalItemCount={totalUsersCount} pageSize={pageSize}/>}

      </div>

};
const  mapStateToProps = (state:AppStateType) =>({
    initialized: state.app.initialized,
    isUsers: state.usersPage.isUser,
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    requestUser: requestUser(state.usersPage.currentPage,state.usersPage.pageSize),
})
const Container = compose(withRouter,connect(mapStateToProps, {initializeApp,requestUser}))(App) as any;

const MainApp:React.FC = () => <BrowserRouter>
    <Provider store={store}>
        <Container/>
    </Provider>
</BrowserRouter>

export  default MainApp;
