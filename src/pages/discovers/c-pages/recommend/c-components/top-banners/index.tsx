import Axios from 'axios';
import * as React from 'react';
import {useEffect,useState,useRef,useCallback} from 'react'
import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

interface Props{
}
interface States{
  TopBanners:[{
    imageUrl:string
  }]
}
const AppTopBanner:React.FC<Props> = ()=>{

  
    const [TopBanners,setTopBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerRef: React.MutableRefObject<HTMLDivElement|any > = useRef();
    
    useEffect(()=>{
      Axios.get('http://123.207.32.32:9001/banner').then(res=>{
       setTopBanners(res.data.banners)        
      })
    },[])
    
    const bannerChange = useCallback((from, to) => {
      setTimeout(() => {
        setCurrentIndex(to);
      }, 0);
    }, []);

    const bgImage = TopBanners[currentIndex] && (TopBanners[currentIndex]["imageUrl"] + "?imageView&blur=40x20")
    return(
      <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
            {
              TopBanners.map((item:{imageUrl:string,typeTitle:string}, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl className="control">
          <button className="btn left" onClick={e=>{bannerRef.current.prev()}}></button>
          <button className="btn right" onClick={e=>{bannerRef.current.next()}}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
    )
}
export default AppTopBanner