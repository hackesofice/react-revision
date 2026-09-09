

 
const Card = (props) => {
  // console.log(props)

  const makeImgGlobal = (e) => {
    props.data.setActiveDataIndex(props.id)
  }

  return (
    <div onClick={makeImgGlobal} className='Card active:scale-90 relative h-11/12 min-w-3/12 rounded-2xl shadow-black shadow-2xl p-1.5 pl-2.5 flex flex-col justify-end ' style={{backgroundImage: `url(${props.element.img})`}}>
       
            <p className='font-bold text-4xl pl-1.5 text-amber-50'>
                --
            </p>

            <h1 className="pb-1.5 text-amber-50">
                {props.element.header}
            </h1>

            <p className='font-bold text-2xl mb-3.5 font-display text-amber-50'>
                {props.element.name}
            </p>
      
    </div>
  );
};

export default Card