import *as React from 'react'
import Axios from 'axios'
import { useRef, useEffect, useState, useCallback } from 'react'
import { parseLyric} from '@/utils/lyric-parse'
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

import { NavLink } from 'react-router-dom';
import { Slider,message } from 'antd';
import { getPlayUrl,  formatDate } from '@/utils/format-utils';
import Bus from '@/common/eventbus'
interface Props {

}
interface DataType {
  [key: string]: any
}

const AppPlayerBar: React.FC<Props> = (props) => {
  //当前歌曲
  const [currentSong, setcurrentSong] = useState<Array<DataType>>([{
    "name": "有何不可",
    "id": 167876,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 5771,
        "name": "许嵩",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "600902000007916021",
    "fee": 8,
    "v": 49,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 16953,
      "name": "自定义",
      "picUrl": "https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      "tns": [],
      "pic_str": "18590542604286213",
      "pic": 18590542604286212
    },
    "dt": 241840,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 9675799,
      "vd": -21099
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 5805497,
      "vd": -18400
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 3870346,
      "vd": -16900
    },
    "a": null,
    "cd": "1",
    "no": 3,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 2,
    "s_id": 0,
    "mark": 8192,
    "originCoverType": 0,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "rtype": 0,
    "rurl": null,
    "mst": 9,
    "cp": 14026,
    "publishTime": 1231516800000
  }]);
 
  const audioRef = useRef<any>();
  //当前时间
  const [currentTime,setcurrentTime] = useState(0);
  // 进度
  const [progress,setProgress] = useState(0);
  //是否改变
  const [IsChange,setIsChange] = useState(false);
  //是否播放
  const [isPlaying,setIsPlaying] = useState(false);
  //图片url
  const [picUrl ,setPicUrl] = useState('');
  //歌手名称
  const [singerName,setSingerName] = useState('');
  //歌曲时长
  const [duration,setDuration] = useState(0);
  //歌曲名字
  const [Songname,setSongName]=useState('');
  //播放列表
  const [playList,setPlayList] = useState<any[]>( [
    {
      "name": "有何不可",
      "id": 167876,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000007916021",
      "fee": 8,
      "v": 49,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 16953,
        "name": "自定义",
        "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        "tns": [],
        "pic_str": "18590542604286213",
        "pic": 18590542604286212
      },
      "dt": 241840,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9675799,
        "vd": -21099
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5805497,
        "vd": -18400
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3870346,
        "vd": -16900
      },
      "a": null,
      "cd": "1",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 14026,
      "rtype": 0,
      "rurl": null,
      "publishTime": 1231516800000
    },
    {
      "name": "雅俗共赏",
      "id": 411214279,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 31,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 34749138,
        "name": "青年晚报",
        "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        "tns": [],
        "pic": 3431575794705764
      },
      "dt": 249621,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9987177,
        "vd": -22200
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5992323,
        "vd": -19600
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3994896,
        "vd": -17800
      },
      "a": null,
      "cd": "1",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 5302271,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 14026,
      "publishTime": 1461723397683
    }, {
      "name": "嚣张",
      "id": 1382596189,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 32220939,
          "name": "en",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 10,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 80816891,
        "name": "嚣张",
        "picUrl": "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg",
        "tns": [],
        "pic_str": "109951164271814514",
        "pic": 109951164271814510
      },
      "dt": 253994,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10162605,
        "vd": -55669
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6097581,
        "vd": -53082
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4065069,
        "vd": -51369
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1372818,
      "publishTime": 0
    }
  ]);
 //当前歌曲索引，通过它来切换
  let [currentSongIndex,setcurrentSongIndex] = useState(0)
  //歌曲的id，通过id获取歌曲详细信息
  const [ids,setIds]=useState(0);
  //播放顺序 //0循环播放 1随机播放 -1单曲循环
  const [sequence,setsequence]=useState(0);
  //歌词列表
  const [lyric,setLyric] = useState<any>([])
  //当前歌词索引
  const [currentLyricIndex,setcurrentLyricIndex] = useState<any>(0);
  useEffect(() => {
      Axios.get(`http://123.207.32.32:9001/song/detail?ids=${playList[currentSongIndex].id}`).then(res => {
      setcurrentSong(res.data.songs); 
      const picUrl = (res.data.songs[0].al && res.data.songs[0].al.picUrl + '') || '';
      const  singerName = (res.data.songs[0].ar && res.data.songs[0].ar[0].name) || '未知歌手';
      const duration = (res.data.songs[0].dt) || 0;
      setPicUrl(picUrl);
      setSingerName(singerName);
      setDuration(duration)
      setSongName(res.data.songs[0].name)   
    })
  },[playList[currentSongIndex].id])
  
  const change = ()=>{
    audioRef.current.src = getPlayUrl(playList[currentSongIndex].id)
  }
 

  Bus.addListener('is_from_topranking', data => {
    setIds(data);
  })
   
 const getSongDetail=(ids:number)=>{
  const play_list = playList;
  const index = play_list.findIndex((song:any)=>song.id === ids);
  //在playList找到了歌曲
  let song =null;
  if(index!==-1){
    setcurrentSongIndex(index);
     song = playList[index];
    setcurrentSong(song)
  }else{
    Axios.get(`http://123.207.32.32:9001/song/detail?ids=${ids}`).then(res=>{
      const song = res.data.songs&&res.data.songs[0];
      if(!song){
        return;
      }
      const newPlayList = [...playList];
      newPlayList.push(song);
      getLyric(playList[currentSongIndex].id)
      //更改播放列表，索引以及当前的歌曲
      setPlayList(newPlayList);
      setcurrentSongIndex(newPlayList.length-1)
      setcurrentSong(song);
     
    })  
  }
}

useEffect(()=>{
  getSongDetail(ids);
  getLyric(ids);
},[])
  

const showDuration = formatDate(duration, "mm:ss")
const showTIme = formatDate(currentTime,"mm:ss")

  const playMusic = useCallback(()=>{
    audioRef.current.src = getPlayUrl(playList[currentSongIndex].id)
    getLyric(playList[currentSongIndex].id)
    isPlaying?audioRef.current.pause(): audioRef.current.play();
    setIsPlaying(!isPlaying);
  },[playList[currentSongIndex].id,isPlaying])
  
  const timeUpdate=(e:any)=>{
    const currentTime = e.target.currentTime;
    if(!IsChange){
      setcurrentTime(e.target.currentTime*1000);
      setProgress(currentTime*1000/duration * 100); 

    }
    let lrcLength = lyric.length;
    let i=0;
    for(;i<lrcLength;i++){
      let lyricItem = lyric[i].time;
      if(currentTime*1000<lyricItem){
        break;
      }  
    }   
    
    const finalIndex = i - 1; 
    if( finalIndex!==currentLyricIndex){
        setcurrentLyricIndex(finalIndex);
        message.open({
          key:'lyric',
          content:lyric[i-1].content,
          duration:0,
          className: 'lyric-message',
          type:"success"
        })   
    } 
  }
  
    const sliderChange = useCallback((value)=>{
      setIsChange(true);
      const currentTime = value/100*duration;
      setcurrentTime(currentTime);
      setProgress(value)
      
    },[duration])

    const sliderAfterChange = useCallback((value)=>{
      const currentTime = value/100*duration/1000;
      audioRef.current.currentTime = currentTime;
      setcurrentTime(currentTime*1000)
      setIsChange(false);
      if(!isPlaying){
        playMusic();
      }
    },[duration,isPlaying,playMusic]) 

    const changeSequence = ()=>{
     let currentSequence =sequence+1;
      if(currentSequence === playList.length){
        setsequence(0);  
      }else{
        setsequence(currentSequence)
      }
    }
    const changeMusic=(tag:number)=>{
      audioRef.current.src= getPlayUrl(playList[currentSongIndex].id)
     
      switch (sequence) {
        case 1://随机
          currentSongIndex = Math.floor(Math.random() * playList.length);
          break;
        case 2:
          currentSongIndex = currentSongIndex;
          break;
        default://顺序
          currentSongIndex += tag;
          if (currentSongIndex === playList.length) currentSongIndex = 0; 
          if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
      }
    
      change(); 
      setcurrentSong(playList[currentSongIndex]);
      setcurrentSongIndex(currentSongIndex)
      getLyric(playList[currentSongIndex].id); 
      audioRef.current.play()
    }
    const handleMusicEnded=()=>{
      if (sequence === 2 || playList.length === 1) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }else{
        changeMusic(1)
      }
    } 
    
    
    
    
    const getLyric = (id:number)=>{
     
        Axios.get(`http://123.207.32.32:9001/lyric?id=${id}`).then(res=>{
      
      if(res.data.uncollected){
        return;
      }
        const lyric = res.data.lrc.lyric;
        const lyricList = parseLyric(lyric);
        setLyric(lyricList)
        })
    
    }
   
    console.log(lyric);//歌词列表
    console.log(playList);//歌曲列表
    console.log(currentSong);//当前歌曲
    console.log(currentSongIndex);//当前歌曲索引
    
    
    
    
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className='sprite_playbar btn prev' onClick={e=>changeMusic(-1)}></button>
          <button className='sprite_playbar btn play' onClick={e=>playMusic()}></button>
          <button className='sprite_playbar btn next' onClick={e=>changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discovers/player">
              <img src={picUrl+'?param=34y34'} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">
                {Songname}
                </span>
              <a href="#/" className="singer-name">
                {singerName}
                </a>
            </div>
            <div className="progress">
              <Slider 
              defaultValue={progress} 
              value={progress}
              
              onChange={sliderChange }
              onAfterChange={sliderAfterChange }
               />
              <div className="time">
                <span className="now-time">
                  {showTIme}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {showDuration}
                  </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"
            onClick={e=>changeSequence()}
            ></button>
            <button className="sprite_playbar btn playlist"
            >
            </button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={ timeUpdate} onEnded={handleMusicEnded} />
    </PlaybarWrapper>
  )
}

export default AppPlayerBar