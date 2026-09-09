// import { memo } from 'react';
import { useState } from "react";


const RightOptions = (props) => {
    return (
        <a className="mr-4 p-2.5 shadow-2xl rounded-2xl" href={props.url}>{props.text}</a>
    )
}



const NavBar = (props) => {
    // console.log("props", props);

    const [display, setDisplay] = useState(true)
    const [activeStoryNumber, setActiveStoryNumber] = useState(0)

    return (
        <div className="NavBar flex justify-between fixed left-0 w-full z-50 px-4 py-3.5 bg-transparent">        
            <div className="rightContent">
                <div className="brand font-bold text-white shadow-2xl">Jundle Book</div>
            </div>

            <div className="leftContent">
                    {
                    props.navData.map((field, index)=>{
                        return <RightOptions key={index} url={field.url} text={field.text} />
                    })}
            </div> 
        
        </div>
    );
};

export default NavBar;