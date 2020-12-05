import *as React from 'react'

  import {
    HeaderWrapper
  } from './style';

  interface Props{
   title:string,
   more?:any
}



const  AppThemeHeader:React.FC<Props> = (props)=>{
    const { title, more } = props;
  return(
    < HeaderWrapper>
    <h3>{title}</h3>
      <a href="/abc">{more}</a>
  </ HeaderWrapper>
  ) 
}
export default  AppThemeHeader