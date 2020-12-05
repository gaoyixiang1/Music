import {Redirect} from 'react-router-dom'

import * as React from 'react'

import AppDiscover from '@/pages/discovers'
import AppMine from '@/pages/mine'
import AppFriends from '@/pages/friends'
import AppRecommend from '@/pages/discovers/c-pages/recommend'
import AppAlbum from '@/pages/discovers/c-pages/album'
import AppArtist from '@/pages/discovers/c-pages/artist'
import AppDjradio from '@/pages/discovers/c-pages/djradio'
import AppSongs from '@/pages/discovers/c-pages/songs'
import AppRanking from  '@/pages/discovers/c-pages/ranking'
import AppPlayer from '@/pages/player'


const routes:any[]  = [
    {
        path:'/',
        exact:true,
        render:()=>(
            <Redirect to='/discovers'></Redirect>
        )
    },
    {
        path:'/discovers',
        component:AppDiscover,
        routes:[
        {
            path:'/discovers',
            exact:true,
            render: () => (
                <Redirect to="/discovers/recommend"/>
              )
         },
         {
            path:'/discovers/recommend',
            exact:true,
            component:AppRecommend
         },
         {
             path:'/discovers/ranking',
             exact:true,
             component:AppRanking
         },
         {
             path:'/discovers/songs',
             exact:true,
             component:AppSongs
         },
         {
            path: "/discovers/djradio",
            exact: true,
            component: AppDjradio
          },
          {
            path: "/discovers/artist",
            exact:true,
            component: AppArtist
          },
          {
            path: "/discovers/album",
            exact:true,
            component: AppAlbum
          },
          {
            path:'/discovers/player',
            component:AppPlayer
          }
        ]
    },
    {
        path:'/mine',
        component:AppMine
    },
    {
        path:'/friends',
        component:AppFriends
    }
];
export default routes