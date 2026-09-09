// import { memo } from 'react';
// import RightContent from './rightContent';
import NavBar from './NavBar/navBar';
import MainCenter from './centerComponent/mainCenter';
import BottomContainer from './pageBottom/bottom';

const HomePage = (props) => {
  props = props.data
  return (
    <div className='homePage relative h-screen w-screen scrollbar-none' style={{backgroundImage: `url(${props.cardsData[props.activeDataIndex].img})`, backgroundSize: "cover", }}>
      <NavBar navData={props.navData} />
      <div className='absolute bottom-0 flex flex-col right-0 w-full h-4/6 scrollbar-none'>
          <MainCenter data={props}/>
      </div>
    </div>
  );
};


export default HomePage;


// design url https://v1.pinimg.com/videos/mc/expMp4/1d/d5/88/1dd58856b2d8c65989c995c88295092a_t1.mp4