// import { memo } from 'react';

const BottomContainer = (props) => {
  return (
    <div className="grow flex flex-row justify-between items-center gap-16 p-3.5 text-white">
        <div className="flex gap-2.5">
          <button 
            className="font-bold h-full aspect-square rounded-full p-2.5 border-2 items-center justify-center active:scale-50 bg-black/45"
            onClick={()=>{props.data.setActiveDataIndex((props.data.activeDataIndex + 1) > 1 ? props.data.activeDataIndex - 1 : props.data.activeDataIndex )}}
            >
            Prev
          </button> 

          <button 
          className="font-bold h-full aspect-square rounded-full p-2.5 border-2 items-center justify-center active:scale-50 bg-black/45"
          onClick={()=>{props.data.setActiveDataIndex(props.data.activeDataIndex + 1)}}
          >
          
            Next
          </button>
        </div>

        <div className="progressBar grow">
          <progress className='w-full h-0.5' max={100} value={99}></progress>
        </div>

        <div className="opendStoryNumber flex flex-row h-full aspect-square justify-center items-center rounded-full p-2.5 font-bold font-display text-4xl">
             {props.data.activeDataIndex<10 ? '0' + (props.data.activeDataIndex + 1) : props.data.activeDataIndex + 1 }
        </div>
    </div>
  )
}
export default BottomContainer