import { useEffect, useState } from "react";
import Card from "./Components/card";
import axios from 'axios';


const App = () => {


  const [pageNumber, setPageNumber] = useState(1)
  const [limit, setLimit] = useState(30)
  const [serverUrl, setServerUrl] = useState(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
  const [photos, setPhotos] = useState([])


  useEffect(()=>{
    async function getData(){
        // setServerUrl()
        // console.log(serverUrl)
        let serverUrl = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`
        let response = await axios.get(serverUrl)
        console.log(serverUrl);
        
        response = response.data
        setPhotos(response)
    }
    getData()
  }, [pageNumber])

  return (
    <div className='w-screen h-screen overflow-y-auto flex flex-col justify-center'>
      <div className="text-center pt-1.5 pb-2 font-bold text-4xl w-screen justify-center top-0 bg-blue-500">Gallery</div>
      <div className="main_photos_container flex grow flex-row flex-wrap gap-3 justify-center overflow-y-auto scrollbar-none">
          {photos.map((element, index)=>{
            return <Card pageNumber={pageNumber} limit={limit} element={element} />
          })}
      </div>

      <div className="BottomContainer flex w-screen justify-between min-h-1/12 items-center pl-3 pr-3 mb-1">
            <button className="bg-amber-400 h-full pl-7 pr-7 rounded-2xl active:scale-50"
            onClick={()=>{
              setPhotos([])
              if(pageNumber>1){
                setPageNumber(pageNumber-1)
              }
            }}>Prev</button>

            <p>Page NO {pageNumber}</p>

            <button
            className="bg-amber-400 h-full pl-7 pr-7 rounded-2xl active:scale-50"
            onClick={()=>{
                setPhotos([])
                setPageNumber(pageNumber+1)
            }}
            >Next</button>
      </div>
        
    </div>
  );
};

export default App