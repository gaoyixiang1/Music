import * as React from 'react';
import { FriendWrapper } from './style';
interface Props{

}

const AppFriends:React.FC<Props> = (prop)=>{
  return(
    <FriendWrapper>
    <div className="content wrap-v2">
      <div className="pic">
        <a className="login" href="/#">立即登录</a>
      </div>
    </div>
  </FriendWrapper>
  )
}

export default AppFriends;