// import { memo } from 'react';
import BottomContainer from '../pageBottom/bottom.jsx';
import LeftHero from './LeftHero.jsx';
import Card from './card/card.jsx';

const MainCenter = (props) => {
  props = props.data

//   console.log(props)
  return (
      <div className="h-full w-full flex items-center justify-between gap-0.5 scrollbar-none" >

            <div className='leftContainer w-4/12 h-full pl-10 scrollbar-none'>
                <LeftHero data = {props}/>
            </div>

            <div className='rightContainer flex flex-col w-7/12 h-full '>
                <div className='w-full h-5/6 overflow-auto scrollbar-none flex flex-row  gap-3.5 items-center pl-6'>
                    {
                        props.cardsData.map((ele, idx)=> {
                            return <Card id={idx} element={ele} data={props}/>
                        })
                    }
                </div>

                <BottomContainer data={props} />
    
            </div>
      </div>
  );
};

export default MainCenter;