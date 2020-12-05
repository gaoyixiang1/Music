import * as React from 'react';
import {useEffect,useState} from 'react'
import Axios from 'axios'
import AppThemeHeader from '@/components/theme-header-recommend'
import AppTopRank from '@/components/top-rank'
import {
  RankingWrapper
} from './style'
interface Props{
   
}


const  AppRecommendRanking:React.FC<Props> = (props)=>{
  
  const [upRank,setupRank] = useState([]);
  const [newRank,setnewRank] = useState([]);
  const [originRank,setoriginRank] = useState([]);
  useEffect(()=>{
    Axios.get('http://123.207.32.32:9001/top/list?idx=0').then(res=>{
     setupRank(res.data.playlist)    
    })
    Axios.get('http://123.207.32.32:9001/top/list?idx=2').then(res=>{
     setnewRank(res.data.playlist)
    })
    Axios.get('http://123.207.32.32:9001/top/list?idx=3').then(res=>{
     setoriginRank(res.data.playlist)
    })
  },[])
  return(
      <RankingWrapper>
    < AppThemeHeader  title='榜单'/>
      <div className="tops">
      <AppTopRank info={upRank} />
      <AppTopRank info={newRank} />
      <AppTopRank info={originRank} />
      </div>
    </RankingWrapper>
  ) 
}
export default  AppRecommendRanking