import * as React from 'react';
import{
    HeaderWrapper
} from './style'
interface Props{
    title:string,
    keywords?:any
}

const  AppThemeHeader:React.FC<Props> = (props)=>{
 
const {title,keywords=[]} = props;
  return(
    <HeaderWrapper className='sprite_02'>
        <div className='left'>
         <h3 className='title'>{title}</h3>
         <div className='keyword'>
             {
                 keywords.map((item:any,index:number)=>{
                     return(
                         <div className='item' key={item}>
                             <a href='todo'>{item}</a>
                             <span className='divider'>|</span>
                         </div>
                     )
                 })
             }
         </div>
        </div>
        <div className='right'>
            <a href='todo'>更多</a>
            <i className='icon sprite_02'></i>
        </div>
    </HeaderWrapper>
  ) 
}
export default AppThemeHeader