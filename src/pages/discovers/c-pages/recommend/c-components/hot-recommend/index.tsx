import Axios from 'axios';
import * as React from 'react';
import {useState,useEffect} from  'react'
import AppThemeHeader from '@/components/theme-header-recommend'
import AppSongs from  '@/components/songs'
import{
    HotRecommendWrapper
} from './style'
interface Props{
}

const AppHotRecommend:React.FC<Props> = (props)=>{
  const [hotRecommend,sethotRecommend] = useState([]);
  useEffect(()=>{
    Axios.get('http://123.207.32.32:9001/personalized?limit=8').then(res=>{
      sethotRecommend(res.data.result);
    })
  },[])
  return(
    <HotRecommendWrapper>
    <AppThemeHeader title='热门推荐' keywords={["华语","流行","民谣","摇滚","电子"]}/>
    <div className="recommend-list">
        {
         hotRecommend.map((item:{name:string,id:any}, index) => {
         return <AppSongs  key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  ) 
}
export default AppHotRecommend