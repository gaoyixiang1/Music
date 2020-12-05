import *as React from 'react'
import {
    hotRadios
  } from "@/common/local-data";
  import AppThemeHeader from '@/components/theme-header'
  import {
    HotRadioWrapper
  } from './style';

  interface Props{
   
}



const  AppHotRadio:React.FC<Props> = (props)=>{
 
  return(
    < HotRadioWrapper>
    <AppThemeHeader title='热门主播'/>
    <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
  </ HotRadioWrapper>
  ) 
}
export default  AppHotRadio