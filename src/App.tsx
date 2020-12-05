import * as React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
// import routes from './router';
import {Route,Redirect} from 'react-router-dom'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './pages/player/app-player-bar'
import AppDiscover from './pages/discovers'
import AppMine from './pages/mine'
import AppFriends from './pages/friends'

interface Props{

}

const App:React.FC<Props> = (prop)=>{

  return(
    <HashRouter>
      <AppHeader/>
       <NavLink to="/">
       <Redirect to='/discovers/recommend'></Redirect>
       </NavLink>
       <NavLink to='/discovers'></NavLink>
       <NavLink to='/mine'></NavLink>
       <NavLink to='/friends'></NavLink>
       <Route component={AppDiscover} path='/discovers'></Route>
       <Route component={AppMine} path='/mine'></Route>
       <Route component={AppFriends} path='/friends'></Route>
      <AppFooter/>
      <AppPlayerBar/>
  </HashRouter>
  )
}

export default App;