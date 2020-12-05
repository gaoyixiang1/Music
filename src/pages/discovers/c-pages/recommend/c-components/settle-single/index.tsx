import *as React from 'react'
import Axios from 'axios'
import {useEffect,useState } from 'react'
import AppThemeHeader from '@/components/theme-header'

  import {
    SetterSongerWrapper
  } from './style';
import {getSizeImage} from '@/utils/format-utils'
  interface Props{
   
}



const  AppSetSingers:React.FC<Props> = (props)=>{
 const [sings,setSings] = useState([]);
 useEffect(()=>{
    Axios.get('http://123.207.32.32:9001/artist/list?limit=5').then(res=>{
       setSings(res.data.artists)           
    })
 },[])
  return(
    <SetterSongerWrapper>
    <AppThemeHeader title='入驻歌手' more='查看全部'/>
    <div className="singer-list">
        {
          sings.map((item:any, index:number) => {
            return (
              <a href="/singer" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
  </SetterSongerWrapper>
  ) 
}
export default  AppSetSingers