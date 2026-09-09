import { memo } from 'react';

const Card = (props) => {
  // console.log(props)
  return (
    <a className="min-w-3.5 min-h-5 max-w-xl rounded-2xl overflow-hidden p-2" href={props.element.url} target="_blank">
        <img className="rounded-2xl" alt="Photo Unavilable" src={props.element.download_url}/>
        <p className='font-bold'>
          {props.element.author}
        </p>
    </a>
  );
};

export default Card