import * as React from 'react';
import Axios from 'axios';
import {useEffect,useState,useRef} from 'react'
import AppThemeHeader from '@/components/theme-header-recommend'
import AppAlbum from '@/components/album-recommend'
import { Carousel } from 'antd';
import {
  AlbumWrapper
} from './style'

interface Props{
   
}

const  AppNewAlbum:React.FC<Props> = (props)=>{
 const [newAlbum,setnewAlbum] = useState([]);
 const pageRef: React.MutableRefObject<HTMLDivElement|any > = useRef();
 useEffect(()=>{
   Axios.get('http://123.207.32.32:9001/top/album?limit=10').then(res=>{
     setnewAlbum(res.data.albums)
   })
 },[])
  return(
      <AlbumWrapper>
    < AppThemeHeader  title='新碟上架'/>
    <div className="content">
        <button className="arrow arrow-left sprite_02" 
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbum.slice(item * 5, (item + 1) * 5).map((iten:{id:any}) => {
                        return <AppAlbum key={iten.id} 
                                             info={iten} 
                                             size={100} 
                                             width={118} 
                                             bgp="-570px"/>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  ) 
}
export default AppNewAlbum