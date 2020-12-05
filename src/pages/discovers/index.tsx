import * as React from 'react';
import { discoversMenu } from "../../common/local-data";
import {Route} from 'react-router-dom'
import { NavLink ,Redirect} from 'react-router-dom';
import {
  DiscoverWrapper,
  TopMenu
} from './style'


import AppRecommend from '@/pages/discovers/c-pages/recommend'
import AppAlbum from '@/pages/discovers/c-pages/album'
import AppArtist from '@/pages/discovers/c-pages/artist'
import AppDjradio from '@/pages/discovers/c-pages/djradio'
import AppSongs from '@/pages/discovers/c-pages/songs'
import AppRanking from  '@/pages/discovers/c-pages/ranking'
import AppPlayer from '@/pages/player'
interface Props{

}

const AppDiscover:React.FC<Props> = (props)=>{
  return(
    <DiscoverWrapper>
      <div className="top">
      <TopMenu className='wrap-v1'>
          {
            discoversMenu.map((item,index)=>{
              return(
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      <NavLink to='/discovers'>
      <Redirect to="/discovers/recommend"/>
      </NavLink>
      <NavLink to='/discovers/recommend'></NavLink>
      <NavLink to='/discovers/ranking'></NavLink>
      <NavLink to='/discovers/songs'></NavLink>
      <NavLink to="/discovers/djradio"></NavLink>
      <NavLink to="/discovers/artist"></NavLink>
      <NavLink to="/discovers/album"></NavLink>
      <NavLink to='/discovers/player'></NavLink>
      <Route path='/discovers/recommend' component={ AppRecommend}></Route>
      <Route path='/discovers/ranking' component={ AppRanking}></Route>
      <Route path='/discovers/songs' component={ AppSongs}></Route>
      <Route path='/discovers/djradio' component={AppDjradio}></Route>
      <Route path='/discovers/artist' component={ AppArtist}></Route>
      <Route path='/discovers/album' component={ AppAlbum}></Route>
      <Route path='/discovers/player' component={AppPlayer}></Route>
    </DiscoverWrapper>
  )
}

export default AppDiscover;