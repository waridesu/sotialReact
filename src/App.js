import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogContainer from './components/Content/Dialogs/Dialog_Container';
import { BrowserRouter, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';



const App = () => {

  return <BrowserRouter>
    <div className="app-conteiner">
      <Header />
      <div className="page_conteiner">
        <Profile />
        <div className="content_conteiner">
          <Route path="/dialogs" render={() => <DialogContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </div>
  </BrowserRouter>
}
export default App;
