import * as React from 'react';
import AppRankingHeader from './c-components/ranking-header'
// import AppRankingList from './c-components/ranking-list'
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";
interface Props{

}
const AppRanking:React.FC<Props> = (prop)=>{
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        {/* <HYTopRanking/> */}
      </RankingLeft>
      <RankingRight>
        <AppRankingHeader/>
        {/* <HYRankingList/> */}
      </RankingRight>
    </RankingWrapper>
  )
}

export default AppRanking;