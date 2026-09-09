// import { memo } from 'react';

const LeftHero = (props) => {
  props = props.data
  const bgData = props.cardsData[props.activeDataIndex]
  return (
    <div className="h-full flex flex-col gap-1.5 scrollbar-none">
        <p className="fon-bold text-5xl text-amber-50">--</p>
        <p className="CreatureFamily font-sans font-bold text-white">{bgData.header}</p>

        <h2 className="CreatureName font-display font-bold text-8xl text-white">
            {bgData.name}
        </h2>

        <p className="CreatureDiscription text-white">
          {bgData.description}
        </p>
        
        <div className="buttons flex gap-2 text-white">
            <button href="#" className="btn1 p-4 rounded-full w-15 aspect-square border-2">0</button>
            <button href="#" className="btn2 p-0 pl-4 pr-4 rounded-2xl border-2">Learn More</button>
        </div>
    </div>
  );
};

export default LeftHero;