import * as React from 'react';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';


interface Props {

}

const AppPlayer: React.FC<Props> = (prop) => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
         
        </PlayerLeft>
        <PlayerRight>
          
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
}

export default AppPlayer;