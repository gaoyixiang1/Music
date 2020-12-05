import * as React from 'react';
import{
    TopRankingWrapper
} from './style'
import { getSizeImage } from '@/utils/format-utils';
import Bus from '@/common/eventbus'
interface Props{
    info:any
  }

const   AppTopRank:React.FC<Props> = (props)=>{
 const {info} = props
 const { tracks = [] } = info;
 const playMusic = (item:any) => {
  Bus.emit('is_from_topranking',item.id)
  }

    return (
      <TopRankingWrapper>
          <div className="header">
              <div className="image">
                  <img src={getSizeImage(info.coverImgUrl)} alt=""/>
                  <a href="/todo" className="image_cover">ranking</a>
              </div>
              <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
          </div>
          <div className="list">
          {
          tracks.slice(0, 10).map((item:any, index:number) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" 
                            onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
          </div>
          <div className="footer">
          <a href="/todo">查看全部 &gt;</a>
          </div>
      </TopRankingWrapper>
    )
}

export default  AppTopRank