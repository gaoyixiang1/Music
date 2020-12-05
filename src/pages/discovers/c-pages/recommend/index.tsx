import * as React from 'react';
import AppTopBanner from './c-components/top-banners'
import AppHotRecommend from './c-components/hot-recommend'
import AppRecommendRanking from './c-components/recommend-ranking'
import AppNewAlbum from './c-components/new-album'
import AppUserLogin from './c-components/user-login'
import AppSetSingers from './c-components/settle-single'
import AppHotRadio from './c-components/hot-anchors'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
interface Props {
}

const AppRecommend: React.FC<Props> = (props) => {
  
  return (
    <RecommendWraper>
      <AppTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <AppHotRecommend />
          <AppNewAlbum />
          <AppRecommendRanking  />
        </RecommendLeft>
        <RecommendRight>
          <AppUserLogin />
          <AppSetSingers />
          <AppHotRadio />
        </RecommendRight>
      </Content>

    </RecommendWraper>
  )
}
export default AppRecommend