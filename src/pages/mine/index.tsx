import * as React from 'react';
import { MineWrapper } from './style';
interface Props{

}

const AppMine:React.FC<Props> = (prop)=>{
  return(
    <MineWrapper>
    <div className="content wrap-v2">
      <div className="pic">
        <a className="login" href="/#">立即登录</a>
      </div>
    </div>
  </MineWrapper>
  )
}

export default AppMine;