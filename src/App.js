import React from 'react';
import './App.css';
import MyProfile from './components/Profile/MyProfile';
import DialogContainer from './components/Content/Dialogs/Dialog_Container';
import { BrowserRouter, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderApi from './components/Header/HeaderContainer';



const App = () => {

  return <BrowserRouter>
    <div className="app-conteiner">
      <HeaderApi />
      <div className="page_conteiner">
        <MyProfile />
        <div className="content_conteiner">
        <Route path="/profile/:id?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </div>
  </BrowserRouter>
}
export default App;
