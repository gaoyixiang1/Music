import * as React from 'react';
import {useState,useEffect} from 'react'
import Axios from 'axios'
import { formatMonthDay } from '@/utils/format-utils'
import {RankingHeaderWrapper} from './style'
import  AppSongOperationBar from '@/components/song-operation-bar'
interface Props{

}
const AppRankingHeader:React.FC<Props> = (prop)=>{
    const [playList,setPlayList] = useState<any>({});
    const [topInfo,setTopInfo] = useState<any>({}   );
    useEffect(()=>{
        Axios.get('http://123.207.32.32:9001/toplist').then(res=>{
            setPlayList(res.data)
            setTopInfo(res.data.list)
        })
    },[])
    
    // const topInfo =playList&& playList.list;
    console.log(topInfo);
    
    return (
        <RankingHeaderWrapper>
          <div className="image">
            <img src={topInfo.coverImgUrl} alt="" />
            <span className="image_cover">封面</span>
          </div>
          <div className="info">
            <div className="title">{topInfo.name}</div>
            <div className="time">
              <i className="clock sprite_icon2"></i>
              <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
              <div className="update-f">（{"每日更新:TODO"}）</div>
            </div>
            <AppSongOperationBar favorTitle={`(${topInfo.subscribedCount})`}
                               shareTitle={`(${topInfo.shareCount})`} 
                                 downloadTitle="下载" 
                                commentTitle={`(${topInfo.commentCount})`}/> 
          </div>
        </RankingHeaderWrapper>
      )
}

export default AppRankingHeader;